import { gql } from "apollo-boost";

export const getHotelByID = gql`
  query GetOnlyThreads {
    getOnlyThreads {
      id
      user {
        id
        firstName
      }
      created_at
      updated_at
      invitees {
        id
        firstName
      }
    }
  }
`;
