module.exports = function(role) {
    return function(req, res, next) {
        if (req.isAuthenticated()) {
            if (typeof (role) != 'undefined') {
                if ((req.user.dataValues.role & role) > 0)
                    return next();
                else
                    res.redirect('/');
            } else {
                return next();
            }
        } else {
            res.redirect('/login');
        }
    }
};