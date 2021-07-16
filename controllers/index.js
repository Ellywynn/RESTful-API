const BaseController = require('./baseController');
const models = require('../models/index');

module.exports = {
    author: new BaseController(models.Author),
    store: new BaseController(models.Store),
    city: new BaseController(models.City),
    book: new BaseController(models.Book),
    bookType: new BaseController(models.BookType),
    employee: new BaseController(models.Employee),
    employeePos: new BaseController(models.EmployeePosition),
    genre: new BaseController(models.Genre),
    language: new BaseController(models.Language),
    role: new BaseController(models.Role),
    promotion: new BaseController(models.Promotion),
    user: new BaseController(models.User),
    userGroup: new BaseController(models.UserGroup),
    order: new BaseController(models.Order),
    basket: new BaseController(models.Basket),
    basketBook: new BaseController(models.BasketBook)
}