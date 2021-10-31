import React from 'react';
import styled from 'styled-components';

import {Visibility} from "@mui/icons-material";
import { useState, useEffect } from 'react';

const StyledContainer = styled.div`

`;

const SmallTitle = styled.span`
    font-size: 20px;
    font-weight: 600;
`;

const SmallUl = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const SmallLi = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
`;

const SmallProduct = styled.div`
    display: flex;
    flex-direction: column;
`;

const SmallProductName = styled.span`
    font-weight: 600;

`;

const SmallProductCost = styled.span`
    font-weight: 300;
`;

const SmallButton = styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 5px;
    padding: 5px 5px;
    background-color: #eeeef7;
    color: #555;
    cursor: pointer;
    font-size: 10px;

    a {
		color: ;
		text-decoration: none;
		font-size: 1.8rem;
	}

	&:hover {
		background-color: red ;
		border-radius: 10px;
	}
`;


function WidgetSmall() {

    // const [ products, setProducts ] = useState([])
    
    // useEffect(() => {
    //     const getProducts = async () => {
    //         const res = await  
    // //     }
    // })
    return (
        <div>
            <StyledContainer>
                
            <SmallTitle>
                New Products
            </SmallTitle>

            <SmallUl>

                {/* Product 1 */}

                <SmallLi> 

                    <SmallProduct>

                        <SmallProductName> Green Coast Vanilla Sunscreen 300g </SmallProductName>

                        <SmallProductCost> RRP: $5.00 </SmallProductCost>

                    </SmallProduct>

                    <SmallButton>
                        Display
                    </SmallButton>

                </SmallLi>

                {/* Product 2 */}

                <SmallLi> 

                    <SmallProduct>

                        <SmallProductName> Green Coast Chocolate Sunscreen 300g </SmallProductName>

                        <SmallProductCost> RRP: $5.00 </SmallProductCost>

                    </SmallProduct>

                    <SmallButton>
                        Display
                    </SmallButton>

                </SmallLi>

                {/* Product 3 */}

                <SmallLi> 

                    <SmallProduct>

                        <SmallProductName> Green Coast Mango Sunscreen 300g </SmallProductName>

                        <SmallProductCost> RRP: $5.00 </SmallProductCost>

                    </SmallProduct>

                    <SmallButton>
                        Display
                    </SmallButton>

                </SmallLi>


            </SmallUl>

            </StyledContainer>
            
        </div>
    )
}

export default WidgetSmall;
