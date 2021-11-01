import React from 'react'
import styled from "styled-components";

const StyledFeature = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
   
`;

const StyledFeatureItem = styled.div`
    flex: 1;
    margin: 0px 20px;
    padding: 30px;
    // border-radius: 10px;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
`;

const StyledFeatureTitle = styled.span`
    font-size: 20px;
`;


const StyledContainer = styled.div`
    margin: 10px 0px;
    display: flex;
    align-items: center;
`;

const StyledDetailName = styled.span`
    font-size: 15px;
    font-weight: 600;

`;

const StyledDetailData = styled.span`
    display: flex;
    align-items: center;
    margin-left: 20px;
`;

const StyledSubtitle = styled.span`
    font-size: 12px;
    color: gray;
    
`;

function Featured() {
    return (
        <div>
            <StyledFeature>
    
            {/* Card 1 */}
                <StyledFeatureItem>

                    {/* Title */}
                    <StyledFeatureTitle>
                        Sales Value
                    </StyledFeatureTitle>

                    {/* Info Container */}
                    <StyledContainer>

                        <StyledDetailName> $placeholder </StyledDetailName>
                        
                        <StyledDetailData> $placerholder </StyledDetailData>

                    </StyledContainer>

                    {/* Subtitle */}
                    <StyledSubtitle> 
                        data placeholder
                    </StyledSubtitle>

                </StyledFeatureItem>

            {/* Card 2 */}
                <StyledFeatureItem>

                    {/* Title */}
                    <StyledFeatureTitle>
                        Units Sold
                    </StyledFeatureTitle>

                    {/* Info Container */}
                    <StyledContainer>

                        <StyledDetailName> $placeholder </StyledDetailName>
                        
                        <StyledDetailData> $placerholder </StyledDetailData>

                    </StyledContainer>

                    {/* Subtitle */}
                    <StyledSubtitle> 
                        data placeholder
                    </StyledSubtitle>

                </StyledFeatureItem>
        
            {/* Card 3 */}
                <StyledFeatureItem>

                    {/* Title */}
                    <StyledFeatureTitle>
                        Cost
                    </StyledFeatureTitle>

                    {/* Info Container */}
                    <StyledContainer>

                        <StyledDetailName> $placeholder </StyledDetailName>
                        
                        <StyledDetailData> $placerholder </StyledDetailData>

                    </StyledContainer>

                    {/* Subtitle */}
                    <StyledSubtitle> 
                        data placeholder
                    </StyledSubtitle>

                </StyledFeatureItem>
            
            {/* End Feature Content */}

            </StyledFeature>
        </div>
    )
}

export default Featured;
