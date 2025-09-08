
export default function attachEmail(req, res, next) {
    req.email = req.session?.email || req.headers['x-user-email'] || req.query.email;

    if (!req.email) {
        return res.status(401).json({ error: "Email not provided" });
    }

    next();
}
