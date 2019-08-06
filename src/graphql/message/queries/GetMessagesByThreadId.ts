import { gql } from "apollo-boost";

export const GET_MESSAGE_THREADS = gql`
  query GetMessagesByThreadId($input: GetMessagesByThreadIdInput!) {
    getMessagesByThreadId(input: $input) {
      id
      created_at
      message
      user {
        id
        firstName
      }
      sentBy {
        id
        firstName
      }
    }
  }
`;
