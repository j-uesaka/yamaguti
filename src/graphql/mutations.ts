/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTReport = /* GraphQL */ `mutation CreateTReport(
  $input: CreateTReportInput!
  $condition: ModelTReportConditionInput
) {
  createTReport(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTReportMutationVariables,
  APITypes.CreateTReportMutation
>;
export const updateTReport = /* GraphQL */ `mutation UpdateTReport(
  $input: UpdateTReportInput!
  $condition: ModelTReportConditionInput
) {
  updateTReport(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTReportMutationVariables,
  APITypes.UpdateTReportMutation
>;
export const deleteTReport = /* GraphQL */ `mutation DeleteTReport(
  $input: DeleteTReportInput!
  $condition: ModelTReportConditionInput
) {
  deleteTReport(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTReportMutationVariables,
  APITypes.DeleteTReportMutation
>;
export const createMailTo = /* GraphQL */ `mutation CreateMailTo(
  $input: CreateMailToInput!
  $condition: ModelMailToConditionInput
) {
  createMailTo(input: $input, condition: $condition) {
    id
    company
    address
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMailToMutationVariables,
  APITypes.CreateMailToMutation
>;
export const updateMailTo = /* GraphQL */ `mutation UpdateMailTo(
  $input: UpdateMailToInput!
  $condition: ModelMailToConditionInput
) {
  updateMailTo(input: $input, condition: $condition) {
    id
    company
    address
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMailToMutationVariables,
  APITypes.UpdateMailToMutation
>;
export const deleteMailTo = /* GraphQL */ `mutation DeleteMailTo(
  $input: DeleteMailToInput!
  $condition: ModelMailToConditionInput
) {
  deleteMailTo(input: $input, condition: $condition) {
    id
    company
    address
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMailToMutationVariables,
  APITypes.DeleteMailToMutation
>;
export const createMailFrom = /* GraphQL */ `mutation CreateMailFrom(
  $input: CreateMailFromInput!
  $condition: ModelMailFromConditionInput
) {
  createMailFrom(input: $input, condition: $condition) {
    id
    address
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMailFromMutationVariables,
  APITypes.CreateMailFromMutation
>;
export const updateMailFrom = /* GraphQL */ `mutation UpdateMailFrom(
  $input: UpdateMailFromInput!
  $condition: ModelMailFromConditionInput
) {
  updateMailFrom(input: $input, condition: $condition) {
    id
    address
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMailFromMutationVariables,
  APITypes.UpdateMailFromMutation
>;
export const deleteMailFrom = /* GraphQL */ `mutation DeleteMailFrom(
  $input: DeleteMailFromInput!
  $condition: ModelMailFromConditionInput
) {
  deleteMailFrom(input: $input, condition: $condition) {
    id
    address
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMailFromMutationVariables,
  APITypes.DeleteMailFromMutation
>;
export const createMailResult = /* GraphQL */ `mutation CreateMailResult(
  $input: CreateMailResultInput!
  $condition: ModelMailResultConditionInput
) {
  createMailResult(input: $input, condition: $condition) {
    id
    from
    company
    to
    head
    body
    result
    groupId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMailResultMutationVariables,
  APITypes.CreateMailResultMutation
>;
export const updateMailResult = /* GraphQL */ `mutation UpdateMailResult(
  $input: UpdateMailResultInput!
  $condition: ModelMailResultConditionInput
) {
  updateMailResult(input: $input, condition: $condition) {
    id
    from
    company
    to
    head
    body
    result
    groupId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMailResultMutationVariables,
  APITypes.UpdateMailResultMutation
>;
export const deleteMailResult = /* GraphQL */ `mutation DeleteMailResult(
  $input: DeleteMailResultInput!
  $condition: ModelMailResultConditionInput
) {
  deleteMailResult(input: $input, condition: $condition) {
    id
    from
    company
    to
    head
    body
    result
    groupId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMailResultMutationVariables,
  APITypes.DeleteMailResultMutation
>;
