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

export const DELETE_REVIEW = gql`
  mutation deleteReview($id: String) {
    deleteReview(
        input: $id
        ){
            deleted
        }
    
  }
`;
export const UPDATE_REVIEW = gql`
  mutation updateReview($updateReviewInput: UpdateReviewInput) {
    updateReview(
        input: $updateReviewInput
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
            listing{
                id
            }
            
        }
    
  }
`;
