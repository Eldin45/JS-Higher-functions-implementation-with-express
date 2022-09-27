import express  from "express";
import sequelize from "sequelize";
import db from "./app/models/index.js"
import companyRoute from "./app/routes/company.route.js";
import ageRoute from "./app/routes/age.route.js";

const app = express();


app.use(express.json());

db.sequelize.sync()
  companyRoute(app);
   ageRoute(app);

const PORT =3000;

app.listen(PORT, ()=>{
    console.log(`server statring at ${PORT}`)
})