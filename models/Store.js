import {DataTypes} from 'sequelize';
import db from '../config/database';

const Store = db.define('store', {
    store_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

export default Store;