   // ** Object creation **

   var company = new Object();

   company.name = "CLOUDDE";
   company.CEO = new Object();
   company.CEO.firstName = "Success"
   company.CEO.favColor = "Blue"

   console.log(company);

   console.log("Company's CEO name is: " + company.CEO.firstName);

   console.log(company["name"]);

   var stockPropName = "$stock of company"
   company[stockPropName] = 110;

   console.log("Cloudde's Stock price is: " + company[stockPropName]);