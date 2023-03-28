import type {
  CreatePostMutation,
  CreatePostMutationVariables,
  GetPostBySlugQuery,
  GetPostBySlugQueryVariables,
  GetPostsQuery,
  PublishPostMutation,
} from "~/graphql/generated/graphql"
import { PublishPostDocument } from "~/graphql/generated/graphql"
import { CreatePostDocument } from "~/graphql/generated/graphql"
import { GetPostBySlugDocument } from "~/graphql/generated/graphql"
import { GetPostsDocument } from "~/graphql/generated/graphql"
import { gql } from "~/lib/client"

export async function getPosts() {
  return gql.request<GetPostsQuery>(GetPostsDocument)
}

export async function getPost(vars: GetPostBySlugQueryVariables) {
  return gql.request<GetPostBySlugQuery>(GetPostBySlugDocument, vars)
}

export async function createPost(vars: CreatePostMutationVariables) {
  const { createPost } = await gql.request<CreatePostMutation>(
    CreatePostDocument,
    vars
  )
  if (!createPost) {
    const error = "an error ocurred while creating a post"
    console.error(error)
    throw new Error(error)
  }
  return gql.request<PublishPostMutation>(PublishPostDocument, {
    id: createPost?.id,
  })
}
