// apollo server setup to handle GraphQL API
import { ApolloServer, gql } from 'apollo-server-micro'
import { makeExecutableSchema } from 'graphql-tools'
import { MongoClient } from 'mongodb'

require('dotenv').config()

const typeDefs = gql`
type Student {
    _id: ID!
    name: String!
    email: String!
    phone: Int!
    dateOfBirth: String!
    subjects: [Subject]!
  }  
type Subject {
      _id: ID!
      name: String!
      label:String!
  }
  type Query {
    students: [Student]!
  }
`

const resolvers = {
  Query: {
    students: async (_parent, _args, _context, _info) => {
      const posts = await _context.db.collection('students').find().toArray();
      return posts
    },
  },
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

let db

const apolloServer = new ApolloServer({
  schema,
  context: async () => {
    if (!db) {
      try {
        const dbClient = new MongoClient(process.env.MONGO_DB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })

        if (!dbClient.isConnected()) await dbClient.connect()
        db = dbClient.db('ulka') // database name
      } catch (e) {
        console.log('--->error while connecting via graphql context (db)', e)
      }
    }

    return { db }
  },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
