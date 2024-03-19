/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateComment = /* GraphQL */ `subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
  onCreateComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
  onUpdateComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
  onDeleteComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
export const onCreateReportMaster = /* GraphQL */ `subscription OnCreateReportMaster(
  $filter: ModelSubscriptionReportMasterFilterInput
) {
  onCreateReportMaster(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateReportMasterSubscriptionVariables,
  APITypes.OnCreateReportMasterSubscription
>;
export const onUpdateReportMaster = /* GraphQL */ `subscription OnUpdateReportMaster(
  $filter: ModelSubscriptionReportMasterFilterInput
) {
  onUpdateReportMaster(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateReportMasterSubscriptionVariables,
  APITypes.OnUpdateReportMasterSubscription
>;
export const onDeleteReportMaster = /* GraphQL */ `subscription OnDeleteReportMaster(
  $filter: ModelSubscriptionReportMasterFilterInput
) {
  onDeleteReportMaster(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteReportMasterSubscriptionVariables,
  APITypes.OnDeleteReportMasterSubscription
>;
export const onCreateReport = /* GraphQL */ `subscription OnCreateReport($filter: ModelSubscriptionReportFilterInput) {
  onCreateReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateReportSubscriptionVariables,
  APITypes.OnCreateReportSubscription
>;
export const onUpdateReport = /* GraphQL */ `subscription OnUpdateReport($filter: ModelSubscriptionReportFilterInput) {
  onUpdateReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateReportSubscriptionVariables,
  APITypes.OnUpdateReportSubscription
>;
export const onDeleteReport = /* GraphQL */ `subscription OnDeleteReport($filter: ModelSubscriptionReportFilterInput) {
  onDeleteReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteReportSubscriptionVariables,
  APITypes.OnDeleteReportSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    id
    name
    kengen_id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
    id
    name
    kengen_id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
    id
    name
    kengen_id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
