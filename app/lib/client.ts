import { GraphQLClient } from "graphql-request"

export const GRAPHQL_ENDPOINT =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clfqxnf5p0ij301ue25b1g8hf/master"

export const gql = new GraphQLClient(GRAPHQL_ENDPOINT, {
  headers: {
    "Content-Type": "application/json",
    // "Cache-Control": "max-age=0, s-maxage=0",
  },
})

const token = process.env.HYGRAPH_AUTH_TOKEN

if (!token) {
  console.warn("Failed to load auth token from HYGRAPH_AUTH_TOKEN")
} else {
  console.debug("Loaded auth token from HYGRAPH_AUTH_TOKEN")
  gql.setHeader("Authorization", "Bearer " + token)
}
