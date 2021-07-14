const Employee = require('./Employee');
const Store = require('./Store');
const EmployeePosition = require('./EmployeePosition');
const City = require('./City');

Store.hasMany(Employee);
Employee.belongsTo(Store);

Employee.hasOne(EmployeePosition);
EmployeePosition.belongsTo(Employee);

Store.belongsTo(City);

module.exports = {
    Employee, Store
}