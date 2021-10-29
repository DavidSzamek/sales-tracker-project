import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`

`;

const SmallTitle = styled.span`

`;

const SmallUl = styled.ul`

`;

const SmallLi = styled.li`

`;

const SmallProduct = styled.div`

`;

const SmallProductName = styled.span`

`;

const SmallProductCost = styled.span`

`;

const SmallButton = styled.button`

`;

function WidgetSmall() {
    return (
        <div>
            <StyledContainer>
                
            <SmallTitle>
                New Products
            </SmallTitle>

            <SmallUl>

                <SmallLi> 

                    <SmallProduct>

                        <SmallProductName> </SmallProductName>

                        <SmallProductCost> </SmallProductCost>

                    </SmallProduct>

               

                </SmallLi>


            </SmallUl>

            </StyledContainer>
            
        </div>
    )
}

export default WidgetSmall;
