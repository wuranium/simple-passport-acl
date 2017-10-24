
/**
* CONST
*/
const MAIN_RM = '/';
const LOGIN_RM = '/login';
const UNDEFINED_CONST = 'undefined';
/**
 * Export constructors.
 */
module.exports = function(role) {
    return function(req, res, next) {
        if (req.isAuthenticated()) {
            if (typeof (role) != UNDEFINED_CONST) {
                if ((req.user.dataValues.role & role) == role)
                    return next();
                else
                    res.redirect(MAIN_RM);
            } else {
                return next();
            }
        } else {
            res.redirect(LOGIN_RM);
        }
    }
};
