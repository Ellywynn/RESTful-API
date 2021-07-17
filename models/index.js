const Employee = require('./Employee');
const EmployeePosition = require('./EmployeePosition');
const Store = require('./Store');
const City = require('./City');
const Book = require('./Book');
const Author = require('./Author');
const BookType = require('./BookType');
const Language = require('./Language');
const User = require('./User');
const Role = require('./Role');
const Genre = require('./Genre');
const Promotion = require('./Promotion');
const Order = require('./Order');
const Basket = require('./Basket');
const BasketBook = require('./BasketBook');
const UserGroup = require('./UserGroup');

// Store - City
City.hasMany(Store);
Store.belongsTo(City);

// Employee - Store
Store.hasMany(Employee);
Employee.belongsTo(Store);

// Employee - Employee positions
EmployeePosition.hasMany(Employee);
Employee.belongsTo(EmployeePosition);

// Book - Book type
BookType.hasMany(Book);
Book.belongsTo(BookType);

// Book - Author
Author.hasMany(Book);
Book.belongsTo(Author);

// Book - Language
Language.hasMany(Book);
Book.belongsTo(Language);

// Book - Genre
Genre.hasMany(Book);
Book.belongsTo(Genre);

// Store - Book (One-To-Many)
Store.hasMany(Book);
Book.belongsToMany(Store, {through: 'books_store'});

// Book - Promotions
Book.hasOne(Promotion);
Promotion.belongsToMany(Book, {through: 'book_promotions'});

// User - Role
Role.hasMany(User);
User.belongsTo(Role, {
    foreignKey: {
        allowNull: false,
        defaultValue: 1
    }
});

// User - User group
UserGroup.hasMany(User);
User.belongsTo(UserGroup, {
    foreignKey: {
        allowNull: false,
        defaultValue: 1
    }
});

// User - Order
User.hasMany(Order);
Order.belongsTo(User);

// User - Basket
User.hasOne(Basket);
Basket.belongsTo(User);

// Basket - Basket Book
Basket.hasMany(BasketBook);
BasketBook.belongsTo(Basket);

module.exports = {
    Author, Basket, BasketBook, Book, BookType, City, Employee, EmployeePosition,
    Genre, Language, Order, Promotion, Role, Store, User, UserGroup
};