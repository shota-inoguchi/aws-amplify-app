import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://jvgy2cnbljeopbngyjyv5zxzw4.appsync-api.ap-northeast-1.amazonaws.com/graphql",  // あなたのGraphQLエンドポイントのURLを設定してください
  cache: new InMemoryCache()
});

export default client;
