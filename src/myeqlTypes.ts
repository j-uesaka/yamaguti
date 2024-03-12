type UserType = {
    id: string;
    name: string;
    __typename: string;
  };
  
  type ListUsersType = {
    items: UserType[];
    nextToken: null | string;
    __typename: string;
  };
  
  type DataType = {
    listUsers: ListUsersType;
  };