const Controller = require('./defaultController');
const models = require('../models/index');

module.exports = {
    author: new Controller(models.Author),
    store: new Controller(models.Store),
    city: new Controller(models.City),
    book: new Controller(models.Book),
    bookType: new Controller(models.BookType),
    employee: new Controller(models.Employee),
    employeePos: new Controller(models.EmployeePosition),
    genre: new Controller(models.Genre),
    language: new Controller(models.Language),
    role: new Controller(models.Role),
    promotion: new Controller(models.Promotion),
    user: new Controller(models.User),
    userGroup: new Controller(models.UserGroup),
    order: new Controller(models.Order),
    basket: new Controller(models.Basket),
    basketBook: new Controller(models.BasketBook)
}