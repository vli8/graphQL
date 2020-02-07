const { Students, Campuses, db } = require("./db/index");

const resolvers = {
  Query: {
    getStudents: async () => await Students.findAll(),
    getCampuses: async () => await Campuses.findAll()
  }
};
module.exports = { resolvers };
