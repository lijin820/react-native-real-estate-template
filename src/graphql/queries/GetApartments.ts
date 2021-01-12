import {gql} from '@apollo/client';

export const GET_APARTMENTS_QUERY = gql`
  query GetApartments(
    $offset: Int!
    $limit: Int!
    $priceLte: Float
    $priceGte: Float
    $pricePerSqmLte: Float
    $pricePerSqmGte: Float
    $sqmLte: Float
    $sqmGte: Float
    $numberOfBedroom: Int
    $numberOfBathroom: Int
  ) {
    allApartments(
      filter: {
        priceGte: $priceGte
        priceLte: $priceLte
        pricePerSqmGte: $pricePerSqmGte
        pricePerSqmLte: $pricePerSqmLte
        sqmGte: $sqmGte
        sqmLte: $sqmLte
        numberOfBedroom: $numberOfBedroom
        numberOfBathroom: $numberOfBathroom
      }
      offset: $offset
      limit: $limit
    ) {
      id
      title
      sqm
      price
      pricePerSqm
      numberOfBedrooms
      numberOfBathrooms
      picture
    }
  }
`;
