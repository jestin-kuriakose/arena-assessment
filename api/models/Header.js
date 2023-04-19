import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../db.js";

// Define a model for the database table
const Header = sequelize.define('headers', {
logo: {
    type: DataTypes.STRING,
},
headerTitle1: {
    type: DataTypes.STRING,
},
headerTitle2: {
    type: DataTypes.STRING,
},
headerTitle3: {
    type: DataTypes.STRING
},
headerTitle4: {
    type: DataTypes.STRING
},
headerTitle1Link: {
    type: DataTypes.STRING,
},
headerTitle2Link: {
    type: DataTypes.STRING,
},
headerTitle3Link: {
    type: DataTypes.STRING
},
headerTitle4Link: {
    type: DataTypes.STRING
},
headerTitleBold: {
    type: DataTypes.STRING
},
headerTitleBoldLink: {
    type: DataTypes.STRING
}
});

export default Header;