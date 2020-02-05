const { Students, Campuses, db } = require("./index");

const seed = async () => {
  console.log("Populating database");
  //Students
  await Students.create({
    firstName: "Jane",
    lastName: "Doe",
    email: "okok@hotmal.com"
  });

  await Students.create({
    firstName: "Grace",
    lastName: "Hopper",
    email: "what@gmail.com"
  });

  //Campuses
  await Campuses.create({
    name: "Lincoln Center",
    address: "10 Lincoln Center Plaza",
    description: "City life, busy, lively, pretty"
  });

  await Campuses.create({
    name: "Rose Hill",
    address: "441 East Fordham Road",
    description: "Heaven among the Bronx"
  });

  console.log("database populated");
};

module.exports = {
  seed
};
