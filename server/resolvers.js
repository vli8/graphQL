const { Students, Campuses, db } = require("./db/index");

const resolvers = {
  Query: {
    getStudents: async () => await Students.findAll(),
    getCampuses: async () => await Campuses.findAll()
  },
  Mutation: {
    addStudents: async (parent, args, context, info) => {
      console.log(args);
      return await Students.create({ firstName: args.firstName, lastName: args.lastName, email: args.email });
    }
  }
};
module.exports = { resolvers };
