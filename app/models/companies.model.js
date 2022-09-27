import Sequelize  from "sequelize"



export default(sequelize, Sequelize) =>{
   const Companies = sequelize.define("companies", 
    {
   name:{
    type:Sequelize.STRING
   },

   category:{
    type:Sequelize.STRING
   },

   start:{
    type:Sequelize.STRING
   },


   end:{
    type:Sequelize.STRING
   }

   }
   
   )

   return Companies

}