import db from "../models/index.js";
const companiesModel = db.company;

export const addCompany =async(req, res)=>{
  
     const ecompany ={
        name:req.body.name ,
        category:req.body.category,
         start:req.body.start,
          end:req.body.end

     }


   const newCompany = await companiesModel.create(ecompany);
    !newCompany && res.status(400).send("somethin went wrong adding company");


    res.status(201).send(newCompany);
 

}


export const getCompany=async(req, res)=>{
          
    try{
     const companies = await companiesModel.findAll()
     !companies && res.status(400).send("Something wrong fetching ages")

     //console.log(companies);


   //  for(let i = 0; i<companies.length; i++){
      //  console.log(companies[i]);
    // }

    const {createdAt, updatedAt, ...others} = companies
   let test = [];
    companies.forEach(element => {
      console.log(element.name, element.category)

      test.push(element.name, element.category);
       
    });  


    //useing filter: filtering retail companies

    const  filterRetail = companies.filter(company=>company.category == 'Retail')

    // get 80's company 

    const filter80s = companies.filter(companies=>companies.start >= '1980' && companies.start < '1990')


    // get lated 10 years

    const lasted10ys = companies.filter(companies=>companies.start >= '1980' && companies.start < '1990')
   

    //using map get companies array

    const companiesArray = companies.map(companies=>{
        return companies.name;
    }); 

  //formin an array from company response

  const startEnd = companies.map(companies=>`${companies.name} [${companies.start}- ${companies.end}]`
); 

  //result will be   "Company One [1981- 2003]",


  //Sort company by start year

  const sortedCompanies = companies.sort((a, b)=>(a.start >b.start ?1: -1))

  //using reduce

  const reduceCompany = companies.reduce((total, company)=> total + (company.end - company.start), 0)


    res.status(200).json(reduceCompany);

    //



    }catch(error)
    {
      res.status(500).send(error.message);
    }
    
}