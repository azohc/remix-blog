import { GraphQLClient } from "graphql-request"

export const GRAPHQL_ENDPOINT =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clfqxnf5p0ij301ue25b1g8hf/master"

export const gql = new GraphQLClient(GRAPHQL_ENDPOINT, {
  headers: {
    "Content-Type": "application/json",
  },
})
