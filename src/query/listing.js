import {gql} from "apollo-boost";

export const CALCEL_LISTING = gql`
  mutation cancelBooking($cancelBookingInput: CancelBookingInput) {
    cancelBooking(
        input: $cancelBookingInput
        ){
            deleted
            
        }
    
  }
`;
export const ADD_LISTING_2 = gql`
  mutation addNewListing(
        $name: String
        $price: Float
        $street: String
        $city: String
        $country: String
        $bedrooms: Int
        $bathrooms: Int
        $personCapacity: Int
        $houseType: String
        $rating: Float
        $user: ListingUserInput
        $images: [NewImageInput]
        $anemitys: [NewAnemityInput]
        $geolocations: [NewGeolocationInput]
  ) {
    addNewListing(input:{
        name: $name
        price: $price
        street: $street
        city: $city
        country: $country
        bedrooms: $bedrooms
        bathrooms: $bathrooms
        personCapacity: $personCapacity
        houseType: $houseType
        rating: $rating
        user: $user
        images: $images
        anemitys: $anemitys
        geolocations: $geolocations
        }){
            id
            name
            city
            country
            anemitys{
                id
                name
                
            }
            geolocations{
                id
                lat
                long
            }
            
        }
    
  }
`;

export const GET_LISTINGS = gql`
    {
        activeListings{
            id
            name
            city
            country
            price
            createdAt
            geolocations{
              lat
              long
            }
            personCapacity
            houseType
            bedrooms
            bedrooms
            rating
            reviews{
              id
              content
            }
            images{
              url
            }
            anemitys{
              name
            }
            bookings{
                id
                startBookDate
                endBookDate
            }
            reviews{
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
                user{
                    id
                    firstName
                    lastName
                }
        }
    }
`;

export const GET_LISTING_BY_ID = gql`
    query listing($id: String){
        listing(id: $id){
            id
            name
            city
            country
            price
            createdAt
            status
            geolocations{
              lat
              long
            }
            personCapacity
            houseType
            bedrooms
            bedrooms
            rating
            user{
                id
                firstName
                lastName
                email
                phone
            }
            reviews{
              id
              content
            }
            images{
              url
            }
            anemitys{
              name
            }
            bookings{
                id
                startBookDate
                endBookDate
            }
            reviews{
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
    }
`;
export const GET_LISTING_BY_USER = gql`
    query listingByUser($id: String){
        listingByUser(id: $id){
            id
            name
            city
            country
            price
            createdAt
            status
            geolocations{
              lat
              long
            }
            personCapacity
            houseType
            bedrooms
            bedrooms
            rating
            reviews{
              id
              content
            }
            images{
              url
            }
            anemitys{
              name
            }
            bookings{
                id
                startBookDate
                endBookDate
            }
            reviews{
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
    }
`;

export const SEARCH_LISTING = gql`
        query searchListing($searchListingInput: SearchListingsInput){
        searchListing(input: $searchListingInput){
            id
            name
            city
            country
            price
            createdAt
            geolocations{
              lat
              long
            }
            personCapacity
            houseType
            bedrooms
            bedrooms
            rating
            reviews{
              id
              content
            }
            images{
              url
            }
            anemitys{
              name
            }
            bookings{
                id
                startBookDate
                endBookDate
            }
            reviews{
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
    }
`;



export const EDIT_LISTING = gql`
 mutation updateListing(
        $id: String
        $name: String
        $price: Float
        $street: String
        $city: String
        $country: String
        $bedrooms: Int
        $bathrooms: Int
        $personCapacity: Int
        $houseType: String
        $images: [UpdateImageInput]
        $anemitys: [UpdateAnemityInput]
  ) {
    updateListing(input:{
        id: $id
        name: $name
        price: $price
        street: $street
        city: $city
        country: $country
        bedrooms: $bedrooms
        bathrooms: $bathrooms
        personCapacity: $personCapacity
        houseType: $houseType
        images: $images
        anemitys: $anemitys
        }){
             id
            name
            city
            country
            price
            createdAt
            status
            geolocations{
              lat
              long
            }
            personCapacity
            houseType
            bedrooms
            bedrooms
            rating
            reviews{
              id
              content
            }
            images{
              url
            }
            anemitys{
              name
            }
            bookings{
                id
                startBookDate
                endBookDate
            }
            reviews{
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
    
  }
`;


export const DELETE_LISTING = gql`
  mutation deleteListing($id: String) {
    deleteListing(
        input: $id
        ){
            deleted
        }
    
  }
`;
