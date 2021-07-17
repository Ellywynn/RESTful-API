const User = require('../models/User');
const Role = require('../models/Role');
const UserGroup = require('../models/UserGroup');

/** Gets the user data from database by session id */
module.exports = async (req, res, next) => {
    const {userId} = req.session;
    if(userId) {
        const user = await User.findOne({
            where: {id: userId},
            include: [
                {
                    model: Role,
                    attributes: ['role'],
                },
                {
                    model: UserGroup,
                    attributes: ['group']
                }
            ]
        });
        const userInfo = {
            userId: user.id,
            username: user.username,
            email: user.email,
            role: user.role.role,
            group: user.group.group,
            avatar: user.avatar
        }
        res.locals.user = userInfo;
    }
    next();
}