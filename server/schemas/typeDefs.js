// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type Query {
    helloWorld: String
  }
`;

// export the typeDefs
module.exports = typeDefs;

// we access our API through passages: queries and mutations 

// to define a query: we use type Query {} which is built into GraphQL