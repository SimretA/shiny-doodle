import {gql} from "apollo-boost";

export const ADD_BOOKING = gql`
  mutation addBooking($newBooking: NewBookingInput) {
    addBooking(
        input: $newBooking
        ){
            id
            startBookDate
            endBookDate
            bookingDate
        }
    
  }
`;
