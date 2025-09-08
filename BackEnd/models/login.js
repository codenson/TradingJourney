app.post('/login', async (req, res) => {
    console.log("Login request received");

    const { email, password, rememberMe } = req.body;

    try {
        const [result] = await AWS_RDS_db.query(
            'SELECT password FROM users  WHERE email = ? ',
            [email]
        );
        if (result.length > 0) {
            const storedHashedPassword = result[0].password;
            const isMatch = await bcrypt.compare(password, storedHashedPassword);
            if (isMatch) {

                console.log("Password match successful");
                req.session.email = email;
                if (rememberMe) {
                    req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000;
                } else {
                    req.session.cookie.expires = false;

                }
                res.status(200).json({ message: 'Login successful' });

            }
            else if (!isMatch) {
                res.status(500).json({ error: 'Invalid email or password' });
            }



        }
    } catch (err) {
        console.error('Database error:', err);
        res.status(404).json({ error: 'Network error' });
    }

})
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
            return res.status(500).json({ error: 'Failed to log out' });
        }
        res.status(200).json({ message: 'Logged out successfully' });
    });
});

app.post('/signup', async (req, res) => {
    console.log('Request body:', req.body); // Debug log

    const { email, name, password } = req.body;
    if (email.length === 0 || name.length === 0 || password.length === 0) {
        console.log('Invalid input:', { email, name, password });
        return res.status(500).json({ error: 'All fields are required' });
    }
    // currUser = email;


    const userCheck = await AWS_RDS_db.query('SELECT email FROM users WHERE email = ?', [email]);
    if (userCheck[0].length > 0) {
        console.log('User already exists:', email);
        return res.status(500).json({ error: 'User already exists' });

    }
    else {

        try {
            const hashedPassword = bcrypt.hashSync(password, 10);
            const [result] = await AWS_RDS_db.query(
                'INSERT INTO users  (name, email, password) VALUES (?, ?, ?)',
                [name, email, hashedPassword]
            );
            req.session.email = email;

            res.status(200).json({ message: 'User added', insertId: result.insertId });
        } catch (err) {
            console.error('Database error:', err);
            res.status(500).json({ error: 'Database error' });
        }
    }



});
app.post('/forgetPassword', async (req, res) => {
    const { email } = req.body;
    console.log('Forget password request for email:', email); // Debug log

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false, // <- disables certificate validation
        },
    });



    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Password Reset Request',
        html: `
          <p>You requested a password reset.</p>
      
        `,
    };

    var response = await transporter.sendMail(mailOptions);
    if (response.accepted.length > 0) {
        console.log('Email sent successfully');
    } else {
        console.log('Email sending failed');
    }

    res.status(200).json({ message: 'Password reset email sent' });



});