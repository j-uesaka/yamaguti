/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTReport = /* GraphQL */ `subscription OnCreateTReport($filter: ModelSubscriptionTReportFilterInput) {
  onCreateTReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTReportSubscriptionVariables,
  APITypes.OnCreateTReportSubscription
>;
export const onUpdateTReport = /* GraphQL */ `subscription OnUpdateTReport($filter: ModelSubscriptionTReportFilterInput) {
  onUpdateTReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTReportSubscriptionVariables,
  APITypes.OnUpdateTReportSubscription
>;
export const onDeleteTReport = /* GraphQL */ `subscription OnDeleteTReport($filter: ModelSubscriptionTReportFilterInput) {
  onDeleteTReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTReportSubscriptionVariables,
  APITypes.OnDeleteTReportSubscription
>;
export const onCreateMailTo = /* GraphQL */ `subscription OnCreateMailTo($filter: ModelSubscriptionMailToFilterInput) {
  onCreateMailTo(filter: $filter) {
    id
    company
    address
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMailToSubscriptionVariables,
  APITypes.OnCreateMailToSubscription
>;
export const onUpdateMailTo = /* GraphQL */ `subscription OnUpdateMailTo($filter: ModelSubscriptionMailToFilterInput) {
  onUpdateMailTo(filter: $filter) {
    id
    company
    address
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMailToSubscriptionVariables,
  APITypes.OnUpdateMailToSubscription
>;
export const onDeleteMailTo = /* GraphQL */ `subscription OnDeleteMailTo($filter: ModelSubscriptionMailToFilterInput) {
  onDeleteMailTo(filter: $filter) {
    id
    company
    address
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMailToSubscriptionVariables,
  APITypes.OnDeleteMailToSubscription
>;
export const onCreateMailFrom = /* GraphQL */ `subscription OnCreateMailFrom($filter: ModelSubscriptionMailFromFilterInput) {
  onCreateMailFrom(filter: $filter) {
    id
    address
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMailFromSubscriptionVariables,
  APITypes.OnCreateMailFromSubscription
>;
export const onUpdateMailFrom = /* GraphQL */ `subscription OnUpdateMailFrom($filter: ModelSubscriptionMailFromFilterInput) {
  onUpdateMailFrom(filter: $filter) {
    id
    address
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMailFromSubscriptionVariables,
  APITypes.OnUpdateMailFromSubscription
>;
export const onDeleteMailFrom = /* GraphQL */ `subscription OnDeleteMailFrom($filter: ModelSubscriptionMailFromFilterInput) {
  onDeleteMailFrom(filter: $filter) {
    id
    address
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMailFromSubscriptionVariables,
  APITypes.OnDeleteMailFromSubscription
>;
