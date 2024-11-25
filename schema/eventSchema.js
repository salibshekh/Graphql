const { gql } = require('graphql-tag');

// Define the Event schema
const eventSchema = gql`
  type Event {
    id: ID
    title: String!
    description: String!
    price: String!
    date: String
    creator: User!  # User is referenced here
  }

  type Query {
    getEventDetail(id: ID!): Event
    getAllEvents: [Event]
  }

  type Mutation {
    createEvent(title: String!, description: String!, price: String!, date: String): Event
  }
`;

module.exports = eventSchema;
