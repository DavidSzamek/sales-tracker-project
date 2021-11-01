import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_GET_ALL } from '../../gql/queries';

import { useEffect, useState } from 'react';

const StyledContainer = styled.div`
    margin: 20px;
`;

const SmallTitle = styled.span`
    font-size: 20px;
    font-weight: 600;
`;

const StyledFeatureItem = styled.div`
    margin: 20px 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);

    &:hover {
        box-shadow: 0px 0px 15px 3px #4169E1;
    }
`;

const StyledFeatureTitle = styled.span`
    font-size: 16px;
    font-weight: 600;
`;

const StyledUl = styled.ul`

    li {
        font-size: 12px;
        margin: 5px;
    }

`;


function ProductDevelop() {

const { loading, data } = useQuery(QUERY_GET_ALL);

// console.log(data);

const productList = data?.getAll || [];

    return (
        <StyledContainer>
            <SmallTitle>
                Product List Development
            </SmallTitle>

            {productList.map((product, index) => 
                <StyledFeatureItem>
                    <StyledFeatureTitle> {product.productName} </StyledFeatureTitle>
                    <StyledUl key={product.toString}>
                        <li> Size: {product.size} </li>
                        <li> RRP: ${product.rrp} </li>
                        <li> Promo Price: ${product.promo} </li>
                        <li> Status: {product.status} </li>

                    </StyledUl>
                
                </StyledFeatureItem>
            )}

        </StyledContainer>
    )
}

export default ProductDevelop
