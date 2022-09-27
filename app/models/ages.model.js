import { Sequelize } from "sequelize";

export default (sequelize, Sequelize)=>{

    const Ages = sequelize.define("ages", {
        age:{
            type:Sequelize.INTEGER
        }
    })

return Ages

}