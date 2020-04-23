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

export const GET_BOOKING_BY_USER = gql`
    query bookingByUser($id: String){
      bookingByUser(id: $id){
        id
        startBookDate
        endBookDate
        bookingDate
        user{
            firstName
            lastName            
        }
        listing{
            id
            name
            price
            street
            city
            country
            houseType
            geolocations{
                lat
                long
            }
            user{
                id
                email
                phone
                firstName
                lastName
                
            }
            
        }
        
      }
}`;

export const GET_BOOKING_BY_LISTING = gql`
    query bookingByListing($id: String){
      bookingByListing(id: $id){
        id
        startBookDate
        endBookDate
        bookingDate
        user{
            firstName
            lastName
        }
        
        listing{
            id
            name
            price
            street
            city
            country
            houseType
            geolocations{
                lat
                long
            }
        }
        
      }
}`;
