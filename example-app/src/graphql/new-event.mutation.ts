import { gql } from '@apollo/client';

export const M_NEW_EVENT = gql`
  mutation CreateEvent($event: String!) {
    createAppEvent(input: { event: $event }) {
      id
    }
  }
`;
