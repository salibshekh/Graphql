const { gql } = require('graphql-tag');

// Define the User schema
const userSchema = gql`
  type User {
    id: ID
    email: String!
    password: String
    createdEvent: [Event!]  
  }

  type Query {
    getUserDetail(id: ID!): User
    getAllUsers: [User]
  }

  type Mutation {
    createUser(email: String!, password: String!): User
  }
`;

module.exports = userSchema;
