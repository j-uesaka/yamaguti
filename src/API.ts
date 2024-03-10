/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCommentInput = {
  id?: string | null,
  commenter_id: string,
  comment: string,
  comment_time?: string | null,
  comment_number?: string | null,
  created_user_id: string,
  updated_user_id: string,
  reportID: string,
};

export type ModelCommentConditionInput = {
  commenter_id?: ModelStringInput | null,
  comment?: ModelStringInput | null,
  comment_time?: ModelStringInput | null,
  comment_number?: ModelStringInput | null,
  created_user_id?: ModelStringInput | null,
  updated_user_id?: ModelStringInput | null,
  reportID?: ModelIDInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  commenter_id: string,
  comment: string,
  comment_time?: string | null,
  comment_number?: string | null,
  created_user_id: string,
  updated_user_id: string,
  reportID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCommentInput = {
  id: string,
  commenter_id?: string | null,
  comment?: string | null,
  comment_time?: string | null,
  comment_number?: string | null,
  created_user_id?: string | null,
  updated_user_id?: string | null,
  reportID?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateReportMasterInput = {
  id?: string | null,
  type1: string,
  type2?: string | null,
  template_report_title?: string | null,
  template_text?: string | null,
  submission_department_id?: string | null,
  status: string,
  created_user_id: string,
  updated_user_id: string,
};

export type ModelReportMasterConditionInput = {
  type1?: ModelStringInput | null,
  type2?: ModelStringInput | null,
  template_report_title?: ModelStringInput | null,
  template_text?: ModelStringInput | null,
  submission_department_id?: ModelIDInput | null,
  status?: ModelStringInput | null,
  created_user_id?: ModelStringInput | null,
  updated_user_id?: ModelStringInput | null,
  and?: Array< ModelReportMasterConditionInput | null > | null,
  or?: Array< ModelReportMasterConditionInput | null > | null,
  not?: ModelReportMasterConditionInput | null,
};

export type ReportMaster = {
  __typename: "ReportMaster",
  id: string,
  type1: string,
  type2?: string | null,
  template_report_title?: string | null,
  template_text?: string | null,
  submission_department_id?: string | null,
  status: string,
  created_user_id: string,
  updated_user_id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateReportMasterInput = {
  id: string,
  type1?: string | null,
  type2?: string | null,
  template_report_title?: string | null,
  template_text?: string | null,
  submission_department_id?: string | null,
  status?: string | null,
  created_user_id?: string | null,
  updated_user_id?: string | null,
};

export type DeleteReportMasterInput = {
  id: string,
};

export type CreateReportInput = {
  id?: string | null,
  date?: string | null,
  type1: string,
  type2?: string | null,
  report_title?: string | null,
  text?: string | null,
  submission_approver_id?: Array< string | null > | null,
  submission_department_id?: string | null,
  required_flag: string,
  presenter_id: string,
  status: string,
  attachment?: Array< string | null > | null,
  created_user_id: string,
  updated_user_id: string,
};

export type ModelReportConditionInput = {
  date?: ModelStringInput | null,
  type1?: ModelStringInput | null,
  type2?: ModelStringInput | null,
  report_title?: ModelStringInput | null,
  text?: ModelStringInput | null,
  submission_approver_id?: ModelStringInput | null,
  submission_department_id?: ModelStringInput | null,
  required_flag?: ModelStringInput | null,
  presenter_id?: ModelStringInput | null,
  status?: ModelStringInput | null,
  attachment?: ModelStringInput | null,
  created_user_id?: ModelStringInput | null,
  updated_user_id?: ModelStringInput | null,
  and?: Array< ModelReportConditionInput | null > | null,
  or?: Array< ModelReportConditionInput | null > | null,
  not?: ModelReportConditionInput | null,
};

export type Report = {
  __typename: "Report",
  id: string,
  date?: string | null,
  type1: string,
  type2?: string | null,
  report_title?: string | null,
  text?: string | null,
  submission_approver_id?: Array< string | null > | null,
  submission_department_id?: string | null,
  required_flag: string,
  presenter_id: string,
  status: string,
  attachment?: Array< string | null > | null,
  created_user_id: string,
  updated_user_id: string,
  Comments?: ModelCommentConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type UpdateReportInput = {
  id: string,
  date?: string | null,
  type1?: string | null,
  type2?: string | null,
  report_title?: string | null,
  text?: string | null,
  submission_approver_id?: Array< string | null > | null,
  submission_department_id?: string | null,
  required_flag?: string | null,
  presenter_id?: string | null,
  status?: string | null,
  attachment?: Array< string | null > | null,
  created_user_id?: string | null,
  updated_user_id?: string | null,
};

export type DeleteReportInput = {
  id: string,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  commenter_id?: ModelStringInput | null,
  comment?: ModelStringInput | null,
  comment_time?: ModelStringInput | null,
  comment_number?: ModelStringInput | null,
  created_user_id?: ModelStringInput | null,
  updated_user_id?: ModelStringInput | null,
  reportID?: ModelIDInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelReportMasterFilterInput = {
  id?: ModelIDInput | null,
  type1?: ModelStringInput | null,
  type2?: ModelStringInput | null,
  template_report_title?: ModelStringInput | null,
  template_text?: ModelStringInput | null,
  submission_department_id?: ModelIDInput | null,
  status?: ModelStringInput | null,
  created_user_id?: ModelStringInput | null,
  updated_user_id?: ModelStringInput | null,
  and?: Array< ModelReportMasterFilterInput | null > | null,
  or?: Array< ModelReportMasterFilterInput | null > | null,
  not?: ModelReportMasterFilterInput | null,
};

export type ModelReportMasterConnection = {
  __typename: "ModelReportMasterConnection",
  items:  Array<ReportMaster | null >,
  nextToken?: string | null,
};

export type ModelReportFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  type1?: ModelStringInput | null,
  type2?: ModelStringInput | null,
  report_title?: ModelStringInput | null,
  text?: ModelStringInput | null,
  submission_approver_id?: ModelStringInput | null,
  submission_department_id?: ModelStringInput | null,
  required_flag?: ModelStringInput | null,
  presenter_id?: ModelStringInput | null,
  status?: ModelStringInput | null,
  attachment?: ModelStringInput | null,
  created_user_id?: ModelStringInput | null,
  updated_user_id?: ModelStringInput | null,
  and?: Array< ModelReportFilterInput | null > | null,
  or?: Array< ModelReportFilterInput | null > | null,
  not?: ModelReportFilterInput | null,
};

export type ModelReportConnection = {
  __typename: "ModelReportConnection",
  items:  Array<Report | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  commenter_id?: ModelSubscriptionStringInput | null,
  comment?: ModelSubscriptionStringInput | null,
  comment_time?: ModelSubscriptionStringInput | null,
  comment_number?: ModelSubscriptionStringInput | null,
  created_user_id?: ModelSubscriptionStringInput | null,
  updated_user_id?: ModelSubscriptionStringInput | null,
  reportID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionReportMasterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type1?: ModelSubscriptionStringInput | null,
  type2?: ModelSubscriptionStringInput | null,
  template_report_title?: ModelSubscriptionStringInput | null,
  template_text?: ModelSubscriptionStringInput | null,
  submission_department_id?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  created_user_id?: ModelSubscriptionStringInput | null,
  updated_user_id?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReportMasterFilterInput | null > | null,
  or?: Array< ModelSubscriptionReportMasterFilterInput | null > | null,
};

export type ModelSubscriptionReportFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  type1?: ModelSubscriptionStringInput | null,
  type2?: ModelSubscriptionStringInput | null,
  report_title?: ModelSubscriptionStringInput | null,
  text?: ModelSubscriptionStringInput | null,
  submission_approver_id?: ModelSubscriptionStringInput | null,
  submission_department_id?: ModelSubscriptionStringInput | null,
  required_flag?: ModelSubscriptionStringInput | null,
  presenter_id?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  attachment?: ModelSubscriptionStringInput | null,
  created_user_id?: ModelSubscriptionStringInput | null,
  updated_user_id?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReportFilterInput | null > | null,
  or?: Array< ModelSubscriptionReportFilterInput | null > | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    commenter_id: string,
    comment: string,
    comment_time?: string | null,
    comment_number?: string | null,
    created_user_id: string,
    updated_user_id: string,
    reportID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    commenter_id: string,
    comment: string,
    comment_time?: string | null,
    comment_number?: string | null,
    created_user_id: string,
    updated_user_id: string,
    reportID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    commenter_id: string,
    comment: string,
    comment_time?: string | null,
    comment_number?: string | null,
    created_user_id: string,
    updated_user_id: string,
    reportID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateReportMasterMutationVariables = {
  input: CreateReportMasterInput,
  condition?: ModelReportMasterConditionInput | null,
};

export type CreateReportMasterMutation = {
  createReportMaster?:  {
    __typename: "ReportMaster",
    id: string,
    type1: string,
    type2?: string | null,
    template_report_title?: string | null,
    template_text?: string | null,
    submission_department_id?: string | null,
    status: string,
    created_user_id: string,
    updated_user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReportMasterMutationVariables = {
  input: UpdateReportMasterInput,
  condition?: ModelReportMasterConditionInput | null,
};

export type UpdateReportMasterMutation = {
  updateReportMaster?:  {
    __typename: "ReportMaster",
    id: string,
    type1: string,
    type2?: string | null,
    template_report_title?: string | null,
    template_text?: string | null,
    submission_department_id?: string | null,
    status: string,
    created_user_id: string,
    updated_user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReportMasterMutationVariables = {
  input: DeleteReportMasterInput,
  condition?: ModelReportMasterConditionInput | null,
};

export type DeleteReportMasterMutation = {
  deleteReportMaster?:  {
    __typename: "ReportMaster",
    id: string,
    type1: string,
    type2?: string | null,
    template_report_title?: string | null,
    template_text?: string | null,
    submission_department_id?: string | null,
    status: string,
    created_user_id: string,
    updated_user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateReportMutationVariables = {
  input: CreateReportInput,
  condition?: ModelReportConditionInput | null,
};

export type CreateReportMutation = {
  createReport?:  {
    __typename: "Report",
    id: string,
    date?: string | null,
    type1: string,
    type2?: string | null,
    report_title?: string | null,
    text?: string | null,
    submission_approver_id?: Array< string | null > | null,
    submission_department_id?: string | null,
    required_flag: string,
    presenter_id: string,
    status: string,
    attachment?: Array< string | null > | null,
    created_user_id: string,
    updated_user_id: string,
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReportMutationVariables = {
  input: UpdateReportInput,
  condition?: ModelReportConditionInput | null,
};

export type UpdateReportMutation = {
  updateReport?:  {
    __typename: "Report",
    id: string,
    date?: string | null,
    type1: string,
    type2?: string | null,
    report_title?: string | null,
    text?: string | null,
    submission_approver_id?: Array< string | null > | null,
    submission_department_id?: string | null,
    required_flag: string,
    presenter_id: string,
    status: string,
    attachment?: Array< string | null > | null,
    created_user_id: string,
    updated_user_id: string,
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReportMutationVariables = {
  input: DeleteReportInput,
  condition?: ModelReportConditionInput | null,
};

export type DeleteReportMutation = {
  deleteReport?:  {
    __typename: "Report",
    id: string,
    date?: string | null,
    type1: string,
    type2?: string | null,
    report_title?: string | null,
    text?: string | null,
    submission_approver_id?: Array< string | null > | null,
    submission_department_id?: string | null,
    required_flag: string,
    presenter_id: string,
    status: string,
    attachment?: Array< string | null > | null,
    created_user_id: string,
    updated_user_id: string,
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    commenter_id: string,
    comment: string,
    comment_time?: string | null,
    comment_number?: string | null,
    created_user_id: string,
    updated_user_id: string,
    reportID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      commenter_id: string,
      comment: string,
      comment_time?: string | null,
      comment_number?: string | null,
      created_user_id: string,
      updated_user_id: string,
      reportID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentsByReportIDQueryVariables = {
  reportID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByReportIDQuery = {
  commentsByReportID?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      commenter_id: string,
      comment: string,
      comment_time?: string | null,
      comment_number?: string | null,
      created_user_id: string,
      updated_user_id: string,
      reportID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReportMasterQueryVariables = {
  id: string,
};

export type GetReportMasterQuery = {
  getReportMaster?:  {
    __typename: "ReportMaster",
    id: string,
    type1: string,
    type2?: string | null,
    template_report_title?: string | null,
    template_text?: string | null,
    submission_department_id?: string | null,
    status: string,
    created_user_id: string,
    updated_user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReportMastersQueryVariables = {
  filter?: ModelReportMasterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReportMastersQuery = {
  listReportMasters?:  {
    __typename: "ModelReportMasterConnection",
    items:  Array< {
      __typename: "ReportMaster",
      id: string,
      type1: string,
      type2?: string | null,
      template_report_title?: string | null,
      template_text?: string | null,
      submission_department_id?: string | null,
      status: string,
      created_user_id: string,
      updated_user_id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReportQueryVariables = {
  id: string,
};

export type GetReportQuery = {
  getReport?:  {
    __typename: "Report",
    id: string,
    date?: string | null,
    type1: string,
    type2?: string | null,
    report_title?: string | null,
    text?: string | null,
    submission_approver_id?: Array< string | null > | null,
    submission_department_id?: string | null,
    required_flag: string,
    presenter_id: string,
    status: string,
    attachment?: Array< string | null > | null,
    created_user_id: string,
    updated_user_id: string,
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReportsQueryVariables = {
  filter?: ModelReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReportsQuery = {
  listReports?:  {
    __typename: "ModelReportConnection",
    items:  Array< {
      __typename: "Report",
      id: string,
      date?: string | null,
      type1: string,
      type2?: string | null,
      report_title?: string | null,
      text?: string | null,
      submission_approver_id?: Array< string | null > | null,
      submission_department_id?: string | null,
      required_flag: string,
      presenter_id: string,
      status: string,
      attachment?: Array< string | null > | null,
      created_user_id: string,
      updated_user_id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    commenter_id: string,
    comment: string,
    comment_time?: string | null,
    comment_number?: string | null,
    created_user_id: string,
    updated_user_id: string,
    reportID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    commenter_id: string,
    comment: string,
    comment_time?: string | null,
    comment_number?: string | null,
    created_user_id: string,
    updated_user_id: string,
    reportID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    commenter_id: string,
    comment: string,
    comment_time?: string | null,
    comment_number?: string | null,
    created_user_id: string,
    updated_user_id: string,
    reportID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateReportMasterSubscriptionVariables = {
  filter?: ModelSubscriptionReportMasterFilterInput | null,
};

export type OnCreateReportMasterSubscription = {
  onCreateReportMaster?:  {
    __typename: "ReportMaster",
    id: string,
    type1: string,
    type2?: string | null,
    template_report_title?: string | null,
    template_text?: string | null,
    submission_department_id?: string | null,
    status: string,
    created_user_id: string,
    updated_user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReportMasterSubscriptionVariables = {
  filter?: ModelSubscriptionReportMasterFilterInput | null,
};

export type OnUpdateReportMasterSubscription = {
  onUpdateReportMaster?:  {
    __typename: "ReportMaster",
    id: string,
    type1: string,
    type2?: string | null,
    template_report_title?: string | null,
    template_text?: string | null,
    submission_department_id?: string | null,
    status: string,
    created_user_id: string,
    updated_user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReportMasterSubscriptionVariables = {
  filter?: ModelSubscriptionReportMasterFilterInput | null,
};

export type OnDeleteReportMasterSubscription = {
  onDeleteReportMaster?:  {
    __typename: "ReportMaster",
    id: string,
    type1: string,
    type2?: string | null,
    template_report_title?: string | null,
    template_text?: string | null,
    submission_department_id?: string | null,
    status: string,
    created_user_id: string,
    updated_user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateReportSubscriptionVariables = {
  filter?: ModelSubscriptionReportFilterInput | null,
};

export type OnCreateReportSubscription = {
  onCreateReport?:  {
    __typename: "Report",
    id: string,
    date?: string | null,
    type1: string,
    type2?: string | null,
    report_title?: string | null,
    text?: string | null,
    submission_approver_id?: Array< string | null > | null,
    submission_department_id?: string | null,
    required_flag: string,
    presenter_id: string,
    status: string,
    attachment?: Array< string | null > | null,
    created_user_id: string,
    updated_user_id: string,
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReportSubscriptionVariables = {
  filter?: ModelSubscriptionReportFilterInput | null,
};

export type OnUpdateReportSubscription = {
  onUpdateReport?:  {
    __typename: "Report",
    id: string,
    date?: string | null,
    type1: string,
    type2?: string | null,
    report_title?: string | null,
    text?: string | null,
    submission_approver_id?: Array< string | null > | null,
    submission_department_id?: string | null,
    required_flag: string,
    presenter_id: string,
    status: string,
    attachment?: Array< string | null > | null,
    created_user_id: string,
    updated_user_id: string,
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReportSubscriptionVariables = {
  filter?: ModelSubscriptionReportFilterInput | null,
};

export type OnDeleteReportSubscription = {
  onDeleteReport?:  {
    __typename: "Report",
    id: string,
    date?: string | null,
    type1: string,
    type2?: string | null,
    report_title?: string | null,
    text?: string | null,
    submission_approver_id?: Array< string | null > | null,
    submission_department_id?: string | null,
    required_flag: string,
    presenter_id: string,
    status: string,
    attachment?: Array< string | null > | null,
    created_user_id: string,
    updated_user_id: string,
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
