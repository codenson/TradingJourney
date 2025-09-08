#!/bin/bash
set -e

echo "=== Updating system ==="
sudo dnf update -y

# === Install Node.js 22.x and git ===
echo "=== Installing Node.js and git ==="
curl -fsSL https://rpm.nodesource.com/setup_22.x | sudo bash -
sudo dnf install -y nodejs git

# === Install Nginx ===
echo "=== Installing Nginx ==="
sudo dnf install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx

# === Clone your public repo ===
cd ~
if [ -d TradingJourney ]; then
    echo "=== Removing old TradingJourney repo ==="
    rm -rf TradingJourney
fi

echo "=== Cloning TradingJourney repo ==="
git clone https://github.com/codenson/TradingJourney.git
cd TradingJourney

# === Backend setup ===
echo "=== Setting up Backend ==="
cd BackEnd
npm install
cd ..

# === Frontend setup ===
echo "=== Setting up Frontend ==="
cd FrontEnd/client
npm install --legacy-peer-deps

# Update vite.config.js safely to merge server config
VITE_CONFIG="vite.config.js"
if grep -q "defineConfig(" $VITE_CONFIG; then
    echo "=== Updating vite.config.js server configuration ==="
    # Check if server already exists
    if ! grep -q "server:" $VITE_CONFIG; then
        sed -i '/export default defineConfig({/a\
  server: {\
    host: true,\
    port: 5173,\
    allowedHosts: ["*"]\
  },' $VITE_CONFIG
    fi
else
    # If defineConfig not found, create minimal config
    cat > $VITE_CONFIG <<EOL
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: ["*"]
  }
})
EOL
fi
cd ../../..

# === Nginx configuration ===
echo "=== Configuring Nginx ==="
sudo tee /etc/nginx/conf.d/tradingjourney.conf > /dev/null <<EOL
server {
    listen 80;

    server_name _;

    location / {
        proxy_pass http://127.0.0.1:5173;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOL

sudo nginx -t
sudo systemctl restart nginx

# === Run backend and frontend ===
echo "=== Starting Backend & Frontend ==="
cd ~/TradingJourney
npx concurrently "npm --prefix BackEnd run dev" "npm --prefix FrontEnd/client run dev"
