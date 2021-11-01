const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Product {
    _id: ID
    productName: String
    size: String
    rrp: Float
    promo: Float
    status: String
  }

  type User {
    _id: ID
    email: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    getAll: [Product]
  }

  input ProductInput {
    productName: String
    size: String
    rrp: Float
    promo: Float
    status: String
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    updateUser(email: String, password: String): User
    login(email: String!, password: String!): Auth
    addProduct(productName: String, size: String, rrp: Float, promo: Float, status: String): Product
    createProduct(post:ProductInput): Product
    updateProduct(id:String,post:ProductInput): Product
    deleteProduct(id:String): String
  }
`;

module.exports = typeDefs;
