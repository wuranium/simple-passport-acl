module.exports = function(role) {
    return function(req, res, next) {
        if (req.isAuthenticated()) {
            if (typeof (role) != 'undefined') {
                if ((req.user.dataValues.role & role) == role)
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
