/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTReportInput = {
  id?: string | null,
  date?: string | null,
  report_title: string,
  text?: string | null,
  submission_approver_id?: Array< string | null > | null,
  submission_department_id?: string | null,
  presenter_id: string,
  tReport_status: string,
  attachment?: Array< string | null > | null,
  hidden_flag: number,
  created_user_id: string,
  createdAt?: string | null,
  updated_user_id: string,
  updatedAt?: string | null,
};

export type ModelTReportConditionInput = {
  date?: ModelStringInput | null,
  report_title?: ModelStringInput | null,
  text?: ModelStringInput | null,
  submission_approver_id?: ModelStringInput | null,
  submission_department_id?: ModelStringInput | null,
  presenter_id?: ModelStringInput | null,
  tReport_status?: ModelStringInput | null,
  attachment?: ModelStringInput | null,
  hidden_flag?: ModelIntInput | null,
  created_user_id?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updated_user_id?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTReportConditionInput | null > | null,
  or?: Array< ModelTReportConditionInput | null > | null,
  not?: ModelTReportConditionInput | null,
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

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type TReport = {
  __typename: "TReport",
  id: string,
  date?: string | null,
  report_title: string,
  text?: string | null,
  submission_approver_id?: Array< string | null > | null,
  submission_department_id?: string | null,
  presenter_id: string,
  tReport_status: string,
  attachment?: Array< string | null > | null,
  hidden_flag: number,
  created_user_id: string,
  createdAt: string,
  updated_user_id: string,
  updatedAt: string,
};

export type UpdateTReportInput = {
  id: string,
  date?: string | null,
  report_title?: string | null,
  text?: string | null,
  submission_approver_id?: Array< string | null > | null,
  submission_department_id?: string | null,
  presenter_id?: string | null,
  tReport_status?: string | null,
  attachment?: Array< string | null > | null,
  hidden_flag?: number | null,
  created_user_id?: string | null,
  createdAt?: string | null,
  updated_user_id?: string | null,
  updatedAt?: string | null,
};

export type DeleteTReportInput = {
  id: string,
};

export type CreateMailToInput = {
  id?: string | null,
  company: string,
  address: string,
  name?: string | null,
};

export type ModelMailToConditionInput = {
  company?: ModelStringInput | null,
  address?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelMailToConditionInput | null > | null,
  or?: Array< ModelMailToConditionInput | null > | null,
  not?: ModelMailToConditionInput | null,
};

export type MailTo = {
  __typename: "MailTo",
  id: string,
  company: string,
  address: string,
  name?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMailToInput = {
  id: string,
  company?: string | null,
  address?: string | null,
  name?: string | null,
};

export type DeleteMailToInput = {
  id: string,
};

export type CreateMailFromInput = {
  id?: string | null,
  address: string,
  name?: string | null,
};

export type ModelMailFromConditionInput = {
  address?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelMailFromConditionInput | null > | null,
  or?: Array< ModelMailFromConditionInput | null > | null,
  not?: ModelMailFromConditionInput | null,
};

export type MailFrom = {
  __typename: "MailFrom",
  id: string,
  address: string,
  name?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMailFromInput = {
  id: string,
  address?: string | null,
  name?: string | null,
};

export type DeleteMailFromInput = {
  id: string,
};

export type CreateMailResultInput = {
  id?: string | null,
  from: string,
  company: string,
  to: string,
  head?: string | null,
  body?: string | null,
  result: string,
  groupId: string,
};

export type ModelMailResultConditionInput = {
  from?: ModelStringInput | null,
  company?: ModelStringInput | null,
  to?: ModelStringInput | null,
  head?: ModelStringInput | null,
  body?: ModelStringInput | null,
  result?: ModelStringInput | null,
  groupId?: ModelIDInput | null,
  and?: Array< ModelMailResultConditionInput | null > | null,
  or?: Array< ModelMailResultConditionInput | null > | null,
  not?: ModelMailResultConditionInput | null,
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

export type MailResult = {
  __typename: "MailResult",
  id: string,
  from: string,
  company: string,
  to: string,
  head?: string | null,
  body?: string | null,
  result: string,
  groupId: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMailResultInput = {
  id: string,
  from?: string | null,
  company?: string | null,
  to?: string | null,
  head?: string | null,
  body?: string | null,
  result?: string | null,
  groupId?: string | null,
};

export type DeleteMailResultInput = {
  id: string,
};

export type ModelTReportFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  report_title?: ModelStringInput | null,
  text?: ModelStringInput | null,
  submission_approver_id?: ModelStringInput | null,
  submission_department_id?: ModelStringInput | null,
  presenter_id?: ModelStringInput | null,
  tReport_status?: ModelStringInput | null,
  attachment?: ModelStringInput | null,
  hidden_flag?: ModelIntInput | null,
  created_user_id?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updated_user_id?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTReportFilterInput | null > | null,
  or?: Array< ModelTReportFilterInput | null > | null,
  not?: ModelTReportFilterInput | null,
};

export type ModelTReportConnection = {
  __typename: "ModelTReportConnection",
  items:  Array<TReport | null >,
  nextToken?: string | null,
};

export type ModelMailToFilterInput = {
  id?: ModelIDInput | null,
  company?: ModelStringInput | null,
  address?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelMailToFilterInput | null > | null,
  or?: Array< ModelMailToFilterInput | null > | null,
  not?: ModelMailToFilterInput | null,
};

export type ModelMailToConnection = {
  __typename: "ModelMailToConnection",
  items:  Array<MailTo | null >,
  nextToken?: string | null,
};

export type ModelMailFromFilterInput = {
  id?: ModelIDInput | null,
  address?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelMailFromFilterInput | null > | null,
  or?: Array< ModelMailFromFilterInput | null > | null,
  not?: ModelMailFromFilterInput | null,
};

export type ModelMailFromConnection = {
  __typename: "ModelMailFromConnection",
  items:  Array<MailFrom | null >,
  nextToken?: string | null,
};

export type ModelMailResultFilterInput = {
  id?: ModelIDInput | null,
  from?: ModelStringInput | null,
  company?: ModelStringInput | null,
  to?: ModelStringInput | null,
  head?: ModelStringInput | null,
  body?: ModelStringInput | null,
  result?: ModelStringInput | null,
  groupId?: ModelIDInput | null,
  and?: Array< ModelMailResultFilterInput | null > | null,
  or?: Array< ModelMailResultFilterInput | null > | null,
  not?: ModelMailResultFilterInput | null,
};

export type ModelMailResultConnection = {
  __typename: "ModelMailResultConnection",
  items:  Array<MailResult | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTReportFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  report_title?: ModelSubscriptionStringInput | null,
  text?: ModelSubscriptionStringInput | null,
  submission_approver_id?: ModelSubscriptionStringInput | null,
  submission_department_id?: ModelSubscriptionStringInput | null,
  presenter_id?: ModelSubscriptionStringInput | null,
  tReport_status?: ModelSubscriptionStringInput | null,
  attachment?: ModelSubscriptionStringInput | null,
  hidden_flag?: ModelSubscriptionIntInput | null,
  created_user_id?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updated_user_id?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTReportFilterInput | null > | null,
  or?: Array< ModelSubscriptionTReportFilterInput | null > | null,
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

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionMailToFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  company?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMailToFilterInput | null > | null,
  or?: Array< ModelSubscriptionMailToFilterInput | null > | null,
};

export type ModelSubscriptionMailFromFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  address?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMailFromFilterInput | null > | null,
  or?: Array< ModelSubscriptionMailFromFilterInput | null > | null,
};

export type ModelSubscriptionMailResultFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  from?: ModelSubscriptionStringInput | null,
  company?: ModelSubscriptionStringInput | null,
  to?: ModelSubscriptionStringInput | null,
  head?: ModelSubscriptionStringInput | null,
  body?: ModelSubscriptionStringInput | null,
  result?: ModelSubscriptionStringInput | null,
  groupId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMailResultFilterInput | null > | null,
  or?: Array< ModelSubscriptionMailResultFilterInput | null > | null,
};

export type CreateTReportMutationVariables = {
  input: CreateTReportInput,
  condition?: ModelTReportConditionInput | null,
};

export type CreateTReportMutation = {
  createTReport?:  {
    __typename: "TReport",
    id: string,
    date?: string | null,
    report_title: string,
    text?: string | null,
    submission_approver_id?: Array< string | null > | null,
    submission_department_id?: string | null,
    presenter_id: string,
    tReport_status: string,
    attachment?: Array< string | null > | null,
    hidden_flag: number,
    created_user_id: string,
    createdAt: string,
    updated_user_id: string,
    updatedAt: string,
  } | null,
};

export type UpdateTReportMutationVariables = {
  input: UpdateTReportInput,
  condition?: ModelTReportConditionInput | null,
};

export type UpdateTReportMutation = {
  updateTReport?:  {
    __typename: "TReport",
    id: string,
    date?: string | null,
    report_title: string,
    text?: string | null,
    submission_approver_id?: Array< string | null > | null,
    submission_department_id?: string | null,
    presenter_id: string,
    tReport_status: string,
    attachment?: Array< string | null > | null,
    hidden_flag: number,
    created_user_id: string,
    createdAt: string,
    updated_user_id: string,
    updatedAt: string,
  } | null,
};

export type DeleteTReportMutationVariables = {
  input: DeleteTReportInput,
  condition?: ModelTReportConditionInput | null,
};

export type DeleteTReportMutation = {
  deleteTReport?:  {
    __typename: "TReport",
    id: string,
    date?: string | null,
    report_title: string,
    text?: string | null,
    submission_approver_id?: Array< string | null > | null,
    submission_department_id?: string | null,
    presenter_id: string,
    tReport_status: string,
    attachment?: Array< string | null > | null,
    hidden_flag: number,
    created_user_id: string,
    createdAt: string,
    updated_user_id: string,
    updatedAt: string,
  } | null,
};

export type CreateMailToMutationVariables = {
  input: CreateMailToInput,
  condition?: ModelMailToConditionInput | null,
};

export type CreateMailToMutation = {
  createMailTo?:  {
    __typename: "MailTo",
    id: string,
    company: string,
    address: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMailToMutationVariables = {
  input: UpdateMailToInput,
  condition?: ModelMailToConditionInput | null,
};

export type UpdateMailToMutation = {
  updateMailTo?:  {
    __typename: "MailTo",
    id: string,
    company: string,
    address: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMailToMutationVariables = {
  input: DeleteMailToInput,
  condition?: ModelMailToConditionInput | null,
};

export type DeleteMailToMutation = {
  deleteMailTo?:  {
    __typename: "MailTo",
    id: string,
    company: string,
    address: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMailFromMutationVariables = {
  input: CreateMailFromInput,
  condition?: ModelMailFromConditionInput | null,
};

export type CreateMailFromMutation = {
  createMailFrom?:  {
    __typename: "MailFrom",
    id: string,
    address: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMailFromMutationVariables = {
  input: UpdateMailFromInput,
  condition?: ModelMailFromConditionInput | null,
};

export type UpdateMailFromMutation = {
  updateMailFrom?:  {
    __typename: "MailFrom",
    id: string,
    address: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMailFromMutationVariables = {
  input: DeleteMailFromInput,
  condition?: ModelMailFromConditionInput | null,
};

export type DeleteMailFromMutation = {
  deleteMailFrom?:  {
    __typename: "MailFrom",
    id: string,
    address: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMailResultMutationVariables = {
  input: CreateMailResultInput,
  condition?: ModelMailResultConditionInput | null,
};

export type CreateMailResultMutation = {
  createMailResult?:  {
    __typename: "MailResult",
    id: string,
    from: string,
    company: string,
    to: string,
    head?: string | null,
    body?: string | null,
    result: string,
    groupId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMailResultMutationVariables = {
  input: UpdateMailResultInput,
  condition?: ModelMailResultConditionInput | null,
};

export type UpdateMailResultMutation = {
  updateMailResult?:  {
    __typename: "MailResult",
    id: string,
    from: string,
    company: string,
    to: string,
    head?: string | null,
    body?: string | null,
    result: string,
    groupId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMailResultMutationVariables = {
  input: DeleteMailResultInput,
  condition?: ModelMailResultConditionInput | null,
};

export type DeleteMailResultMutation = {
  deleteMailResult?:  {
    __typename: "MailResult",
    id: string,
    from: string,
    company: string,
    to: string,
    head?: string | null,
    body?: string | null,
    result: string,
    groupId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type HandlerQueryVariables = {
  from?: string | null,
  to?: string | null,
  head?: string | null,
  body?: string | null,
  company?: string | null,
  groupId?: string | null,
};

export type HandlerQuery = {
  handler?: string | null,
};

export type GetTReportQueryVariables = {
  id: string,
};

export type GetTReportQuery = {
  getTReport?:  {
    __typename: "TReport",
    id: string,
    date?: string | null,
    report_title: string,
    text?: string | null,
    submission_approver_id?: Array< string | null > | null,
    submission_department_id?: string | null,
    presenter_id: string,
    tReport_status: string,
    attachment?: Array< string | null > | null,
    hidden_flag: number,
    created_user_id: string,
    createdAt: string,
    updated_user_id: string,
    updatedAt: string,
  } | null,
};

export type ListTReportsQueryVariables = {
  filter?: ModelTReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTReportsQuery = {
  listTReports?:  {
    __typename: "ModelTReportConnection",
    items:  Array< {
      __typename: "TReport",
      id: string,
      date?: string | null,
      report_title: string,
      text?: string | null,
      submission_approver_id?: Array< string | null > | null,
      submission_department_id?: string | null,
      presenter_id: string,
      tReport_status: string,
      attachment?: Array< string | null > | null,
      hidden_flag: number,
      created_user_id: string,
      createdAt: string,
      updated_user_id: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMailToQueryVariables = {
  id: string,
};

export type GetMailToQuery = {
  getMailTo?:  {
    __typename: "MailTo",
    id: string,
    company: string,
    address: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMailTosQueryVariables = {
  filter?: ModelMailToFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMailTosQuery = {
  listMailTos?:  {
    __typename: "ModelMailToConnection",
    items:  Array< {
      __typename: "MailTo",
      id: string,
      company: string,
      address: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMailFromQueryVariables = {
  id: string,
};

export type GetMailFromQuery = {
  getMailFrom?:  {
    __typename: "MailFrom",
    id: string,
    address: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMailFromsQueryVariables = {
  filter?: ModelMailFromFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMailFromsQuery = {
  listMailFroms?:  {
    __typename: "ModelMailFromConnection",
    items:  Array< {
      __typename: "MailFrom",
      id: string,
      address: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMailResultQueryVariables = {
  id: string,
};

export type GetMailResultQuery = {
  getMailResult?:  {
    __typename: "MailResult",
    id: string,
    from: string,
    company: string,
    to: string,
    head?: string | null,
    body?: string | null,
    result: string,
    groupId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMailResultsQueryVariables = {
  filter?: ModelMailResultFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMailResultsQuery = {
  listMailResults?:  {
    __typename: "ModelMailResultConnection",
    items:  Array< {
      __typename: "MailResult",
      id: string,
      from: string,
      company: string,
      to: string,
      head?: string | null,
      body?: string | null,
      result: string,
      groupId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTReportSubscriptionVariables = {
  filter?: ModelSubscriptionTReportFilterInput | null,
};

export type OnCreateTReportSubscription = {
  onCreateTReport?:  {
    __typename: "TReport",
    id: string,
    date?: string | null,
    report_title: string,
    text?: string | null,
    submission_approver_id?: Array< string | null > | null,
    submission_department_id?: string | null,
    presenter_id: string,
    tReport_status: string,
    attachment?: Array< string | null > | null,
    hidden_flag: number,
    created_user_id: string,
    createdAt: string,
    updated_user_id: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTReportSubscriptionVariables = {
  filter?: ModelSubscriptionTReportFilterInput | null,
};

export type OnUpdateTReportSubscription = {
  onUpdateTReport?:  {
    __typename: "TReport",
    id: string,
    date?: string | null,
    report_title: string,
    text?: string | null,
    submission_approver_id?: Array< string | null > | null,
    submission_department_id?: string | null,
    presenter_id: string,
    tReport_status: string,
    attachment?: Array< string | null > | null,
    hidden_flag: number,
    created_user_id: string,
    createdAt: string,
    updated_user_id: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTReportSubscriptionVariables = {
  filter?: ModelSubscriptionTReportFilterInput | null,
};

export type OnDeleteTReportSubscription = {
  onDeleteTReport?:  {
    __typename: "TReport",
    id: string,
    date?: string | null,
    report_title: string,
    text?: string | null,
    submission_approver_id?: Array< string | null > | null,
    submission_department_id?: string | null,
    presenter_id: string,
    tReport_status: string,
    attachment?: Array< string | null > | null,
    hidden_flag: number,
    created_user_id: string,
    createdAt: string,
    updated_user_id: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMailToSubscriptionVariables = {
  filter?: ModelSubscriptionMailToFilterInput | null,
};

export type OnCreateMailToSubscription = {
  onCreateMailTo?:  {
    __typename: "MailTo",
    id: string,
    company: string,
    address: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMailToSubscriptionVariables = {
  filter?: ModelSubscriptionMailToFilterInput | null,
};

export type OnUpdateMailToSubscription = {
  onUpdateMailTo?:  {
    __typename: "MailTo",
    id: string,
    company: string,
    address: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMailToSubscriptionVariables = {
  filter?: ModelSubscriptionMailToFilterInput | null,
};

export type OnDeleteMailToSubscription = {
  onDeleteMailTo?:  {
    __typename: "MailTo",
    id: string,
    company: string,
    address: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMailFromSubscriptionVariables = {
  filter?: ModelSubscriptionMailFromFilterInput | null,
};

export type OnCreateMailFromSubscription = {
  onCreateMailFrom?:  {
    __typename: "MailFrom",
    id: string,
    address: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMailFromSubscriptionVariables = {
  filter?: ModelSubscriptionMailFromFilterInput | null,
};

export type OnUpdateMailFromSubscription = {
  onUpdateMailFrom?:  {
    __typename: "MailFrom",
    id: string,
    address: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMailFromSubscriptionVariables = {
  filter?: ModelSubscriptionMailFromFilterInput | null,
};

export type OnDeleteMailFromSubscription = {
  onDeleteMailFrom?:  {
    __typename: "MailFrom",
    id: string,
    address: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMailResultSubscriptionVariables = {
  filter?: ModelSubscriptionMailResultFilterInput | null,
};

export type OnCreateMailResultSubscription = {
  onCreateMailResult?:  {
    __typename: "MailResult",
    id: string,
    from: string,
    company: string,
    to: string,
    head?: string | null,
    body?: string | null,
    result: string,
    groupId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMailResultSubscriptionVariables = {
  filter?: ModelSubscriptionMailResultFilterInput | null,
};

export type OnUpdateMailResultSubscription = {
  onUpdateMailResult?:  {
    __typename: "MailResult",
    id: string,
    from: string,
    company: string,
    to: string,
    head?: string | null,
    body?: string | null,
    result: string,
    groupId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMailResultSubscriptionVariables = {
  filter?: ModelSubscriptionMailResultFilterInput | null,
};

export type OnDeleteMailResultSubscription = {
  onDeleteMailResult?:  {
    __typename: "MailResult",
    id: string,
    from: string,
    company: string,
    to: string,
    head?: string | null,
    body?: string | null,
    result: string,
    groupId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
