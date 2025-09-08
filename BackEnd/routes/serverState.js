import express from 'express';


const serverTestRoute = express.Router();

/**
 * Test endpoint to verify session functionality.
 */
serverTestRoute.get('/test-session', (req, res) => {
    req.session.test = 'hello';
    res.json({ session: req.session });
});


/**
 * Test if server is running during deployment. 
 */
serverTestRoute.get('/', (req, res) => {

    res.send('Server is alive ✅');
});

/**
 * Verifies session and returns the email of the logged-in user.
 */
serverTestRoute.get('/whoami', (req, res) => {

    res.json({ email: req.session.email });
});

export default serverTestRoute;