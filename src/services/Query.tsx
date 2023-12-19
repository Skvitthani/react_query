import {gql} from '@apollo/client';

export const GET_COUNTRIES_DETAILS = gql`
  query {
    countries {
      code
      capital
      name
    }
  }
`;

export const GET_COUNTRIES_DETAILS_ON_ID = gql`
  query Query($code: ID!) {
    country(code: $code) {
      code
      phone
      name
    }
  }
`;
