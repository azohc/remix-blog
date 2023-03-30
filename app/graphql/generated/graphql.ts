/* eslint-disable @typescript-eslint/no-explicit-any */
import type { GraphQLClient } from "graphql-request"
import type * as Dom from "graphql-request/src/types.dom"
import gql from "graphql-tag"
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  DateTime: any
  Hex: any
  Json: any
  Long: any
  RGBAHue: any
  RGBATransparency: any
  RichTextAST: any
}

export type Aggregate = {
  count: Scalars["Int"]
}

/** Asset system model */
export type Asset = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"]
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Asset>
  /** The file name */
  fileName: Scalars["String"]
  /** The file handle */
  handle: Scalars["String"]
  /** The height of the file */
  height?: Maybe<Scalars["Float"]>
  /** List of Asset versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars["ID"]
  /** System Locale field */
  locale: Locale
  /** Get the other localizations for this document */
  localizations: Array<Asset>
  /** The mime type of the file */
  mimeType?: Maybe<Scalars["String"]>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** The file size */
  size?: Maybe<Scalars["Float"]>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"]
  /** User that last updated this document */
  updatedBy?: Maybe<User>
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars["String"]
  /** The file width */
  width?: Maybe<Scalars["Float"]>
}

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]>
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]
  inheritLocale?: Scalars["Boolean"]
  stages?: Array<Stage>
}

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars["Int"]
  skip?: Scalars["Int"]
  stageOverride?: InputMaybe<Stage>
}

/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"]
  locales?: Array<Locale>
}

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]>
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>
  before?: InputMaybe<Scalars["String"]>
  first?: InputMaybe<Scalars["Int"]>
  forceParentLocale?: InputMaybe<Scalars["Boolean"]>
  last?: InputMaybe<Scalars["Int"]>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars["Int"]>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]>
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>
}

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: AssetWhereUniqueInput
}

/** A connection to a list of items. */
export type AssetConnection = {
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<AssetEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>
  fileName: Scalars["String"]
  handle: Scalars["String"]
  height?: InputMaybe<Scalars["Float"]>
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>
  mimeType?: InputMaybe<Scalars["String"]>
  size?: InputMaybe<Scalars["Float"]>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  width?: InputMaybe<Scalars["Float"]>
}

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>
  fileName: Scalars["String"]
  handle: Scalars["String"]
  height?: InputMaybe<Scalars["Float"]>
  mimeType?: InputMaybe<Scalars["String"]>
  size?: InputMaybe<Scalars["Float"]>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  width?: InputMaybe<Scalars["Float"]>
}

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput
  locale: Locale
}

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>
}

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>
}

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>
}

/** An edge in a connection. */
export type AssetEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node: Asset
}

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<AssetWhereStageInput>
  documentInStages_none?: InputMaybe<AssetWhereStageInput>
  documentInStages_some?: InputMaybe<AssetWhereStageInput>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum AssetOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HandleAsc = "handle_ASC",
  HandleDesc = "handle_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  MimeTypeAsc = "mimeType_ASC",
  MimeTypeDesc = "mimeType_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>
  image?: InputMaybe<ImageTransformationInput>
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars["Boolean"]>
}

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars["String"]>
  handle?: InputMaybe<Scalars["String"]>
  height?: InputMaybe<Scalars["Float"]>
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>
  mimeType?: InputMaybe<Scalars["String"]>
  size?: InputMaybe<Scalars["Float"]>
  width?: InputMaybe<Scalars["Float"]>
}

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars["String"]>
  handle?: InputMaybe<Scalars["String"]>
  height?: InputMaybe<Scalars["Float"]>
  mimeType?: InputMaybe<Scalars["String"]>
  size?: InputMaybe<Scalars["Float"]>
  width?: InputMaybe<Scalars["Float"]>
}

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput
  locale: Locale
}

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>
}

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>
}

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars["String"]>
  height?: InputMaybe<Scalars["Float"]>
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>
  mimeType?: InputMaybe<Scalars["String"]>
  size?: InputMaybe<Scalars["Float"]>
  width?: InputMaybe<Scalars["Float"]>
}

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars["String"]>
  height?: InputMaybe<Scalars["Float"]>
  mimeType?: InputMaybe<Scalars["String"]>
  size?: InputMaybe<Scalars["Float"]>
  width?: InputMaybe<Scalars["Float"]>
}

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput
  locale: Locale
}

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>
}

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput
  /** Document search */
  where: AssetWhereInput
}

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars["Boolean"]>
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars["Boolean"]>
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>
}

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput
  /** Update document if it exists */
  update: AssetUpdateInput
}

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput
  locale: Locale
  update: AssetUpdateLocalizationDataInput
}

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>
}

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<AssetWhereStageInput>
  documentInStages_none?: InputMaybe<AssetWhereStageInput>
  documentInStages_some?: InputMaybe<AssetWhereStageInput>
  fileName?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars["String"]>
  handle?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars["String"]>
  height?: InputMaybe<Scalars["Float"]>
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars["Float"]>
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars["Float"]>
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars["Float"]>
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars["Float"]>
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars["Float"]>
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  mimeType?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars["String"]>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  size?: InputMaybe<Scalars["Float"]>
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars["Float"]>
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars["Float"]>
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars["Float"]>
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars["Float"]>
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars["Float"]>
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  updatedBy?: InputMaybe<UserWhereInput>
  width?: InputMaybe<Scalars["Float"]>
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars["Float"]>
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars["Float"]>
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars["Float"]>
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars["Float"]>
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars["Float"]>
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>
}

export type BatchPayload = {
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars["Long"]
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  css: Scalars["String"]
  hex: Scalars["Hex"]
  rgba: Rgba
}

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars["Hex"]>
  rgba?: InputMaybe<RgbaInput>
}

export type Comment = Node & {
  author?: Maybe<Scalars["String"]>
  content: Scalars["String"]
  /** The time the document was created */
  createdAt: Scalars["DateTime"]
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Comment>
  /** List of Comment versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars["ID"]
  /** Parent comment */
  parent?: Maybe<Comment>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"]
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type CommentCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]>
  locales?: InputMaybe<Array<Locale>>
}

export type CommentDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]
  inheritLocale?: Scalars["Boolean"]
  stages?: Array<Stage>
}

export type CommentHistoryArgs = {
  limit?: Scalars["Int"]
  skip?: Scalars["Int"]
  stageOverride?: InputMaybe<Stage>
}

export type CommentParentArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]>
  locales?: InputMaybe<Array<Locale>>
}

export type CommentPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]>
  locales?: InputMaybe<Array<Locale>>
}

export type CommentScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>
  before?: InputMaybe<Scalars["String"]>
  first?: InputMaybe<Scalars["Int"]>
  forceParentLocale?: InputMaybe<Scalars["Boolean"]>
  last?: InputMaybe<Scalars["Int"]>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars["Int"]>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type CommentUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]>
  locales?: InputMaybe<Array<Locale>>
}

