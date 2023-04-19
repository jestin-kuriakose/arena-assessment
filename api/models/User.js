import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../db.js";

// Define a model for the database table
const User = sequelize.define('users', {
firstName: {
    type: DataTypes.STRING,
},
lastName: {
    type: DataTypes.STRING,
},
email: {
    type: DataTypes.STRING
},
password: {
    type: DataTypes.STRING
}
});

export default User;