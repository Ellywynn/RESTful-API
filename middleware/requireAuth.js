/** Redirects user to the login page if not authorized already */
module.exports = (req, res, next) => {
    if(!req.session.user) {
        return res.redirect('/auth/login');
    }
    next();
}