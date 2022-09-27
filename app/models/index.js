import companiesModel from "./companies.model.js";
import Sequelize from "sequelize";
import dbConfig from "../config/db.config.js";




const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.DIALECT,
  
    pool:{
     min:dbConfig.min,
     max:dbConfig.max,
     acquire:dbConfig.acquire,
     idle:dbConfig.idle

    }
})


const db = [];

db.Sequelize =Sequelize;
db.sequelize = sequelize;


import company from "../models/companies.model.js"
import ages from "../models/ages.model.js"

db.company = company(sequelize, Sequelize);
db.ages = ages(sequelize, Sequelize);



export default db;