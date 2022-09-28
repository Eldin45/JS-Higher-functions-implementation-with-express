export default  {
  HOST:'127.0.0.1',
  USER:"root",
  DB:"enter your db name",
  PASSWORD:'',
  DIALECT:'mysql',
  pool:{
    min:0,
    max:5,
    acquire:3000,
    idle:10000

  }


}