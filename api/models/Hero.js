import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../db.js";

// Define a model for the database table
const Hero = sequelize.define('heros', {
boldTitle: {
    type: DataTypes.STRING,
},
title: {
    type: DataTypes.STRING,
},
subTitle: {
    type: DataTypes.STRING,
},
buttonText: {
    type: DataTypes.STRING
},
buttonLink: {
    type: DataTypes.STRING
},
img1: {
    type: DataTypes.STRING,
},
img2: {
    type: DataTypes.STRING,
},
img3: {
    type: DataTypes.STRING
},
img4: {
    type: DataTypes.STRING
},
});

export default Hero;