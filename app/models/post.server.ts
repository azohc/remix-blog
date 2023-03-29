import type {
  CreatePostMutation,
  CreatePostMutationVariables,
  DeletePostBySlugMutation,
  DeletePostBySlugMutationVariables,
  GetPostBySlugQuery,
  GetPostBySlugQueryVariables,
  GetPostsQuery,
  PublishPostMutation,
  UpdatePostBySlugMutation,
  UpdatePostBySlugMutationVariables,
} from "~/graphql/generated/graphql"
import { PublishPostDocument } from "~/graphql/generated/graphql"
import { DeletePostBySlugDocument } from "~/graphql/generated/graphql"
import { UpdatePostBySlugDocument } from "~/graphql/generated/graphql"
import { CreatePostDocument } from "~/graphql/generated/graphql"
import { GetPostBySlugDocument } from "~/graphql/generated/graphql"
import { GetPostsDocument } from "~/graphql/generated/graphql"
import { gql } from "~/lib/client"

export async function getPosts() {
  return gql.request<GetPostsQuery>(GetPostsDocument, undefined, {
    "Cache-Control": "no-store",
  })
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
    throw new Error("an error ocurred while creating the post")
  }
  await publishPost(createPost.id)
}

export async function updatePost(
  vars: UpdatePostBySlugMutationVariables
) {
  const { updatePost } = await gql.request<UpdatePostBySlugMutation>(
    UpdatePostBySlugDocument,
    vars
  )
  if (!updatePost) {
    throw new Error("an error occurred while updating the post")
  }

  await publishPost(updatePost.id)

  return updatePost
}

async function publishPost(id: string) {
  const { publishPost } = await gql.request<PublishPostMutation>(
    PublishPostDocument,
    {
      id,
    }
  )
  return publishPost
}

export async function deletePost(
  vars: DeletePostBySlugMutationVariables
) {
  const { deletePost } = await gql.request<DeletePostBySlugMutation>(
    DeletePostBySlugDocument,
    vars
  )
  return deletePost
}
