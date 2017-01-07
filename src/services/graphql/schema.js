const typeDefinitions = `
type Taco {
  _id: String
  meat: String
  cheese: String
  salsa: String
}

type User {
  _id: String! 
  email: String!
  secretBurritos: [SecretBurrito]
}

type SecretBurrito {
  _id: String
  size: String
}

type Authorized {
  token: String 
  data: User
}

type RootQuery {
  allTacos: [Taco]
  tacos(meat: String!): [Taco]
  taco(_id: String!): Taco
  viewer: User
}

type RootMutation {
  createTaco (
    meat: String!
    cheese: String
    salsa: String
  ): Taco

  createSecretBurrito (
    size: String!
  ): SecretBurrito
  
  signUp (
    email: String!
    password: String!
  ): User

  loggin (
    email: String!
    password: String!
  ): Authorized
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`;

export default typeDefinitions;
