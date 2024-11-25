const { mergeSchemas } = require('@graphql-tools/schema');
const { mergeTypeDefs } = require('@graphql-tools/merge');
const { mergeResolvers } = require('@graphql-tools/merge');

const userSchema = require('../schema/userSchema');  // Your user schema
const eventSchema = require('../schema/eventSchema');  // Event schema

const userResolvers = require('../resolver/userResolver');  // Your user resolvers
const eventResolvers = require('../resolver/eventResolver');  // Event resolvers

// Combine schemas using mergeTypeDefs
const typeDefs = mergeTypeDefs([userSchema, eventSchema]);

// Combine resolvers using mergeResolvers
const resolvers = mergeResolvers([userResolvers, eventResolvers]);

// Merge schemas into an executable schema
const schema = mergeSchemas({
  typeDefs,
  resolvers,
});

module.exports = { schema, resolvers };