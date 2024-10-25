/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const handler = /* GraphQL */ `query Handler(
  $from: String
  $to: String
  $head: String
  $body: String
  $company: String
  $name: String
  $groupId: String
) {
  handler(
    from: $from
    to: $to
    head: $head
    body: $body
    company: $company
    name: $name
    groupId: $groupId
  )
}
` as GeneratedQuery<APITypes.HandlerQueryVariables, APITypes.HandlerQuery>;
export const getTReport = /* GraphQL */ `query GetTReport($id: ID!) {
  getTReport(id: $id) {
    id
    date
    report_title
    text
    submission_approver_id
    submission_department_id
    presenter_id
    tReport_status
    attachment
    hidden_flag
    created_user_id
    createdAt
    updated_user_id
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTReportQueryVariables,
  APITypes.GetTReportQuery
>;
export const listTReports = /* GraphQL */ `query ListTReports(
  $filter: ModelTReportFilterInput
  $limit: Int
  $nextToken: String
) {
  listTReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      date
      report_title
      text
      submission_approver_id
      submission_department_id
      presenter_id
      tReport_status
      attachment
      hidden_flag
      created_user_id
      createdAt
      updated_user_id
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTReportsQueryVariables,
  APITypes.ListTReportsQuery
>;
export const getMailTo = /* GraphQL */ `query GetMailTo($id: ID!) {
  getMailTo(id: $id) {
    id
    company
    address
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetMailToQueryVariables, APITypes.GetMailToQuery>;
export const listMailTos = /* GraphQL */ `query ListMailTos(
  $filter: ModelMailToFilterInput
  $limit: Int
  $nextToken: String
) {
  listMailTos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      company
      address
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMailTosQueryVariables,
  APITypes.ListMailTosQuery
>;
export const getMailFrom = /* GraphQL */ `query GetMailFrom($id: ID!) {
  getMailFrom(id: $id) {
    id
    address
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMailFromQueryVariables,
  APITypes.GetMailFromQuery
>;
export const listMailFroms = /* GraphQL */ `query ListMailFroms(
  $filter: ModelMailFromFilterInput
  $limit: Int
  $nextToken: String
) {
  listMailFroms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      address
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMailFromsQueryVariables,
  APITypes.ListMailFromsQuery
>;
export const getMailResultList = /* GraphQL */ `query GetMailResultList($id: ID!) {
  getMailResultList(id: $id) {
    id
    companyNames
    from
    subject
    result
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMailResultListQueryVariables,
  APITypes.GetMailResultListQuery
>;
export const listMailResultLists = /* GraphQL */ `query ListMailResultLists(
  $filter: ModelMailResultListFilterInput
  $limit: Int
  $nextToken: String
) {
  listMailResultLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      companyNames
      from
      subject
      result
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMailResultListsQueryVariables,
  APITypes.ListMailResultListsQuery
>;
export const getMailResultDetail = /* GraphQL */ `query GetMailResultDetail($id: ID!) {
  getMailResultDetail(id: $id) {
    id
    from
    company
    to
    head
    body
    name
    result
    groupId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMailResultDetailQueryVariables,
  APITypes.GetMailResultDetailQuery
>;
export const listMailResultDetails = /* GraphQL */ `query ListMailResultDetails(
  $filter: ModelMailResultDetailFilterInput
  $limit: Int
  $nextToken: String
) {
  listMailResultDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      from
      company
      to
      head
      body
      name
      result
      groupId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMailResultDetailsQueryVariables,
  APITypes.ListMailResultDetailsQuery
>;
