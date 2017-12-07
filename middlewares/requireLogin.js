module.exports = (req, res, next) => {
    if (!req.auth) {
        return res.status(401).send({ error: 'You must log in! '});
    }

    next();
}