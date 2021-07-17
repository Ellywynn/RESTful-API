/** Checks if the user is already authorized */
module.exports = (req, res, next) => {
    if(req.session.user) {
        return res.redirect('/');
    }
    next();
}