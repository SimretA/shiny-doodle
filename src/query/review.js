import {gql} from "apollo-boost";


export const REVIEW_BY_LISTING = gql`
    query reviewByListing($id: String){
        reviewByListing(
            id: $id
        ){
            id
            content
            user{
                id
                firstName
                lastName
            }
            createdAt
            lastUpdatedAt
        }
    }
`;


export const ADD_REVIEW = gql`
  mutation addReview($newReview: NewReviewInput) {
    addReview(
        input: $newReview
        ){
            id
            content
            user{
                id
                firstName
                lastName
               }
            createdAt
            lastUpdatedAt
        }
    
  }
`;