export type CommentConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: CommentWhereUniqueInput
}

/** A connection to a list of items. */
export type CommentConnection = {
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<CommentEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type CommentCreateInput = {
  author?: InputMaybe<Scalars["String"]>
  clfte6hew2lvq01uo3geddoic?: InputMaybe<PostCreateManyInlineInput>
  clftwc3vd37y701unglntb45o?: InputMaybe<CommentCreateManyInlineInput>
  content: Scalars["String"]
  createdAt?: InputMaybe<Scalars["DateTime"]>
  parent?: InputMaybe<CommentCreateOneInlineInput>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
}

export type CommentCreateManyInlineInput = {
  /** Connect multiple existing Comment documents */
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>
  /** Create and connect multiple existing Comment documents */
  create?: InputMaybe<Array<CommentCreateInput>>
}

export type CommentCreateOneInlineInput = {
  /** Connect one existing Comment document */
  connect?: InputMaybe<CommentWhereUniqueInput>
  /** Create and connect one Comment document */
  create?: InputMaybe<CommentCreateInput>
}

/** An edge in a connection. */
export type CommentEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node: Comment
}

/** Identifies documents */
export type CommentManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CommentWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CommentWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CommentWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  author?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  author_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  author_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  author_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Any other value that exists and is not equal to the given value. */
  author_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  author_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  author_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  author_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  author_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  author_starts_with?: InputMaybe<Scalars["String"]>
  content?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Any other value that exists and is not equal to the given value. */
  content_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<CommentWhereStageInput>
  documentInStages_none?: InputMaybe<CommentWhereStageInput>
  documentInStages_some?: InputMaybe<CommentWhereStageInput>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  parent?: InputMaybe<CommentWhereInput>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum CommentOrderByInput {
  AuthorAsc = "author_ASC",
  AuthorDesc = "author_DESC",
  ContentAsc = "content_ASC",
  ContentDesc = "content_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type CommentUpdateInput = {
  author?: InputMaybe<Scalars["String"]>
  clfte6hew2lvq01uo3geddoic?: InputMaybe<PostUpdateManyInlineInput>
  clftwc3vd37y701unglntb45o?: InputMaybe<CommentUpdateManyInlineInput>
  content?: InputMaybe<Scalars["String"]>
  parent?: InputMaybe<CommentUpdateOneInlineInput>
}

export type CommentUpdateManyInlineInput = {
  /** Connect multiple existing Comment documents */
  connect?: InputMaybe<Array<CommentConnectInput>>
  /** Create and connect multiple Comment documents */
  create?: InputMaybe<Array<CommentCreateInput>>
  /** Delete multiple Comment documents */
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>
  /** Disconnect multiple Comment documents */
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Comment documents */
  set?: InputMaybe<Array<CommentWhereUniqueInput>>
  /** Update multiple Comment documents */
  update?: InputMaybe<Array<CommentUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Comment documents */
  upsert?: InputMaybe<Array<CommentUpsertWithNestedWhereUniqueInput>>
}

export type CommentUpdateManyInput = {
  author?: InputMaybe<Scalars["String"]>
  content?: InputMaybe<Scalars["String"]>
}

export type CommentUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CommentUpdateManyInput
  /** Document search */
  where: CommentWhereInput
}

export type CommentUpdateOneInlineInput = {
  /** Connect existing Comment document */
  connect?: InputMaybe<CommentWhereUniqueInput>
  /** Create and connect one Comment document */
  create?: InputMaybe<CommentCreateInput>
  /** Delete currently connected Comment document */
  delete?: InputMaybe<Scalars["Boolean"]>
  /** Disconnect currently connected Comment document */
  disconnect?: InputMaybe<Scalars["Boolean"]>
  /** Update single Comment document */
  update?: InputMaybe<CommentUpdateWithNestedWhereUniqueInput>
  /** Upsert single Comment document */
  upsert?: InputMaybe<CommentUpsertWithNestedWhereUniqueInput>
}

export type CommentUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CommentUpdateInput
  /** Unique document search */
  where: CommentWhereUniqueInput
}

export type CommentUpsertInput = {
  /** Create document if it didn't exist */
  create: CommentCreateInput
  /** Update document if it exists */
  update: CommentUpdateInput
}

export type CommentUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CommentUpsertInput
  /** Unique document search */
  where: CommentWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type CommentWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>
}

/** Identifies documents */
export type CommentWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CommentWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CommentWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CommentWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  author?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  author_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  author_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  author_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Any other value that exists and is not equal to the given value. */
  author_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  author_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  author_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  author_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  author_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  author_starts_with?: InputMaybe<Scalars["String"]>
  content?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Any other value that exists and is not equal to the given value. */
  content_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<CommentWhereStageInput>
  documentInStages_none?: InputMaybe<CommentWhereStageInput>
  documentInStages_some?: InputMaybe<CommentWhereStageInput>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  parent?: InputMaybe<CommentWhereInput>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CommentWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CommentWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CommentWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CommentWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CommentWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Comment record uniquely */
export type CommentWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>
}

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars["ID"]>
  /** Connect document before specified document */
  before?: InputMaybe<Scalars["ID"]>
  /** Connect document at last position */
  end?: InputMaybe<Scalars["Boolean"]>
  /** Connect document at first position */
  start?: InputMaybe<Scalars["Boolean"]>
}

export enum DocumentFileTypes {
  Doc = "doc",
  Docx = "docx",
  Html = "html",
  Jpg = "jpg",
  Odp = "odp",
  Ods = "ods",
  Odt = "odt",
  Pdf = "pdf",
  Png = "png",
  Ppt = "ppt",
  Pptx = "pptx",
  Svg = "svg",
  Txt = "txt",
  Webp = "webp",
  Xls = "xls",
  Xlsx = "xlsx",
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>
}

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>
}

export type DocumentVersion = {
  createdAt: Scalars["DateTime"]
  data?: Maybe<Scalars["Json"]>
  id: Scalars["ID"]
  revision: Scalars["Int"]
  stage: Stage
}

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = "clip",
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = "crop",
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = "max",
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = "scale",
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars["Int"]>
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars["Int"]>
}

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>
}

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = "en",
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  distance: Scalars["Float"]
  latitude: Scalars["Float"]
  longitude: Scalars["Float"]
}

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput
}

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars["Float"]
  longitude: Scalars["Float"]
}

