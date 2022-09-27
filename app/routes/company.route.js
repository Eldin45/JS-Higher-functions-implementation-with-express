import express from "express";
import { addCompany, getCompany } from "../controllers/company.controller.js";

export default app=>{
 
    const route = express.Router();

    route.post("/", addCompany);
    route.get("/", getCompany);


    app.use("/api/company", route);

}