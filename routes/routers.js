const controllers = require('../controllers/index');
const Router = require('./CRUDRouter');
const AuthRouter = require('./auth');

module.exports = {
    store: Router(controllers.store),
    city: Router(controllers.city),
    author: Router(controllers.author),
    book: Router(controllers.book),
    bookType: Router(controllers.bookType),
    user: Router(controllers.user),
    userGroup: Router(controllers.userGroup),
    language: Router(controllers.language),
    genre: Router(controllers.genre),
    employee: Router(controllers.employee),
    order: Router(controllers.order),
    promotion: Router(controllers.promotion),
    role: Router(controllers.role),
    employeePos: Router(controllers.employeePos),
    basket: Router(controllers.basket),
    basketBook: Router(controllers.basketBook),
    auth: AuthRouter
}