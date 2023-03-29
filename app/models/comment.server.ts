import type {
  PublishCommentMutation,
  CreateCommentMutationVariables,
  CreateCommentMutation,
  CreateCommentReplyMutationVariables,
  CreateCommentReplyMutation,
} from "~/graphql/generated/graphql"
import {
  PublishCommentDocument,
  CreateCommentDocument,
  CreateCommentReplyDocument,
} from "~/graphql/generated/graphql"
import { gql } from "~/lib/client"

async function publishComment(id: string) {
  const { publishComment } =
    await gql.request<PublishCommentMutation>(
      PublishCommentDocument,
      {
        id,
      }
    )
  return publishComment
}

export async function createComment(
  vars: CreateCommentMutationVariables
) {
  const { createComment } = await gql.request<CreateCommentMutation>(
    CreateCommentDocument,
    vars
  )
  if (!createComment) {
    throw new Error(
      `an error occurred while creating the comment with variables ${JSON.stringify(
        vars
      )}`
    )
  }

  await publishComment(createComment.id)
  return createComment
}

export async function createCommentReply(
  vars: CreateCommentReplyMutationVariables
) {
  const { createComment } =
    await gql.request<CreateCommentReplyMutation>(
      CreateCommentReplyDocument,
      vars
    )
  if (!createComment) {
    throw new Error(
      `an error occurred while creating the comment with variables ${JSON.stringify(
        vars
      )}`
    )
  }

  await publishComment(createComment.id)
  return createComment
}
