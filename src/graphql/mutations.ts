/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createComment = /* GraphQL */ `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const updateComment = /* GraphQL */ `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCommentMutationVariables,
  APITypes.UpdateCommentMutation
>;
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
export const createReportMaster = /* GraphQL */ `mutation CreateReportMaster(
  $input: CreateReportMasterInput!
  $condition: ModelReportMasterConditionInput
) {
  createReportMaster(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateReportMasterMutationVariables,
  APITypes.CreateReportMasterMutation
>;
export const updateReportMaster = /* GraphQL */ `mutation UpdateReportMaster(
  $input: UpdateReportMasterInput!
  $condition: ModelReportMasterConditionInput
) {
  updateReportMaster(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateReportMasterMutationVariables,
  APITypes.UpdateReportMasterMutation
>;
export const deleteReportMaster = /* GraphQL */ `mutation DeleteReportMaster(
  $input: DeleteReportMasterInput!
  $condition: ModelReportMasterConditionInput
) {
  deleteReportMaster(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteReportMasterMutationVariables,
  APITypes.DeleteReportMasterMutation
>;
export const createReport = /* GraphQL */ `mutation CreateReport(
  $input: CreateReportInput!
  $condition: ModelReportConditionInput
) {
  createReport(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateReportMutationVariables,
  APITypes.CreateReportMutation
>;
export const updateReport = /* GraphQL */ `mutation UpdateReport(
  $input: UpdateReportInput!
  $condition: ModelReportConditionInput
) {
  updateReport(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateReportMutationVariables,
  APITypes.UpdateReportMutation
>;
export const deleteReport = /* GraphQL */ `mutation DeleteReport(
  $input: DeleteReportInput!
  $condition: ModelReportConditionInput
) {
  deleteReport(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteReportMutationVariables,
  APITypes.DeleteReportMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    name
    kengenId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    name
    kengenId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    name
    kengenId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
