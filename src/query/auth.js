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

export const GET_USER_BY_ID = gql`
    query GetUser($id: String){
      user(id: $id){
        id
        firstName
        lastName
        email
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
}
`;
