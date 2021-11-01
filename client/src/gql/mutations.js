import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $email: String!
    $password: String!
  ) {
    addUser(
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct(
  $productName: String!
  $size: String
  $rrp: String
  $promo: String
  $status: String
  ) {
    addProduct(
      productName: $productName
      size: $size
      rrp: $rrp
      promo: $promo
      status: $status
    ) 
    {
      productName
    }
    }
  
`;
