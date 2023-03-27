import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema:
    "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clfqxnf5p0ij301ue25b1g8hf/master",
  documents: "app/graphql/*.graphql",
  generates: {
    "app/graphql/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        pureMagicComment: true,
        skipTypename: true,
      },
    },
  },
}

export default config
