export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateIngredientInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  unitOfMeasurement: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  supplierId?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateKengenInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  kengenName: Scalars['String']['input'];
};

export type CreateUserInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  kengenId: Scalars['String']['input'];
};

export type DeleteIngredientInput = {
  id: Scalars['String']['input'];
};

export type DeleteKengenInput = {
  id: Scalars['String']['input'];
};

export type DeleteUserInput = {
  id: Scalars['String']['input'];
};

export type Ingredient = {
  __typename?: 'Ingredient';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  unitOfMeasurement: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  supplierId?: Maybe<Scalars['Int']['output']>;
};

export type Kengen = {
  __typename?: 'Kengen';
  id: Scalars['String']['output'];
  kengenName: Scalars['String']['output'];
};

export enum ModelAttributeTypes {
  Binary = 'binary',
  BinarySet = 'binarySet',
  Bool = 'bool',
  List = 'list',
  Map = 'map',
  Number = 'number',
  NumberSet = 'numberSet',
  String = 'string',
  StringSet = 'stringSet',
  Null = '_null'
}

export type ModelBooleanInput = {
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
};

export type ModelFloatInput = {
  ne?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  le?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  ge?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
};

export type ModelIdInput = {
  ne?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  le?: InputMaybe<Scalars['ID']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  ge?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  beginsWith?: InputMaybe<Scalars['ID']['input']>;
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelIngredientConditionInput = {
  name?: InputMaybe<ModelStringInput>;
  unitOfMeasurement?: InputMaybe<ModelStringInput>;
  price?: InputMaybe<ModelFloatInput>;
  supplierId?: InputMaybe<ModelIntInput>;
  and?: InputMaybe<Array<InputMaybe<ModelIngredientConditionInput>>>;
  or?: InputMaybe<Array<InputMaybe<ModelIngredientConditionInput>>>;
  not?: InputMaybe<ModelIngredientConditionInput>;
};

export type ModelIngredientConnection = {
  __typename?: 'ModelIngredientConnection';
  items: Array<Maybe<Ingredient>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelIngredientFilterInput = {
  id?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  unitOfMeasurement?: InputMaybe<ModelStringInput>;
  price?: InputMaybe<ModelFloatInput>;
  supplierId?: InputMaybe<ModelIntInput>;
  and?: InputMaybe<Array<InputMaybe<ModelIngredientFilterInput>>>;
  or?: InputMaybe<Array<InputMaybe<ModelIngredientFilterInput>>>;
  not?: InputMaybe<ModelIngredientFilterInput>;
};

export type ModelIntInput = {
  ne?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
};

export type ModelKengenConditionInput = {
  kengenName?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelKengenConditionInput>>>;
  or?: InputMaybe<Array<InputMaybe<ModelKengenConditionInput>>>;
  not?: InputMaybe<ModelKengenConditionInput>;
};

export type ModelKengenConnection = {
  __typename?: 'ModelKengenConnection';
  items: Array<Maybe<Kengen>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelKengenFilterInput = {
  id?: InputMaybe<ModelStringInput>;
  kengenName?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelKengenFilterInput>>>;
  or?: InputMaybe<Array<InputMaybe<ModelKengenFilterInput>>>;
  not?: InputMaybe<ModelKengenFilterInput>;
};

export type ModelSizeInput = {
  ne?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type ModelStringInput = {
  ne?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  le?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  ge?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  beginsWith?: InputMaybe<Scalars['String']['input']>;
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelSubscriptionBooleanInput = {
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ModelSubscriptionFloatInput = {
  ne?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  le?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  ge?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type ModelSubscriptionIdInput = {
  ne?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  le?: InputMaybe<Scalars['ID']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  ge?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  beginsWith?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ModelSubscriptionIngredientFilterInput = {
  id?: InputMaybe<ModelSubscriptionStringInput>;
  name?: InputMaybe<ModelSubscriptionStringInput>;
  unitOfMeasurement?: InputMaybe<ModelSubscriptionStringInput>;
  price?: InputMaybe<ModelSubscriptionFloatInput>;
  supplierId?: InputMaybe<ModelSubscriptionIntInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionIngredientFilterInput>>>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionIngredientFilterInput>>>;
};

export type ModelSubscriptionIntInput = {
  ne?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type ModelSubscriptionKengenFilterInput = {
  id?: InputMaybe<ModelSubscriptionStringInput>;
  kengenName?: InputMaybe<ModelSubscriptionStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionKengenFilterInput>>>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionKengenFilterInput>>>;
};

export type ModelSubscriptionStringInput = {
  ne?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  le?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  ge?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  beginsWith?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ModelSubscriptionUserFilterInput = {
  id?: InputMaybe<ModelSubscriptionStringInput>;
  name?: InputMaybe<ModelSubscriptionStringInput>;
  kengenId?: InputMaybe<ModelSubscriptionStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionUserFilterInput>>>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionUserFilterInput>>>;
};

export type ModelUserConditionInput = {
  name?: InputMaybe<ModelStringInput>;
  kengenId?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelUserConditionInput>>>;
  or?: InputMaybe<Array<InputMaybe<ModelUserConditionInput>>>;
  not?: InputMaybe<ModelUserConditionInput>;
};

export type ModelUserConnection = {
  __typename?: 'ModelUserConnection';
  items: Array<Maybe<User>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelUserFilterInput = {
  id?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  kengenId?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelUserFilterInput>>>;
  or?: InputMaybe<Array<InputMaybe<ModelUserFilterInput>>>;
  not?: InputMaybe<ModelUserFilterInput>;
};

export type UpdateIngredientInput = {
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  unitOfMeasurement?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  supplierId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateKengenInput = {
  id: Scalars['String']['input'];
  kengenName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  kengenId?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  kengenId: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createIngredient?: Maybe<Ingredient>;
  updateIngredient?: Maybe<Ingredient>;
  deleteIngredient?: Maybe<Ingredient>;
  createKengen?: Maybe<Kengen>;
  updateKengen?: Maybe<Kengen>;
  deleteKengen?: Maybe<Kengen>;
  createUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  deleteUser?: Maybe<User>;
};


export type MutationCreateIngredientArgs = {
  input: CreateIngredientInput;
  condition?: InputMaybe<ModelIngredientConditionInput>;
};


export type MutationUpdateIngredientArgs = {
  input: UpdateIngredientInput;
  condition?: InputMaybe<ModelIngredientConditionInput>;
};


export type MutationDeleteIngredientArgs = {
  input: DeleteIngredientInput;
  condition?: InputMaybe<ModelIngredientConditionInput>;
};


export type MutationCreateKengenArgs = {
  input: CreateKengenInput;
  condition?: InputMaybe<ModelKengenConditionInput>;
};


export type MutationUpdateKengenArgs = {
  input: UpdateKengenInput;
  condition?: InputMaybe<ModelKengenConditionInput>;
};


export type MutationDeleteKengenArgs = {
  input: DeleteKengenInput;
  condition?: InputMaybe<ModelKengenConditionInput>;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
  condition?: InputMaybe<ModelUserConditionInput>;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
  condition?: InputMaybe<ModelUserConditionInput>;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
  condition?: InputMaybe<ModelUserConditionInput>;
};

export type Query = {
  __typename?: 'Query';
  getIngredient?: Maybe<Ingredient>;
  listIngredients?: Maybe<ModelIngredientConnection>;
  getKengen?: Maybe<Kengen>;
  listKengens?: Maybe<ModelKengenConnection>;
  getUser?: Maybe<User>;
  listUsers?: Maybe<ModelUserConnection>;
};


export type QueryGetIngredientArgs = {
  id: Scalars['String']['input'];
};


export type QueryListIngredientsArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelIngredientFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryGetKengenArgs = {
  id: Scalars['String']['input'];
};


export type QueryListKengensArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelKengenFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryGetUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryListUsersArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelUserFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateIngredient?: Maybe<Ingredient>;
  onUpdateIngredient?: Maybe<Ingredient>;
  onDeleteIngredient?: Maybe<Ingredient>;
  onCreateKengen?: Maybe<Kengen>;
  onUpdateKengen?: Maybe<Kengen>;
  onDeleteKengen?: Maybe<Kengen>;
  onCreateUser?: Maybe<User>;
  onUpdateUser?: Maybe<User>;
  onDeleteUser?: Maybe<User>;
};


export type SubscriptionOnCreateIngredientArgs = {
  filter?: InputMaybe<ModelSubscriptionIngredientFilterInput>;
};


export type SubscriptionOnUpdateIngredientArgs = {
  filter?: InputMaybe<ModelSubscriptionIngredientFilterInput>;
};


export type SubscriptionOnDeleteIngredientArgs = {
  filter?: InputMaybe<ModelSubscriptionIngredientFilterInput>;
};


export type SubscriptionOnCreateKengenArgs = {
  filter?: InputMaybe<ModelSubscriptionKengenFilterInput>;
};


export type SubscriptionOnUpdateKengenArgs = {
  filter?: InputMaybe<ModelSubscriptionKengenFilterInput>;
};


export type SubscriptionOnDeleteKengenArgs = {
  filter?: InputMaybe<ModelSubscriptionKengenFilterInput>;
};


export type SubscriptionOnCreateUserArgs = {
  filter?: InputMaybe<ModelSubscriptionUserFilterInput>;
};


export type SubscriptionOnUpdateUserArgs = {
  filter?: InputMaybe<ModelSubscriptionUserFilterInput>;
};


export type SubscriptionOnDeleteUserArgs = {
  filter?: InputMaybe<ModelSubscriptionUserFilterInput>;
};