export type Mutation = {
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>
  /** Create one comment */
  createComment?: Maybe<Comment>
  /** Create one post */
  createPost?: Maybe<Post>
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>
  /** Delete one comment from _all_ existing stages. Returns deleted document. */
  deleteComment?: Maybe<Comment>
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection
  /**
   * Delete many Comment documents
   * @deprecated Please use the new paginated many mutation (deleteManyCommentsConnection)
   */
  deleteManyComments: BatchPayload
  /** Delete many Comment documents, return deleted documents */
  deleteManyCommentsConnection: CommentConnection
  /**
   * Delete many Post documents
   * @deprecated Please use the new paginated many mutation (deleteManyPostsConnection)
   */
  deleteManyPosts: BatchPayload
  /** Delete many Post documents, return deleted documents */
  deleteManyPostsConnection: PostConnection
  /** Delete one post from _all_ existing stages. Returns deleted document. */
  deletePost?: Maybe<Post>
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>
  /** Publish one asset */
  publishAsset?: Maybe<Asset>
  /** Publish one comment */
  publishComment?: Maybe<Comment>
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection
  /**
   * Publish many Comment documents
   * @deprecated Please use the new paginated many mutation (publishManyCommentsConnection)
   */
  publishManyComments: BatchPayload
  /** Publish many Comment documents */
  publishManyCommentsConnection: CommentConnection
  /**
   * Publish many Post documents
   * @deprecated Please use the new paginated many mutation (publishManyPostsConnection)
   */
  publishManyPosts: BatchPayload
  /** Publish many Post documents */
  publishManyPostsConnection: PostConnection
  /** Publish one post */
  publishPost?: Maybe<Post>
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>
  /** Schedule to publish one comment */
  schedulePublishComment?: Maybe<Comment>
  /** Schedule to publish one post */
  schedulePublishPost?: Maybe<Post>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>
  /** Unpublish one comment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishComment?: Maybe<Comment>
  /** Unpublish one post from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPost?: Maybe<Post>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>
  /** Unpublish one comment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishComment?: Maybe<Comment>
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection
  /**
   * Unpublish many Comment documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCommentsConnection)
   */
  unpublishManyComments: BatchPayload
  /** Find many Comment documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCommentsConnection: CommentConnection
  /**
   * Unpublish many Post documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPostsConnection)
   */
  unpublishManyPosts: BatchPayload
  /** Find many Post documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPostsConnection: PostConnection
  /** Unpublish one post from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPost?: Maybe<Post>
  /** Update one asset */
  updateAsset?: Maybe<Asset>
  /** Update one comment */
  updateComment?: Maybe<Comment>
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection
  /**
   * Update many comments
   * @deprecated Please use the new paginated many mutation (updateManyCommentsConnection)
   */
  updateManyComments: BatchPayload
  /** Update many Comment documents */
  updateManyCommentsConnection: CommentConnection
  /**
   * Update many posts
   * @deprecated Please use the new paginated many mutation (updateManyPostsConnection)
   */
  updateManyPosts: BatchPayload
  /** Update many Post documents */
  updateManyPostsConnection: PostConnection
  /** Update one post */
  updatePost?: Maybe<Post>
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>
  /** Upsert one comment */
  upsertComment?: Maybe<Comment>
  /** Upsert one post */
  upsertPost?: Maybe<Post>
}

export type MutationCreateAssetArgs = {
  data: AssetCreateInput
}

export type MutationCreateCommentArgs = {
  data: CommentCreateInput
}

export type MutationCreatePostArgs = {
  data: PostCreateInput
}

export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput
}

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput
}

export type MutationDeleteCommentArgs = {
  where: CommentWhereUniqueInput
}

export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>
  before?: InputMaybe<Scalars["ID"]>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  skip?: InputMaybe<Scalars["Int"]>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationDeleteManyCommentsArgs = {
  where?: InputMaybe<CommentManyWhereInput>
}

export type MutationDeleteManyCommentsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>
  before?: InputMaybe<Scalars["ID"]>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  skip?: InputMaybe<Scalars["Int"]>
  where?: InputMaybe<CommentManyWhereInput>
}

export type MutationDeleteManyPostsArgs = {
  where?: InputMaybe<PostManyWhereInput>
}

export type MutationDeleteManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>
  before?: InputMaybe<Scalars["ID"]>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  skip?: InputMaybe<Scalars["Int"]>
  where?: InputMaybe<PostManyWhereInput>
}

export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput
}

export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput
}

export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput
}

export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars["Boolean"]>
  to?: Array<Stage>
  where: AssetWhereUniqueInput
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>
}

export type MutationPublishCommentArgs = {
  to?: Array<Stage>
  where: CommentWhereUniqueInput
}

export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars["Boolean"]>
  to?: Array<Stage>
  where?: InputMaybe<AssetManyWhereInput>
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>
}

export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>
  before?: InputMaybe<Scalars["ID"]>
  first?: InputMaybe<Scalars["Int"]>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars["Int"]>
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars["Boolean"]>
  skip?: InputMaybe<Scalars["Int"]>
  to?: Array<Stage>
  where?: InputMaybe<AssetManyWhereInput>
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>
}

export type MutationPublishManyCommentsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<CommentManyWhereInput>
}

export type MutationPublishManyCommentsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>
  before?: InputMaybe<Scalars["ID"]>
  first?: InputMaybe<Scalars["Int"]>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars["Int"]>
  skip?: InputMaybe<Scalars["Int"]>
  to?: Array<Stage>
  where?: InputMaybe<CommentManyWhereInput>
}

export type MutationPublishManyPostsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<PostManyWhereInput>
}

export type MutationPublishManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>
  before?: InputMaybe<Scalars["ID"]>
  first?: InputMaybe<Scalars["Int"]>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars["Int"]>
  skip?: InputMaybe<Scalars["Int"]>
  to?: Array<Stage>
  where?: InputMaybe<PostManyWhereInput>
}

export type MutationPublishPostArgs = {
  to?: Array<Stage>
  where: PostWhereUniqueInput
}

export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars["Boolean"]>
  releaseAt?: InputMaybe<Scalars["DateTime"]>
  releaseId?: InputMaybe<Scalars["String"]>
  to?: Array<Stage>
  where: AssetWhereUniqueInput
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>
}

export type MutationSchedulePublishCommentArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]>
  releaseId?: InputMaybe<Scalars["String"]>
  to?: Array<Stage>
  where: CommentWhereUniqueInput
}

export type MutationSchedulePublishPostArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]>
  releaseId?: InputMaybe<Scalars["String"]>
  to?: Array<Stage>
  where: PostWhereUniqueInput
}

export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  releaseAt?: InputMaybe<Scalars["DateTime"]>
  releaseId?: InputMaybe<Scalars["String"]>
  unpublishBase?: InputMaybe<Scalars["Boolean"]>
  where: AssetWhereUniqueInput
}

export type MutationScheduleUnpublishCommentArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars["DateTime"]>
  releaseId?: InputMaybe<Scalars["String"]>
  where: CommentWhereUniqueInput
}

export type MutationScheduleUnpublishPostArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars["DateTime"]>
  releaseId?: InputMaybe<Scalars["String"]>
  where: PostWhereUniqueInput
}

export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  unpublishBase?: InputMaybe<Scalars["Boolean"]>
  where: AssetWhereUniqueInput
}

