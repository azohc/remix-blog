import type {
  GetPostBySlugQuery,
  GetPostBySlugQueryVariables,
  GetPostsQuery,
} from "~/graphql/generated/graphql"
import { GetPostBySlugDocument } from "~/graphql/generated/graphql"
import { GetPostsDocument } from "~/graphql/generated/graphql"
import { gql } from "~/lib/client"

export async function getPosts() {
  return gql.request<GetPostsQuery>(GetPostsDocument)
}

export async function getPost(slug: string) {
  const vars: GetPostBySlugQueryVariables = {
    slug,
  }
  return gql.request<GetPostBySlugQuery>(GetPostBySlugDocument, vars)
}
