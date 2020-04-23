import {gql} from "apollo-boost";


export const LOG_IN = gql`
    query LoginUser($email: String!
                    $password: String!){
        login(
            email: $email
            password: $password
        ){
            userId
            token
            tokenExpiration
        }
    }
`;

export const ADD_USER = gql`
  mutation registerUsers($newUser: NewUserInput!) {
    registerUsers(
        input: $newUser
        ){
            id
            firstName
            lastName
            email
            country
        }
    
  }
`;

export const GET_USER_BY_ID = gql`
    query GetUser($id: String){
      user(id: $id){
        id
        firstName
        lastName
        email
        paypalAccount
        country
        street
        phone
        language
        joinedDate
        listings{
          id
          name
          price
          country
        }
        
      }
}`;

export const GET_USER_PAYPAL_ID = gql`
    query GetUser($id: String){
      user(id: $id){
        id
        paypalAccount
        
      }
}`;


export const EDIT_USER = gql`
  mutation updateUser($newUser: UpdateUserInput) {
    updateUser(
        input: $newUser
        ){
            id
            firstName
            lastName
            email
            country
            street
            phone
            language
            joinedDate
        }
    
  }
`;
