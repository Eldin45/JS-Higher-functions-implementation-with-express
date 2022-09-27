import express from "express";
import { addAge, getAges } from "../controllers/ages.controller.js";

export default app=>{
    const route = express.Router();
  
   route.post("/", addAge);
   route.get("/", getAges)


   app.use("/api/age", route);

}