export type MutationUnpublishCommentArgs = {
  from?: Array<Stage>
  where: CommentWhereUniqueInput
}

export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  unpublishBase?: InputMaybe<Scalars["Boolean"]>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>
  before?: InputMaybe<Scalars["ID"]>
  first?: InputMaybe<Scalars["Int"]>
  from?: Array<Stage>
  last?: InputMaybe<Scalars["Int"]>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars["Int"]>
  stage?: InputMaybe<Stage>
  unpublishBase?: InputMaybe<Scalars["Boolean"]>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUnpublishManyCommentsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<CommentManyWhereInput>
}

export type MutationUnpublishManyCommentsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>
  before?: InputMaybe<Scalars["ID"]>
  first?: InputMaybe<Scalars["Int"]>
  from?: Array<Stage>
  last?: InputMaybe<Scalars["Int"]>
  skip?: InputMaybe<Scalars["Int"]>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<CommentManyWhereInput>
}

export type MutationUnpublishManyPostsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<PostManyWhereInput>
}

export type MutationUnpublishManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>
  before?: InputMaybe<Scalars["ID"]>
  first?: InputMaybe<Scalars["Int"]>
  from?: Array<Stage>
  last?: InputMaybe<Scalars["Int"]>
  skip?: InputMaybe<Scalars["Int"]>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<PostManyWhereInput>
}

export type MutationUnpublishPostArgs = {
  from?: Array<Stage>
  where: PostWhereUniqueInput
}

export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput
  where: AssetWhereUniqueInput
}

export type MutationUpdateCommentArgs = {
  data: CommentUpdateInput
  where: CommentWhereUniqueInput
}

export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>
  before?: InputMaybe<Scalars["ID"]>
  data: AssetUpdateManyInput
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  skip?: InputMaybe<Scalars["Int"]>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUpdateManyCommentsArgs = {
  data: CommentUpdateManyInput
  where?: InputMaybe<CommentManyWhereInput>
}

export type MutationUpdateManyCommentsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>
  before?: InputMaybe<Scalars["ID"]>
  data: CommentUpdateManyInput
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  skip?: InputMaybe<Scalars["Int"]>
  where?: InputMaybe<CommentManyWhereInput>
}

export type MutationUpdateManyPostsArgs = {
  data: PostUpdateManyInput
  where?: InputMaybe<PostManyWhereInput>
}

export type MutationUpdateManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>
  before?: InputMaybe<Scalars["ID"]>
  data: PostUpdateManyInput
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  skip?: InputMaybe<Scalars["Int"]>
  where?: InputMaybe<PostManyWhereInput>
}

export type MutationUpdatePostArgs = {
  data: PostUpdateInput
  where: PostWhereUniqueInput
}

export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput
  where: ScheduledReleaseWhereUniqueInput
}

export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput
  where: AssetWhereUniqueInput
}

export type MutationUpsertCommentArgs = {
  upsert: CommentUpsertInput
  where: CommentWhereUniqueInput
}

export type MutationUpsertPostArgs = {
  upsert: PostUpsertInput
  where: PostWhereUniqueInput
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars["ID"]
  /** The Stage of an object */
  stage: Stage
}

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"]
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"]
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars["Int"]>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]>
}

export type Post = Node & {
  comments: Array<Comment>
  content: Scalars["String"]
  /** The time the document was created */
  createdAt: Scalars["DateTime"]
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Post>
  /** List of Post versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars["ID"]
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  slug: Scalars["String"]
  /** System stage field */
  stage: Stage
  tags: Array<Scalars["String"]>
  title: Scalars["String"]
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"]
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type PostCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>
  before?: InputMaybe<Scalars["String"]>
  first?: InputMaybe<Scalars["Int"]>
  forceParentLocale?: InputMaybe<Scalars["Boolean"]>
  last?: InputMaybe<Scalars["Int"]>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<CommentOrderByInput>
  skip?: InputMaybe<Scalars["Int"]>
  where?: InputMaybe<CommentWhereInput>
}

export type PostCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]>
  locales?: InputMaybe<Array<Locale>>
}

export type PostDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]
  inheritLocale?: Scalars["Boolean"]
  stages?: Array<Stage>
}

export type PostHistoryArgs = {
  limit?: Scalars["Int"]
  skip?: Scalars["Int"]
  stageOverride?: InputMaybe<Stage>
}

export type PostPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]>
  locales?: InputMaybe<Array<Locale>>
}

export type PostScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>
  before?: InputMaybe<Scalars["String"]>
  first?: InputMaybe<Scalars["Int"]>
  forceParentLocale?: InputMaybe<Scalars["Boolean"]>
  last?: InputMaybe<Scalars["Int"]>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars["Int"]>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type PostUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]>
  locales?: InputMaybe<Array<Locale>>
}

export type PostConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: PostWhereUniqueInput
}

/** A connection to a list of items. */
export type PostConnection = {
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<PostEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type PostCreateInput = {
  comments?: InputMaybe<CommentCreateManyInlineInput>
  content: Scalars["String"]
  createdAt?: InputMaybe<Scalars["DateTime"]>
  slug: Scalars["String"]
  tags?: InputMaybe<Array<Scalars["String"]>>
  title: Scalars["String"]
  updatedAt?: InputMaybe<Scalars["DateTime"]>
}

export type PostCreateManyInlineInput = {
  /** Connect multiple existing Post documents */
  connect?: InputMaybe<Array<PostWhereUniqueInput>>
  /** Create and connect multiple existing Post documents */
  create?: InputMaybe<Array<PostCreateInput>>
}

export type PostCreateOneInlineInput = {
  /** Connect one existing Post document */
  connect?: InputMaybe<PostWhereUniqueInput>
  /** Create and connect one Post document */
  create?: InputMaybe<PostCreateInput>
}

/** An edge in a connection. */
export type PostEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node: Post
}

/** Identifies documents */
export type PostManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PostWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PostWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PostWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  comments_every?: InputMaybe<CommentWhereInput>
  comments_none?: InputMaybe<CommentWhereInput>
  comments_some?: InputMaybe<CommentWhereInput>
  content?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Any other value that exists and is not equal to the given value. */
  content_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<PostWhereStageInput>
  documentInStages_none?: InputMaybe<PostWhereStageInput>
  documentInStages_some?: InputMaybe<PostWhereStageInput>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  slug?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars["String"]>
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  tags?: InputMaybe<Array<Scalars["String"]>>
  /** Matches if the field array contains *all* items provided to the filter */
  tags_contains_all?: InputMaybe<Array<Scalars["String"]>>
  /** Matches if the field array does not contain any of the items provided to the filter */
  tags_contains_none?: InputMaybe<Array<Scalars["String"]>>
  /** Matches if the field array contains at least one item provided to the filter */
  tags_contains_some?: InputMaybe<Array<Scalars["String"]>>
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  tags_not?: InputMaybe<Array<Scalars["String"]>>
  title?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum PostOrderByInput {
  ContentAsc = "content_ASC",
  ContentDesc = "content_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  TagsAsc = "tags_ASC",
  TagsDesc = "tags_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type PostUpdateInput = {
  comments?: InputMaybe<CommentUpdateManyInlineInput>
  content?: InputMaybe<Scalars["String"]>
  slug?: InputMaybe<Scalars["String"]>
  tags?: InputMaybe<Array<Scalars["String"]>>
  title?: InputMaybe<Scalars["String"]>
}

