import { readFileSync, writeFileSync } from "fs"
import path, { resolve } from "path"
import { fileURLToPath } from "url"

const thisFile = fileURLToPath(import.meta.url)
const cwd = path.dirname(thisFile)
const generatedFile = resolve(cwd, "./graphql.ts")

let generated = readFileSync(generatedFile, "utf-8")

generated = generated.replace(
  'import { GraphQLClient } from "graphql-request"',
  '/* eslint-disable @typescript-eslint/no-explicit-any */\nimport type { GraphQLClient } from "graphql-request"'
)
generated = generated.replace(
  'import * as Dom from "graphql-request/dist/types.dom"',
  'import type * as Dom from "graphql-request/src/types.dom"'
)

writeFileSync(generatedFile, generated, "utf-8")

console.log("graphql.ts fixed :]")
