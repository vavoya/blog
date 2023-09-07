import { ApolloServer, gql } from 'apollo-server-micro';
import { NextApiRequest, NextApiResponse } from 'next';

const typeDefs = gql`
  type Query {
    test: String!
  }
`;

const resolvers = {
    Query: {
        test: () => {
            console.log('테스트');
            return "테스트";
        },
    },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
    api: {
        bodyParser: false,
    },
};

const startApolloServer = async (req: NextApiRequest, res: NextApiResponse) => {
    await apolloServer.start();
    await apolloServer.createHandler({
        path: '/graphql',
    })(req, res);
};

export default startApolloServer;
