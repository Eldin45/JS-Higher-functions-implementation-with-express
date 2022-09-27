import db from "../models/index.js"

const agesModel = db.ages;


export const  addAge=async(req, res)=>{
 
    const e_age ={
        age:req.body.age
    }

    try{
        const newAge = await agesModel.create(e_age);
        !newAge && resizeBy.status(400).send("Something went wrong adding age");

        res.status(201).send(newAge)

    }catch(error){

        res.status(500).send(error.message)

    }




}


        export const getAges=async(req, res)=>{
          
            try{
             const ages = await agesModel.findAll()
             !ages && res.status(400).send("Something wrong fetching ages")

             //using the old method for loop get 21 and older
             let agerange = [];

             for(let i = 0; i < ages.length; i++){
                 console.log(ages[i])
                 if(ages[i].age >= 21 ){
                    agerange.push(ages[i].age);
                 }
             }

             //using filter higher function

const ageRange = ages.filter(function(ages){
    if(ages.age >= 21){
        return true
    }
})  

//or

       const ageRange2 = ages.filter(age=>age.age >= 21);

             //printing from forloop
           //  console.log(agerange);
             //printing filter
//using map

  const agesSqure = ages.map(age=>Math.sqrt(age.age)).map(age=>age*2);


             console.log(agesSqure);

//sort array 

const sortedAges = ages.sort((a, b)=>(a.start >b.start ?1: -1))


//using reduce , summing with reduce

const sum = ages.reduce((total, age)=>{
    return total + age.age;
}, 0)


//combine for agwe

const combine = ages.map(age=> age*2).filter(age=> age >= 64).sort((a,b)=>a-b).reduce((a, b)=> a + b, 0)


             console.log(combine);

             res.status(200).send(sortedAges);

            }catch(error)
            {
              res.status(500).send(error.message);
            }
            
        }