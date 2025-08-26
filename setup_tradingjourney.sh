#!/bin/bash
set -e

# === 1. Update system ===
sudo yum update -y

# === 2. Install Node.js 22.x and npm ===
curl -fsSL https://rpm.nodesource.com/setup_22.x | sudo bash -
sudo yum install -y nodejs git

# === 3. Install Nginx ===
sudo amazon-linux-extras enable nginx1
sudo yum install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx

# === 4. Clone your public repo ===
cd ~
if [ ! -d TradingJourney ]; then
    git clone https://github.com/codenson/TradingJourney.git
fi

cd TradingJourney

# === 5. Backend setup ===
cd BackEnd
npm install
cd ..

# === 6. Frontend setup ===
cd FrontEnd/client
npm install

# Update vite.config.js to allow access from EC2 public DNS
VITE_CONFIG="vite.config.js"
if ! grep -q "server: {" $VITE_CONFIG; then
    echo "Updating vite.config.js for host access"
    cat >> $VITE_CONFIG <<EOL

server: {
  host: true,
  port: 5173,
  allowedHosts: ['*']
}
EOL
fi
cd ../../..

# === 7. Nginx configuration ===
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

# === 8. Run backend and frontend ===
cd ~/TradingJourney
npx concurrently "npm --prefix BackEnd run dev" "npm --prefix FrontEnd/client run dev"
