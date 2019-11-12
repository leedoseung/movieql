import { GraphQLServer } from 'graphql-yoga'
import resolvers from './graphql/resolvers'

const server = new GraphQLServer({
    typeDefs: "graphql/scheme.graphql", // 추가된 코드
    resolvers // 추가된 코드
})
server.start( () => console.log('Server is running on localhost:4000'));