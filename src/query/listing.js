export const Listing  =`{
    id: String
    name: String
    price: Float
    street: String
    city: String
    country: String
    bedrooms: Int
    bathrooms: Int
    personCapacity: Int
    houseType: String
    rating: Float
    reviews: [Review]
    images: [Image]
    geolocations: [Geolocation]
    anemitys: [Anemity]
    createdAt: Date
}`;
