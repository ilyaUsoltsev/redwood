export const schema = gql`
  type User {
    id: Int!
    email: String!
    name: String
    roles: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    posts: [Post]!
  }

  type Query {
    users: [User!]! @requireAuth
  }

  input CreateUserInput {
    email: String!
    name: String
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: String!
  }

  input UpdateUserInput {
    email: String
    name: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: String
  }
`