export type PostUpdateManyInlineInput = {
  /** Connect multiple existing Post documents */
  connect?: InputMaybe<Array<PostConnectInput>>
  /** Create and connect multiple Post documents */
  create?: InputMaybe<Array<PostCreateInput>>
  /** Delete multiple Post documents */
  delete?: InputMaybe<Array<PostWhereUniqueInput>>
  /** Disconnect multiple Post documents */
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Post documents */
  set?: InputMaybe<Array<PostWhereUniqueInput>>
  /** Update multiple Post documents */
  update?: InputMaybe<Array<PostUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Post documents */
  upsert?: InputMaybe<Array<PostUpsertWithNestedWhereUniqueInput>>
}

export type PostUpdateManyInput = {
  content?: InputMaybe<Scalars["String"]>
  tags?: InputMaybe<Array<Scalars["String"]>>
  title?: InputMaybe<Scalars["String"]>
}

export type PostUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PostUpdateManyInput
  /** Document search */
  where: PostWhereInput
}

export type PostUpdateOneInlineInput = {
  /** Connect existing Post document */
  connect?: InputMaybe<PostWhereUniqueInput>
  /** Create and connect one Post document */
  create?: InputMaybe<PostCreateInput>
  /** Delete currently connected Post document */
  delete?: InputMaybe<Scalars["Boolean"]>
  /** Disconnect currently connected Post document */
  disconnect?: InputMaybe<Scalars["Boolean"]>
  /** Update single Post document */
  update?: InputMaybe<PostUpdateWithNestedWhereUniqueInput>
  /** Upsert single Post document */
  upsert?: InputMaybe<PostUpsertWithNestedWhereUniqueInput>
}

export type PostUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PostUpdateInput
  /** Unique document search */
  where: PostWhereUniqueInput
}

export type PostUpsertInput = {
  /** Create document if it didn't exist */
  create: PostCreateInput
  /** Update document if it exists */
  update: PostUpdateInput
}

export type PostUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PostUpsertInput
  /** Unique document search */
  where: PostWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type PostWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>
}

/** Identifies documents */
export type PostWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PostWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PostWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PostWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  comments_every?: InputMaybe<CommentWhereInput>
  comments_none?: InputMaybe<CommentWhereInput>
  comments_some?: InputMaybe<CommentWhereInput>
  content?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Any other value that exists and is not equal to the given value. */
  content_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<PostWhereStageInput>
  documentInStages_none?: InputMaybe<PostWhereStageInput>
  documentInStages_some?: InputMaybe<PostWhereStageInput>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  slug?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars["String"]>
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  tags?: InputMaybe<Array<Scalars["String"]>>
  /** Matches if the field array contains *all* items provided to the filter */
  tags_contains_all?: InputMaybe<Array<Scalars["String"]>>
  /** Matches if the field array does not contain any of the items provided to the filter */
  tags_contains_none?: InputMaybe<Array<Scalars["String"]>>
  /** Matches if the field array contains at least one item provided to the filter */
  tags_contains_some?: InputMaybe<Array<Scalars["String"]>>
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  tags_not?: InputMaybe<Array<Scalars["String"]>>
  title?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PostWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PostWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PostWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PostWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PostWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Post record uniquely */
export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>
  slug?: InputMaybe<Scalars["String"]>
}

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale
  /** Stages to publish selected locales to */
  stages: Array<Stage>
}

export type Query = {
  /** Retrieve a single asset */
  asset?: Maybe<Asset>
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple assets */
  assets: Array<Asset>
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection
  /** Retrieve a single comment */
  comment?: Maybe<Comment>
  /** Retrieve document version */
  commentVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple comments */
  comments: Array<Comment>
  /** Retrieve multiple comments using the Relay connection interface */
  commentsConnection: CommentConnection
  /** Fetches an object given its ID */
  node?: Maybe<Node>
  /** Retrieve a single post */
  post?: Maybe<Post>
  /** Retrieve document version */
  postVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple posts */
  posts: Array<Post>
  /** Retrieve multiple posts using the Relay connection interface */
  postsConnection: PostConnection
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection
  /** Retrieve a single user */
  user?: Maybe<User>
  /** Retrieve multiple users */
  users: Array<User>
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection
}

export type QueryAssetArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: AssetWhereUniqueInput
}

export type QueryAssetVersionArgs = {
  where: VersionWhereInput
}

export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars["String"]>
  before?: InputMaybe<Scalars["String"]>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AssetOrderByInput>
  skip?: InputMaybe<Scalars["Int"]>
  stage?: Stage
  where?: InputMaybe<AssetWhereInput>
}

export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>
  before?: InputMaybe<Scalars["String"]>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AssetOrderByInput>
  skip?: InputMaybe<Scalars["Int"]>
  stage?: Stage
  where?: InputMaybe<AssetWhereInput>
}

export type QueryCommentArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: CommentWhereUniqueInput
}

export type QueryCommentVersionArgs = {
  where: VersionWhereInput
}

export type QueryCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>
  before?: InputMaybe<Scalars["String"]>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  locales?: Array<Locale>
  orderBy?: InputMaybe<CommentOrderByInput>
  skip?: InputMaybe<Scalars["Int"]>
  stage?: Stage
  where?: InputMaybe<CommentWhereInput>
}

export type QueryCommentsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>
  before?: InputMaybe<Scalars["String"]>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  locales?: Array<Locale>
  orderBy?: InputMaybe<CommentOrderByInput>
  skip?: InputMaybe<Scalars["Int"]>
  stage?: Stage
  where?: InputMaybe<CommentWhereInput>
}

export type QueryNodeArgs = {
  id: Scalars["ID"]
  locales?: Array<Locale>
  stage?: Stage
}

export type QueryPostArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: PostWhereUniqueInput
}

export type QueryPostVersionArgs = {
  where: VersionWhereInput
}

export type QueryPostsArgs = {
  after?: InputMaybe<Scalars["String"]>
  before?: InputMaybe<Scalars["String"]>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  locales?: Array<Locale>
  orderBy?: InputMaybe<PostOrderByInput>
  skip?: InputMaybe<Scalars["Int"]>
  stage?: Stage
  where?: InputMaybe<PostWhereInput>
}

export type QueryPostsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>
  before?: InputMaybe<Scalars["String"]>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  locales?: Array<Locale>
  orderBy?: InputMaybe<PostOrderByInput>
  skip?: InputMaybe<Scalars["Int"]>
  stage?: Stage
  where?: InputMaybe<PostWhereInput>
}

