module.exports = app => {
    app.post('/api/stripe', (req, res) => {
        req.logout();
        res.redirect('/');
    });
};