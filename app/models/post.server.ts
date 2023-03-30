import type {
  ConnectCommentToPostMutation,
  ConnectCommentToPostMutationVariables,
  CreatePostMutation,
  CreatePostMutationVariables,
  DeletePostBySlugMutation,
  DeletePostBySlugMutationVariables,
  GetPostCommentsQuery,
  GetPostCommentsQueryVariables,
  GetPostQuery,
  GetPostQueryVariables,
  GetPostsQuery,
  PublishPostMutation,
  UpdatePostBySlugMutation,
  UpdatePostBySlugMutationVariables,
} from "~/graphql/generated/graphql"
import { GetPostCommentsDocument } from "~/graphql/generated/graphql"
import { ConnectCommentToPostDocument } from "~/graphql/generated/graphql"
import { GetPostDocument } from "~/graphql/generated/graphql"
import { PublishPostDocument } from "~/graphql/generated/graphql"
import { DeletePostBySlugDocument } from "~/graphql/generated/graphql"
import { UpdatePostBySlugDocument } from "~/graphql/generated/graphql"
import { CreatePostDocument } from "~/graphql/generated/graphql"
import { GetPostsDocument } from "~/graphql/generated/graphql"
import { gql } from "~/lib/client"

export async function getPosts() {
  const { posts } = await gql.request<GetPostsQuery>(GetPostsDocument)
  return posts
}

export async function getPost(vars: GetPostQueryVariables) {
  const { post } = await gql.request<GetPostQuery>(
    GetPostDocument,
    vars
  )
  return post
}

export async function createPost(vars: CreatePostMutationVariables) {
  const { createPost } = await gql.request<CreatePostMutation>(
    CreatePostDocument,
    vars
  )
  if (!createPost) {
    throw new Error(
      `an error ocurred while creating the post with slug ${vars.slug}`
    )
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
    throw new Error(
      `an error occurred while updating the post with slug ${vars.slug}`
    )
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

export async function getPostComments(
  vars: GetPostCommentsQueryVariables
) {
  const { post } = await gql.request<GetPostCommentsQuery>(
    GetPostCommentsDocument,
    vars
  )
  if (!post) {
    throw new Error(
      `an error occurred when fetching the comments for the post with slug ${vars.slug}`
    )
  }
  return post.comments
}

export async function connectCommentToPost(
  vars: ConnectCommentToPostMutationVariables
) {
  const { updatePost } =
    await gql.request<ConnectCommentToPostMutation>(
      ConnectCommentToPostDocument,
      vars
    )
  if (!updatePost) {
    throw new Error(
      `an error occurred while updating the post with slug ${vars.slug}`
    )
  }
  await publishPost(updatePost.id)
  return updatePost
}
