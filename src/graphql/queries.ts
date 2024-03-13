/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getComment = /* GraphQL */ `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    commenter_id
    comment
    comment_time
    comment_number
    created_user_id
    updated_user_id
    reportID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCommentQueryVariables,
  APITypes.GetCommentQuery
>;
export const listComments = /* GraphQL */ `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      commenter_id
      comment
      comment_time
      comment_number
      created_user_id
      updated_user_id
      reportID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsQueryVariables,
  APITypes.ListCommentsQuery
>;
export const commentsByReportID = /* GraphQL */ `query CommentsByReportID(
  $reportID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsByReportID(
    reportID: $reportID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      commenter_id
      comment
      comment_time
      comment_number
      created_user_id
      updated_user_id
      reportID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CommentsByReportIDQueryVariables,
  APITypes.CommentsByReportIDQuery
>;
export const getReportMaster = /* GraphQL */ `query GetReportMaster($id: ID!) {
  getReportMaster(id: $id) {
    id
    type1
    type2
    template_report_title
    template_text
    submission_department_id
    status
    created_user_id
    updated_user_id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetReportMasterQueryVariables,
  APITypes.GetReportMasterQuery
>;
export const listReportMasters = /* GraphQL */ `query ListReportMasters(
  $filter: ModelReportMasterFilterInput
  $limit: Int
  $nextToken: String
) {
  listReportMasters(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      type1
      type2
      template_report_title
      template_text
      submission_department_id
      status
      created_user_id
      updated_user_id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReportMastersQueryVariables,
  APITypes.ListReportMastersQuery
>;
export const getReport = /* GraphQL */ `query GetReport($id: ID!) {
  getReport(id: $id) {
    id
    date
    type1
    type2
    report_title
    text
    submission_approver_id
    submission_department_id
    required_flag
    presenter_id
    status
    attachment
    created_user_id
    updated_user_id
    Comments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetReportQueryVariables, APITypes.GetReportQuery>;
export const listReports = /* GraphQL */ `query ListReports(
  $filter: ModelReportFilterInput
  $limit: Int
  $nextToken: String
) {
  listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      date
      type1
      type2
      report_title
      text
      submission_approver_id
      submission_department_id
      required_flag
      presenter_id
      status
      attachment
      created_user_id
      updated_user_id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReportsQueryVariables,
  APITypes.ListReportsQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    kengenId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      kengenId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
