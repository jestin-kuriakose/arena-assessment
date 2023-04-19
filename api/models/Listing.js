import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../db.js";

// Define a model for the database table
const Listing = sequelize.define('listings', {
title: {
    type: DataTypes.STRING,
},
subTitle: {
    type: DataTypes.STRING,
},
price: {
    type: DataTypes.STRING,
},
onPlan: {
    type: DataTypes.BOOLEAN
},
img1: {
    type: DataTypes.STRING
},
img2: {
    type: DataTypes.STRING
},
img3: {
    type: DataTypes.STRING
},
img4: {
    type: DataTypes.STRING
},
});

export default Listing;