/** Requires appropriate role to get access */
module.exports = (roles) => {
    return (req, res, next) => {
        const {role} = res.locals.user;
        const allowAccess = roles.find(allowedRole => role === allowedRole);
        if(!allowAccess) {
            return res.status(403).redirect('/');
        }
        next();
    }
}