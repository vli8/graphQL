const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    getStudents: [Student]
    getCampuses: [Campus]
  }
  type Mutation {
    addStudents(firstName: String, lastName: String, email: String): Student
  }
  type Student {
    firstName: String
    lastName: String
    email: String
  }
  type Campus {
    name: String
    address: String
    description: String
  }
`;

module.exports = { typeDefs };