export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ScheduledOperationWhereUniqueInput
}

export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars["String"]>
  before?: InputMaybe<Scalars["String"]>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars["Int"]>
  stage?: Stage
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>
  before?: InputMaybe<Scalars["String"]>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars["Int"]>
  stage?: Stage
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ScheduledReleaseWhereUniqueInput
}

export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars["String"]>
  before?: InputMaybe<Scalars["String"]>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>
  skip?: InputMaybe<Scalars["Int"]>
  stage?: Stage
  where?: InputMaybe<ScheduledReleaseWhereInput>
}

export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>
  before?: InputMaybe<Scalars["String"]>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>
  skip?: InputMaybe<Scalars["Int"]>
  stage?: Stage
  where?: InputMaybe<ScheduledReleaseWhereInput>
}

export type QueryUserArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars["String"]>
  before?: InputMaybe<Scalars["String"]>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  locales?: Array<Locale>
  orderBy?: InputMaybe<UserOrderByInput>
  skip?: InputMaybe<Scalars["Int"]>
  stage?: Stage
  where?: InputMaybe<UserWhereInput>
}

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>
  before?: InputMaybe<Scalars["String"]>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  locales?: Array<Locale>
  orderBy?: InputMaybe<UserOrderByInput>
  skip?: InputMaybe<Scalars["Int"]>
  stage?: Stage
  where?: InputMaybe<UserWhereInput>
}

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  a: Scalars["RGBATransparency"]
  b: Scalars["RGBAHue"]
  g: Scalars["RGBAHue"]
  r: Scalars["RGBAHue"]
}

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars["RGBATransparency"]
  b: Scalars["RGBAHue"]
  g: Scalars["RGBAHue"]
  r: Scalars["RGBAHue"]
}

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  /** Returns HTMl representation */
  html: Scalars["String"]
  /** Returns Markdown representation */
  markdown: Scalars["String"]
  /** Returns AST representation */
  raw: Scalars["RichTextAST"]
  /** Returns plain-text contents of RichText */
  text: Scalars["String"]
}

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  affectedDocuments: Array<ScheduledOperationAffectedDocument>
  /** The time the document was created */
  createdAt: Scalars["DateTime"]
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Operation description */
  description?: Maybe<Scalars["String"]>
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>
  /** Operation error message */
  errorMessage?: Maybe<Scalars["String"]>
  /** The unique identifier */
  id: Scalars["ID"]
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars["Json"]
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>
  /** System stage field */
  stage: Stage
  /** operation Status */
  status: ScheduledOperationStatus
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"]
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars["String"]>
  before?: InputMaybe<Scalars["String"]>
  first?: InputMaybe<Scalars["Int"]>
  forceParentLocale?: InputMaybe<Scalars["Boolean"]>
  last?: InputMaybe<Scalars["Int"]>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars["Int"]>
}

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]
  inheritLocale?: Scalars["Boolean"]
  stages?: Array<Stage>
}

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]>
  locales?: InputMaybe<Array<Locale>>
}

export type ScheduledOperationAffectedDocument =
  | Asset
  | Comment
  | Post

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput
}

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>
}

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node: ScheduledOperation
}

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>>
  >
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>
  errorMessage?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>>
  >
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars["String"]>
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars["Json"]>
  release?: InputMaybe<ScheduledReleaseWhereInput>
  status?: InputMaybe<ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<
    Array<InputMaybe<ScheduledOperationStatus>>
  >
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  ErrorMessageAsc = "errorMessage_ASC",
  ErrorMessageDesc = "errorMessage_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  StatusAsc = "status_ASC",
  StatusDesc = "status_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = "CANCELED",
  Completed = "COMPLETED",
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
  Pending = "PENDING",
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars["Boolean"]>
}

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>>
  >
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>
  errorMessage?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>>
  >
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars["String"]>
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars["Json"]>
  release?: InputMaybe<ScheduledReleaseWhereInput>
  status?: InputMaybe<ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<
    Array<InputMaybe<ScheduledOperationStatus>>
  >
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>
}

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"]
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Release description */
  description?: Maybe<Scalars["String"]>
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>
  /** Release error message */
  errorMessage?: Maybe<Scalars["String"]>
  /** The unique identifier */
  id: Scalars["ID"]
  /** Whether scheduled release should be run */
  isActive: Scalars["Boolean"]
  /** Whether scheduled release is implicit */
  isImplicit: Scalars["Boolean"]
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  /** Release date and time */
  releaseAt?: Maybe<Scalars["DateTime"]>
  /** System stage field */
  stage: Stage
  /** Release Status */
  status: ScheduledReleaseStatus
  /** Release Title */
  title?: Maybe<Scalars["String"]>
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"]
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]
  inheritLocale?: Scalars["Boolean"]
  stages?: Array<Stage>
}

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars["String"]>
  before?: InputMaybe<Scalars["String"]>
  first?: InputMaybe<Scalars["Int"]>
  forceParentLocale?: InputMaybe<Scalars["Boolean"]>
  last?: InputMaybe<Scalars["Int"]>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars["Int"]>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]>
  locales?: InputMaybe<Array<Locale>>
}

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput
}

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>
  description?: InputMaybe<Scalars["String"]>
  errorMessage?: InputMaybe<Scalars["String"]>
  isActive?: InputMaybe<Scalars["Boolean"]>
  releaseAt?: InputMaybe<Scalars["DateTime"]>
  title?: InputMaybe<Scalars["String"]>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
}

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>
}

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>
}

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node: ScheduledRelease
}

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>>
  >
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>
  errorMessage?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>>
  >
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  isActive?: InputMaybe<Scalars["Boolean"]>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>
  isImplicit?: InputMaybe<Scalars["Boolean"]>
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars["Boolean"]>
  operations_every?: InputMaybe<ScheduledOperationWhereInput>
  operations_none?: InputMaybe<ScheduledOperationWhereInput>
  operations_some?: InputMaybe<ScheduledOperationWhereInput>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  releaseAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  status?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<
    Array<InputMaybe<ScheduledReleaseStatus>>
  >
  title?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  ErrorMessageAsc = "errorMessage_ASC",
  ErrorMessageDesc = "errorMessage_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  IsActiveAsc = "isActive_ASC",
  IsActiveDesc = "isActive_DESC",
  IsImplicitAsc = "isImplicit_ASC",
  IsImplicitDesc = "isImplicit_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  ReleaseAtAsc = "releaseAt_ASC",
  ReleaseAtDesc = "releaseAt_DESC",
  StatusAsc = "status_ASC",
  StatusDesc = "status_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = "COMPLETED",
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
  Pending = "PENDING",
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars["String"]>
  errorMessage?: InputMaybe<Scalars["String"]>
  isActive?: InputMaybe<Scalars["Boolean"]>
  releaseAt?: InputMaybe<Scalars["DateTime"]>
  title?: InputMaybe<Scalars["String"]>
}

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<
    Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>
  >
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<
    Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>
  >
}

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars["String"]>
  errorMessage?: InputMaybe<Scalars["String"]>
  isActive?: InputMaybe<Scalars["Boolean"]>
  releaseAt?: InputMaybe<Scalars["DateTime"]>
  title?: InputMaybe<Scalars["String"]>
}

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput
  /** Document search */
  where: ScheduledReleaseWhereInput
}

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars["Boolean"]>
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars["Boolean"]>
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>
}

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput
}

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput
}

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput
}

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>>
  >
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>
  errorMessage?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>>
  >
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  isActive?: InputMaybe<Scalars["Boolean"]>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>
  isImplicit?: InputMaybe<Scalars["Boolean"]>
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars["Boolean"]>
  operations_every?: InputMaybe<ScheduledOperationWhereInput>
  operations_none?: InputMaybe<ScheduledOperationWhereInput>
  operations_some?: InputMaybe<ScheduledOperationWhereInput>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  releaseAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  status?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<
    Array<InputMaybe<ScheduledReleaseStatus>>
  >
  title?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>
}

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = "DRAFT",
  /** The Published stage is where you can publish your content to. */
  Published = "PUBLISHED",
}

