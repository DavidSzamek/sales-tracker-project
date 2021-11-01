import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`

`;

const LargeTitle = styled.h3`
    font-size: 20px;
    font-weight: 600; 
`;

const LargeTable = styled.table`
    width: 100%;
    margin: 20px 0px;
`;

const LargeTableHead = styled.thead``;


const LargeTableTr = styled.tr`

`;

const LargeTableTh = styled.th`
    font-weight: 600;
    text-align: left;
`;

const LargeTableTd = styled.td`
    display: flex;
    align-items: center;
    padding-top: 10px;
`;

const LargeWidgetDate = styled.span`

`;

const LargeWidgetProduct = styled.td`
    font-weight: 300;
`;

const LargeWidgetUnit = styled.td`
    font-weight: 300;
`;

const LargeWidgetPrice = styled.td`

`;


function WidgetBig() {
    return (
        <div>
            <StyledContainer>
                
                <LargeTitle>
                    Latest Week Sales 
                </LargeTitle>

                    <LargeTable>
                    
                            <LargeTableTr>
                                <LargeTableTh> Date </LargeTableTh>
                                <LargeTableTh> Product </LargeTableTh>
                                <LargeTableTh> Units Sold </LargeTableTh>
                                <LargeTableTh> Average Sell Price </LargeTableTh>
                            </LargeTableTr>
                       
                       
                        {/* Item One Latest Week */}
                        <LargeTableTr>
                            
                            {/* Table Date Data */}
                            <LargeTableTd>
                                <LargeWidgetDate>27-Oct</LargeWidgetDate>
                            </LargeTableTd>
                                <LargeWidgetProduct> Green Coast Sunscreen  </LargeWidgetProduct>
                                <LargeWidgetUnit> 6,000 units </LargeWidgetUnit>
                                <LargeWidgetPrice> $2.50 </LargeWidgetPrice>
                        </LargeTableTr>
                       
                        {/* Item One Latest Week */}
                        <LargeTableTr>
                            {/* Table Date Data */}
                            <LargeTableTd>
                                <LargeWidgetDate>20-Oct</LargeWidgetDate>
                            </LargeTableTd>
                                <LargeWidgetProduct> Green Coast Sunscreen  </LargeWidgetProduct>
                                <LargeWidgetUnit> 1,890 units </LargeWidgetUnit>
                                <LargeWidgetPrice> $5.00 </LargeWidgetPrice>
                        </LargeTableTr>

                        {/* Item One Latest Week */}
                        <LargeTableTr>
                            {/* Table Date Data */}
                            <LargeTableTd>
                                <LargeWidgetDate>13-Oct</LargeWidgetDate>
                            </LargeTableTd>
                                <LargeWidgetProduct> Green Coast Sunscreen  </LargeWidgetProduct>
                                <LargeWidgetUnit> 2,890 units </LargeWidgetUnit>
                                <LargeWidgetPrice> $5.00 </LargeWidgetPrice>
                        </LargeTableTr>

                        {/* Item One Latest Week */}
                        <LargeTableTr>
                            {/* Table Date Data */}
                            <LargeTableTd>
                                <LargeWidgetDate>06-Oct</LargeWidgetDate>
                            </LargeTableTd>
                                <LargeWidgetProduct> Green Coast Sunscreen  </LargeWidgetProduct>
                                <LargeWidgetUnit> 2,000 units </LargeWidgetUnit>
                                <LargeWidgetPrice> $5.00 </LargeWidgetPrice>
                        </LargeTableTr>


                    </LargeTable>


            </StyledContainer>

        </div>
    )
}

export default WidgetBig;
