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

export type CreateMailResultListInput = {
  id?: string | null,
  companyNames: Array< string | null >,
  from: string,
  subject: string,
  result: string,
};

export type ModelMailResultListConditionInput = {
  companyNames?: ModelStringInput | null,
  from?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  result?: ModelStringInput | null,
  and?: Array< ModelMailResultListConditionInput | null > | null,
  or?: Array< ModelMailResultListConditionInput | null > | null,
  not?: ModelMailResultListConditionInput | null,
};

export type MailResultList = {
  __typename: "MailResultList",
  id: string,
  companyNames: Array< string | null >,
  from: string,
  subject: string,
  result: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMailResultListInput = {
  id: string,
  companyNames?: Array< string | null > | null,
  from?: string | null,
  subject?: string | null,
  result?: string | null,
};

export type DeleteMailResultListInput = {
  id: string,
};

export type CreateMailResultDetailInput = {
  id?: string | null,
  from: string,
  company: string,
  to: string,
  head?: string | null,
  body?: string | null,
  name?: string | null,
  result: string,
  groupId: string,
};

export type ModelMailResultDetailConditionInput = {
  from?: ModelStringInput | null,
  company?: ModelStringInput | null,
  to?: ModelStringInput | null,
  head?: ModelStringInput | null,
  body?: ModelStringInput | null,
  name?: ModelStringInput | null,
  result?: ModelStringInput | null,
  groupId?: ModelIDInput | null,
  and?: Array< ModelMailResultDetailConditionInput | null > | null,
  or?: Array< ModelMailResultDetailConditionInput | null > | null,
  not?: ModelMailResultDetailConditionInput | null,
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

export type MailResultDetail = {
  __typename: "MailResultDetail",
  id: string,
  from: string,
  company: string,
  to: string,
  head?: string | null,
  body?: string | null,
  name?: string | null,
  result: string,
  groupId: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMailResultDetailInput = {
  id: string,
  from?: string | null,
  company?: string | null,
  to?: string | null,
  head?: string | null,
  body?: string | null,
  name?: string | null,
  result?: string | null,
  groupId?: string | null,
};

export type DeleteMailResultDetailInput = {
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

export type ModelMailResultListFilterInput = {
  id?: ModelIDInput | null,
  companyNames?: ModelStringInput | null,
  from?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  result?: ModelStringInput | null,
  and?: Array< ModelMailResultListFilterInput | null > | null,
  or?: Array< ModelMailResultListFilterInput | null > | null,
  not?: ModelMailResultListFilterInput | null,
};

export type ModelMailResultListConnection = {
  __typename: "ModelMailResultListConnection",
  items:  Array<MailResultList | null >,
  nextToken?: string | null,
};

export type ModelMailResultDetailFilterInput = {
  id?: ModelIDInput | null,
  from?: ModelStringInput | null,
  company?: ModelStringInput | null,
  to?: ModelStringInput | null,
  head?: ModelStringInput | null,
  body?: ModelStringInput | null,
  name?: ModelStringInput | null,
  result?: ModelStringInput | null,
  groupId?: ModelIDInput | null,
  and?: Array< ModelMailResultDetailFilterInput | null > | null,
  or?: Array< ModelMailResultDetailFilterInput | null > | null,
  not?: ModelMailResultDetailFilterInput | null,
};

export type ModelMailResultDetailConnection = {
  __typename: "ModelMailResultDetailConnection",
  items:  Array<MailResultDetail | null >,
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

export type ModelSubscriptionMailResultListFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  companyNames?: ModelSubscriptionStringInput | null,
  from?: ModelSubscriptionStringInput | null,
  subject?: ModelSubscriptionStringInput | null,
  result?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMailResultListFilterInput | null > | null,
  or?: Array< ModelSubscriptionMailResultListFilterInput | null > | null,
};

export type ModelSubscriptionMailResultDetailFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  from?: ModelSubscriptionStringInput | null,
  company?: ModelSubscriptionStringInput | null,
  to?: ModelSubscriptionStringInput | null,
  head?: ModelSubscriptionStringInput | null,
  body?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  result?: ModelSubscriptionStringInput | null,
  groupId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMailResultDetailFilterInput | null > | null,
  or?: Array< ModelSubscriptionMailResultDetailFilterInput | null > | null,
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

export type CreateMailResultListMutationVariables = {
  input: CreateMailResultListInput,
  condition?: ModelMailResultListConditionInput | null,
};

export type CreateMailResultListMutation = {
  createMailResultList?:  {
    __typename: "MailResultList",
    id: string,
    companyNames: Array< string | null >,
    from: string,
    subject: string,
    result: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMailResultListMutationVariables = {
  input: UpdateMailResultListInput,
  condition?: ModelMailResultListConditionInput | null,
};

export type UpdateMailResultListMutation = {
  updateMailResultList?:  {
    __typename: "MailResultList",
    id: string,
    companyNames: Array< string | null >,
    from: string,
    subject: string,
    result: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMailResultListMutationVariables = {
  input: DeleteMailResultListInput,
  condition?: ModelMailResultListConditionInput | null,
};

export type DeleteMailResultListMutation = {
  deleteMailResultList?:  {
    __typename: "MailResultList",
    id: string,
    companyNames: Array< string | null >,
    from: string,
    subject: string,
    result: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMailResultDetailMutationVariables = {
  input: CreateMailResultDetailInput,
  condition?: ModelMailResultDetailConditionInput | null,
};

export type CreateMailResultDetailMutation = {
  createMailResultDetail?:  {
    __typename: "MailResultDetail",
    id: string,
    from: string,
    company: string,
    to: string,
    head?: string | null,
    body?: string | null,
    name?: string | null,
    result: string,
    groupId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMailResultDetailMutationVariables = {
  input: UpdateMailResultDetailInput,
  condition?: ModelMailResultDetailConditionInput | null,
};

export type UpdateMailResultDetailMutation = {
  updateMailResultDetail?:  {
    __typename: "MailResultDetail",
    id: string,
    from: string,
    company: string,
    to: string,
    head?: string | null,
    body?: string | null,
    name?: string | null,
    result: string,
    groupId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMailResultDetailMutationVariables = {
  input: DeleteMailResultDetailInput,
  condition?: ModelMailResultDetailConditionInput | null,
};

export type DeleteMailResultDetailMutation = {
  deleteMailResultDetail?:  {
    __typename: "MailResultDetail",
    id: string,
    from: string,
    company: string,
    to: string,
    head?: string | null,
    body?: string | null,
    name?: string | null,
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
  name?: string | null,
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

export type GetMailResultListQueryVariables = {
  id: string,
};

export type GetMailResultListQuery = {
  getMailResultList?:  {
    __typename: "MailResultList",
    id: string,
    companyNames: Array< string | null >,
    from: string,
    subject: string,
    result: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMailResultListsQueryVariables = {
  filter?: ModelMailResultListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMailResultListsQuery = {
  listMailResultLists?:  {
    __typename: "ModelMailResultListConnection",
    items:  Array< {
      __typename: "MailResultList",
      id: string,
      companyNames: Array< string | null >,
      from: string,
      subject: string,
      result: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMailResultDetailQueryVariables = {
  id: string,
};

export type GetMailResultDetailQuery = {
  getMailResultDetail?:  {
    __typename: "MailResultDetail",
    id: string,
    from: string,
    company: string,
    to: string,
    head?: string | null,
    body?: string | null,
    name?: string | null,
    result: string,
    groupId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMailResultDetailsQueryVariables = {
  filter?: ModelMailResultDetailFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMailResultDetailsQuery = {
  listMailResultDetails?:  {
    __typename: "ModelMailResultDetailConnection",
    items:  Array< {
      __typename: "MailResultDetail",
      id: string,
      from: string,
      company: string,
      to: string,
      head?: string | null,
      body?: string | null,
      name?: string | null,
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

export type OnCreateMailResultListSubscriptionVariables = {
  filter?: ModelSubscriptionMailResultListFilterInput | null,
};

export type OnCreateMailResultListSubscription = {
  onCreateMailResultList?:  {
    __typename: "MailResultList",
    id: string,
    companyNames: Array< string | null >,
    from: string,
    subject: string,
    result: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMailResultListSubscriptionVariables = {
  filter?: ModelSubscriptionMailResultListFilterInput | null,
};

export type OnUpdateMailResultListSubscription = {
  onUpdateMailResultList?:  {
    __typename: "MailResultList",
    id: string,
    companyNames: Array< string | null >,
    from: string,
    subject: string,
    result: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMailResultListSubscriptionVariables = {
  filter?: ModelSubscriptionMailResultListFilterInput | null,
};

export type OnDeleteMailResultListSubscription = {
  onDeleteMailResultList?:  {
    __typename: "MailResultList",
    id: string,
    companyNames: Array< string | null >,
    from: string,
    subject: string,
    result: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMailResultDetailSubscriptionVariables = {
  filter?: ModelSubscriptionMailResultDetailFilterInput | null,
};

export type OnCreateMailResultDetailSubscription = {
  onCreateMailResultDetail?:  {
    __typename: "MailResultDetail",
    id: string,
    from: string,
    company: string,
    to: string,
    head?: string | null,
    body?: string | null,
    name?: string | null,
    result: string,
    groupId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMailResultDetailSubscriptionVariables = {
  filter?: ModelSubscriptionMailResultDetailFilterInput | null,
};

export type OnUpdateMailResultDetailSubscription = {
  onUpdateMailResultDetail?:  {
    __typename: "MailResultDetail",
    id: string,
    from: string,
    company: string,
    to: string,
    head?: string | null,
    body?: string | null,
    name?: string | null,
    result: string,
    groupId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMailResultDetailSubscriptionVariables = {
  filter?: ModelSubscriptionMailResultDetailFilterInput | null,
};

export type OnDeleteMailResultDetailSubscription = {
  onDeleteMailResultDetail?:  {
    __typename: "MailResultDetail",
    id: string,
    from: string,
    company: string,
    to: string,
    head?: string | null,
    body?: string | null,
    name?: string | null,
    result: string,
    groupId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