export enum SystemDateTimeFieldVariation {
  Base = "BASE",
  Combined = "COMBINED",
  Localization = "LOCALIZATION",
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>
}

/** User system model */
export type User = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"]
  /** Get the document in other stages */
  documentInStages: Array<User>
  /** The unique identifier */
  id: Scalars["ID"]
  /** Flag to determine if user is active or not */
  isActive: Scalars["Boolean"]
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind
  /** The username */
  name: Scalars["String"]
  /** Profile Picture url */
  picture?: Maybe<Scalars["String"]>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"]
}

/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]
  inheritLocale?: Scalars["Boolean"]
  stages?: Array<Stage>
}

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: UserWhereUniqueInput
}

/** A connection to a list of items. */
export type UserConnection = {
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<UserEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>
}

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>
}

/** An edge in a connection. */
export type UserEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node: User
}

/** System User Kind */
export enum UserKind {
  AppToken = "APP_TOKEN",
  Member = "MEMBER",
  Pat = "PAT",
  Public = "PUBLIC",
  Webhook = "WEBHOOK",
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  documentInStages_every?: InputMaybe<UserWhereStageInput>
  documentInStages_none?: InputMaybe<UserWhereStageInput>
  documentInStages_some?: InputMaybe<UserWhereStageInput>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  isActive?: InputMaybe<Scalars["Boolean"]>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>
  kind?: InputMaybe<UserKind>
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  name?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>
  picture?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars["String"]>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
}

export enum UserOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  IsActiveAsc = "isActive_ASC",
  IsActiveDesc = "isActive_DESC",
  KindAsc = "kind_ASC",
  KindDesc = "kind_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PictureAsc = "picture_ASC",
  PictureDesc = "picture_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>
}

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars["Boolean"]>
}

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>
}

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  documentInStages_every?: InputMaybe<UserWhereStageInput>
  documentInStages_none?: InputMaybe<UserWhereStageInput>
  documentInStages_some?: InputMaybe<UserWhereStageInput>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  isActive?: InputMaybe<Scalars["Boolean"]>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>
  kind?: InputMaybe<UserKind>
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  name?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>
  picture?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars["String"]>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]>>
  >
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>
}

export type Version = {
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  revision: Scalars["Int"]
  stage: Stage
}

export type VersionWhereInput = {
  id: Scalars["ID"]
  revision: Scalars["Int"]
  stage: Stage
}

export enum _FilterKind {
  And = "AND",
  Not = "NOT",
  Or = "OR",
  Contains = "contains",
  ContainsAll = "contains_all",
  ContainsNone = "contains_none",
  ContainsSome = "contains_some",
  EndsWith = "ends_with",
  Eq = "eq",
  EqNot = "eq_not",
  Gt = "gt",
  Gte = "gte",
  In = "in",
  JsonPathExists = "json_path_exists",
  JsonValueRecursive = "json_value_recursive",
  Lt = "lt",
  Lte = "lte",
  NotContains = "not_contains",
  NotEndsWith = "not_ends_with",
  NotIn = "not_in",
  NotStartsWith = "not_starts_with",
  RelationalEvery = "relational_every",
  RelationalNone = "relational_none",
  RelationalSingle = "relational_single",
  RelationalSome = "relational_some",
  Search = "search",
  StartsWith = "starts_with",
  UnionEmpty = "union_empty",
  UnionEvery = "union_every",
  UnionNone = "union_none",
  UnionSingle = "union_single",
  UnionSome = "union_some",
}

export enum _MutationInputFieldKind {
  Enum = "enum",
  Relation = "relation",
  RichText = "richText",
  RichTextWithEmbeds = "richTextWithEmbeds",
  Scalar = "scalar",
  Union = "union",
  Virtual = "virtual",
}

export enum _MutationKind {
  Create = "create",
  Delete = "delete",
  DeleteMany = "deleteMany",
  Publish = "publish",
  PublishMany = "publishMany",
  SchedulePublish = "schedulePublish",
  ScheduleUnpublish = "scheduleUnpublish",
  Unpublish = "unpublish",
  UnpublishMany = "unpublishMany",
  Update = "update",
  UpdateMany = "updateMany",
  Upsert = "upsert",
}

export enum _OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export enum _RelationInputCardinality {
  Many = "many",
  One = "one",
}

export enum _RelationInputKind {
  Create = "create",
  Update = "update",
}

export enum _RelationKind {
  Regular = "regular",
  Union = "union",
}

export enum _SystemDateTimeFieldVariation {
  Base = "base",
  Combined = "combined",
  Localization = "localization",
}

export type ConnectCommentToPostMutationVariables = Exact<{
  slug: Scalars["String"]
  commentId: Scalars["ID"]
}>

export type ConnectCommentToPostMutation = {
  updatePost?: { id: string } | null
}

export type CreateCommentMutationVariables = Exact<{
  author?: InputMaybe<Scalars["String"]>
  content: Scalars["String"]
}>

export type CreateCommentMutation = {
  createComment?: { id: string } | null
}

export type CreateCommentReplyMutationVariables = Exact<{
  author?: InputMaybe<Scalars["String"]>
  content: Scalars["String"]
  parentCommentId: Scalars["ID"]
}>

export type CreateCommentReplyMutation = {
  createComment?: { id: string } | null
}

export type CreatePostMutationVariables = Exact<{
  title: Scalars["String"]
  slug: Scalars["String"]
  content: Scalars["String"]
  tags?: InputMaybe<Array<Scalars["String"]> | Scalars["String"]>
}>

export type CreatePostMutation = {
  createPost?: { id: string } | null
}

