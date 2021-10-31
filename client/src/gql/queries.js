import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      email
    }
  }
`;


export const QUERY_GET_ALL = gql`
{
   getAll {
     productName
     size
     rrp
     promo
     status
    }
  }
`;