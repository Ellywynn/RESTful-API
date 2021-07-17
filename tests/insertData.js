const { UserGroup, User, Role } = require('../models');
const bcrypt = require('bcrypt');

module.exports = async () => {
    Role.create({role: "default"});
    UserGroup.create({group: "user"});
    UserGroup.create({group: "admin"});

    const password = await bcrypt.hash('asdf', 10);

    User.create({
        email: 'email@mail.com',
        username: 'admin',
        password
    });
    console.log('Instances created.');
}