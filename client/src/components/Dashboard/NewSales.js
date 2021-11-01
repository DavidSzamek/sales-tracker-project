import React, { useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    flex: 4;
`;

const StyledNewProduct = styled.div`
    margin: 20px; 
`;

const NewProductTitle = styled.h1`
    font-size: 20px;
    font-weight: 600;
`;

const NewProductForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const NewProductItem = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-right: 20px;

    input {
        height: 20px;
        padding: 10px;
        border: 1px solid gray;
        border-radius: 5px;
    }
    
    .newProductStatus {
        height: 40px;
        border-radius: 5px;
    }
    
`;

const NewProductLabel = styled.label`
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 400;
`;

const NewProductButton = styled.button`
    width: 300px;
    border: none;
    background-color: #4169E1;
    color: white;
    height: 30px;
    padding: 7px 10px;
    font-weight: 400;
    cursor: pointer;
    margin-top: 40px;
    border-radius: 5px;
`;

function NewSales() {
        return (
            <StyledContainer>
                <StyledNewProduct>
                    <NewProductTitle> New Sales Result </NewProductTitle>
                    <NewProductForm>
    
                        <NewProductItem>
                            <NewProductLabel> Date </NewProductLabel>
                            <input 
                                type="text"
                                placeholder="Enter promotional week here..."
                                name="date"
                                id="date"
                                />
                        </NewProductItem>
    
                        <NewProductItem>
                            <NewProductLabel> Product: </NewProductLabel>
                            <input
                                type="text"
                                placeholder="Enter product here..."
                                name="product"
                                id="product" 
                                />
                        </NewProductItem>
    
                        <NewProductItem>
                            <NewProductLabel> Units Sold: </NewProductLabel>
                            <input
                                type="text"
                                placeholder="Enter amount here.."
                                name="unitSold"
                                id="unitSold" 
                                />
                        </NewProductItem>
    
                        <NewProductItem>
                            <NewProductLabel> Average Sell Price: </NewProductLabel>
                            <input
                                type="text"
                                placeholder="Enter SKU code here.."
                                name="promo"
                                id="promo" 
                                />
                        </NewProductItem>
    
                        <NewProductButton type="submit"> Submit </NewProductButton>
                        
                    </NewProductForm>
    
                </StyledNewProduct>
    
    
            </StyledContainer>
        )
}

export default NewSales