export type DeletePostBySlugMutationVariables = Exact<{
  slug: Scalars["String"]
}>

export type DeletePostBySlugMutation = {
  deletePost?: { id: string } | null
}

export type GetPostQueryVariables = Exact<{
  slug: Scalars["String"]
}>

export type GetPostQuery = {
  post?: {
    id: string
    slug: string
    title: string
    content: string
    tags: Array<string>
    createdAt: any
    updatedAt: any
  } | null
}

export type GetPostCommentsQueryVariables = Exact<{
  slug: Scalars["String"]
}>

export type GetPostCommentsQuery = {
  post?: {
    comments: Array<{
      id: string
      author?: string | null
      content: string
      createdAt: any
      parent?: { id: string } | null
    }>
  } | null
}

export type GetPostsQueryVariables = Exact<{ [key: string]: never }>

export type GetPostsQuery = {
  posts: Array<{
    id: string
    slug: string
    title: string
    content: string
    tags: Array<string>
    comments: Array<{ id: string }>
  }>
}

export type PublishCommentMutationVariables = Exact<{
  id: Scalars["ID"]
}>

export type PublishCommentMutation = {
  publishComment?: { id: string } | null
}

export type PublishPostMutationVariables = Exact<{
  id?: InputMaybe<Scalars["ID"]>
}>

export type PublishPostMutation = {
  publishPost?: { id: string; slug: string } | null
}

export type UpdatePostBySlugMutationVariables = Exact<{
  slug: Scalars["String"]
  newSlug?: InputMaybe<Scalars["String"]>
  newTitle?: InputMaybe<Scalars["String"]>
  newContent?: InputMaybe<Scalars["String"]>
  newTags?: InputMaybe<Array<Scalars["String"]> | Scalars["String"]>
}>

export type UpdatePostBySlugMutation = {
  updatePost?: {
    id: string
    slug: string
    title: string
    content: string
    tags: Array<string>
  } | null
}

export const ConnectCommentToPostDocument = /*#__PURE__*/ gql`
  mutation ConnectCommentToPost($slug: String!, $commentId: ID!) {
    updatePost(
      where: { slug: $slug }
      data: { comments: { connect: { where: { id: $commentId } } } }
    ) {
      id
    }
  }
`
export const CreateCommentDocument = /*#__PURE__*/ gql`
  mutation CreateComment($author: String, $content: String!) {
    createComment(data: { author: $author, content: $content }) {
      id
    }
  }
`
export const CreateCommentReplyDocument = /*#__PURE__*/ gql`
  mutation CreateCommentReply(
    $author: String
    $content: String!
    $parentCommentId: ID!
  ) {
    createComment(
      data: {
        author: $author
        content: $content
        parent: { connect: { id: $parentCommentId } }
      }
    ) {
      id
    }
  }
`
export const CreatePostDocument = /*#__PURE__*/ gql`
  mutation CreatePost(
    $title: String!
    $slug: String!
    $content: String!
    $tags: [String!]
  ) {
    createPost(
      data: {
        title: $title
        slug: $slug
        content: $content
        tags: $tags
      }
    ) {
      id
    }
  }
`
export const DeletePostBySlugDocument = /*#__PURE__*/ gql`
  mutation DeletePostBySlug($slug: String!) {
    deletePost(where: { slug: $slug }) {
      id
    }
  }
`
export const GetPostDocument = /*#__PURE__*/ gql`
  query GetPost($slug: String!) {
    post(where: { slug: $slug }) {
      id
      slug
      title
      content
      tags
      createdAt
      updatedAt
    }
  }
`
export const GetPostCommentsDocument = /*#__PURE__*/ gql`
  query GetPostComments($slug: String!) {
    post(where: { slug: $slug }) {
      comments {
        id
        author
        content
        createdAt
        parent {
          id
        }
      }
    }
  }
`
export const GetPostsDocument = /*#__PURE__*/ gql`
  query GetPosts {
    posts {
      id
      slug
      title
      content
      tags
      comments {
        id
      }
    }
  }
`
export const PublishCommentDocument = /*#__PURE__*/ gql`
  mutation PublishComment($id: ID!) {
    publishComment(where: { id: $id }) {
      id
    }
  }
`
export const PublishPostDocument = /*#__PURE__*/ gql`
  mutation PublishPost($id: ID) {
    publishPost(where: { id: $id }) {
      id
      slug
    }
  }
`
export const UpdatePostBySlugDocument = /*#__PURE__*/ gql`
  mutation UpdatePostBySlug(
    $slug: String!
    $newSlug: String
    $newTitle: String
    $newContent: String
    $newTags: [String!]
  ) {
    updatePost(
      where: { slug: $slug }
      data: {
        slug: $newSlug
        title: $newTitle
        content: $newContent
        tags: $newTags
      }
    ) {
      id
      slug
      title
      content
      tags
    }
  }
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action()

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    ConnectCommentToPost(
      variables: ConnectCommentToPostMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<ConnectCommentToPostMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ConnectCommentToPostMutation>(
            ConnectCommentToPostDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "ConnectCommentToPost",
        "mutation"
      )
    },
    CreateComment(
      variables: CreateCommentMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<CreateCommentMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateCommentMutation>(
            CreateCommentDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "CreateComment",
        "mutation"
      )
    },
    CreateCommentReply(
      variables: CreateCommentReplyMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<CreateCommentReplyMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateCommentReplyMutation>(
            CreateCommentReplyDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "CreateCommentReply",
        "mutation"
      )
    },
    CreatePost(
      variables: CreatePostMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<CreatePostMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreatePostMutation>(
            CreatePostDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "CreatePost",
        "mutation"
      )
    },
    DeletePostBySlug(
      variables: DeletePostBySlugMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<DeletePostBySlugMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeletePostBySlugMutation>(
            DeletePostBySlugDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "DeletePostBySlug",
        "mutation"
      )
    },
    GetPost(
      variables: GetPostQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetPostQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetPostQuery>(GetPostDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetPost",
        "query"
      )
    },
    GetPostComments(
      variables: GetPostCommentsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetPostCommentsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetPostCommentsQuery>(
            GetPostCommentsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "GetPostComments",
        "query"
      )
    },
    GetPosts(
      variables?: GetPostsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetPostsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetPostsQuery>(GetPostsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetPosts",
        "query"
      )
    },
    PublishComment(
      variables: PublishCommentMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<PublishCommentMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<PublishCommentMutation>(
            PublishCommentDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "PublishComment",
        "mutation"
      )
    },
    PublishPost(
      variables?: PublishPostMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<PublishPostMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<PublishPostMutation>(
            PublishPostDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "PublishPost",
        "mutation"
      )
    },
    UpdatePostBySlug(
      variables: UpdatePostBySlugMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<UpdatePostBySlugMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdatePostBySlugMutation>(
            UpdatePostBySlugDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "UpdatePostBySlug",
        "mutation"
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
