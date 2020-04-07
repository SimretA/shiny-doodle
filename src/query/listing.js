import {gql} from "apollo-boost";

export const ADD_LISTING = gql`
  mutation addNewListing($newListing: NewListingInput!) {
    addNewListing(
        input: $newListing
        ){
            id
            name
            city
            country
            
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
