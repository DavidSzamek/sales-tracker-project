import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import { productRows } from '../../testData';
import { useState } from 'react';


const StyledContainer = styled.div`
    flex: 4;
    padding: 20px;
`;

const ProductTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ProductTitle = styled.h1`
    font-size: 20px;
    font-weight: 600;
`;

const ProductButton = styled.button`
    border: none;
    font-size: 12px;
    border-radius: 5px;
    padding: 5px;
    background-color: #4169E1;
    color: white;
    cursor: pointer;
`;

const ProductContainer = styled.div`
    display: flex;
    margin-top: 20px;
`;

const ProductShow = styled.div`
    flex: 2;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
`;

const ProductShowTop = styled.div`

`;

const ProductTopTitle = styled.div`
    font-size: 22px;
    font-weight: 700;

`;

const ProductTopName = styled.span`
    font-size: 14px;
    margin-top: 20px;
    margin-left: 2px;
`;


const ProductShowBottom = styled.div`
    margin-top: 20px;
`;

const ProductBottomTitle = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: #4169E1;
`;

const ProductShowInfo = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;
`;

const ProductBottomInfoTitle = styled.span`
    font-size: 14px;
    margin-left: 10px;
`;


const ProductUpdate = styled.div`
    flex: 2;
    padding: 20px;
    margin-left: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
`;

const ProductUpdateTitle = styled.span`
    font-size: 22px;
    font-weight: 700;
`;

const ProductUpdateForm = styled.span`
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
`;

const ProductUpdateLeft = styled.div`

    .productUpdateButton{
        width: 200px;
        border: none;
        font-size: 12px;
        border-radius: 5px;
        padding: 5px;
        background-color: #4169E1;
        color: white;
        cursor: pointer;
        margin-left: 2px;
        margin-top:20px;
    }
`;

const ProductUpdateItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    >label{
        margin-bottom: 5px;
        font-size: 14px;
    }

    input{
        border: none;
        width: 200px;
        border-bottom: 1px solid grey;
        height: 25px;
    }
`;

const ProductUpdateRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

   
`;



function ProductEdit() {

    return (
            <StyledContainer>
                <ProductTitleContainer>
                    <ProductTitle>Edit Product</ProductTitle>
                    <Link to="/dashboard/newProduct">
                    <ProductButton>Create Product</ProductButton>
                    </Link>
                </ProductTitleContainer>

                <ProductContainer>

                    {/* Product show is left hand widget */}

                    <ProductShow> 

                        {/* Product Name */}

                        <ProductShowTop>

                        <ProductTopTitle> Green Coast </ProductTopTitle>
                        {/* <ProductTopName> Vanilla Sunscreen </ProductTopName> */}

                        </ProductShowTop>

                        {/* Product Details */}

                        <ProductShowBottom>

                            <ProductBottomTitle> Product Details: </ProductBottomTitle>

                            <ProductShowInfo>
                            <ProductBottomInfoTitle> Vanilla Sunscreen </ProductBottomInfoTitle>
                            </ProductShowInfo>
                                                    
                            <ProductShowInfo>
                            <ProductBottomInfoTitle> 300g </ProductBottomInfoTitle>
                            </ProductShowInfo>

                            <ProductBottomTitle> SKU: </ProductBottomTitle>
                                                   
                            <ProductShowInfo>
                            <ProductBottomInfoTitle> 1035100 </ProductBottomInfoTitle>
                            </ProductShowInfo>

                            <ProductBottomTitle> Status: </ProductBottomTitle>
                                                   
                            <ProductShowInfo>
                            <ProductBottomInfoTitle> Active </ProductBottomInfoTitle>
                            </ProductShowInfo>
                           
                        </ProductShowBottom>
                    </ProductShow>

                    {/* Product Update is right hand widget */}

                    <ProductUpdate> 

                    <ProductUpdateTitle> Edit </ProductUpdateTitle>    

                    <ProductUpdateForm>
                        <ProductUpdateLeft>
                            <ProductUpdateItem>
                                <label>Product name:</label>
                                <input 
                                    type="text"
                                    placeholder="placeholder"
                                    className="productUpdateInput"
                                ></input>
                            </ProductUpdateItem>

                            <ProductUpdateItem>
                                <label>Product description:</label>
                                <input 
                                    type="text"
                                    placeholder="placeholder"
                                    className="productUpdateInput"
                                ></input>
                            </ProductUpdateItem>

                            <ProductUpdateItem>
                                <label>Size:</label>
                                <input 
                                    type="text"
                                    placeholder="placeholder"
                                    className="productUpdateInput"
                                ></input>
                            </ProductUpdateItem>

                            <ProductUpdateItem>
                                <label>SKU:</label>
                                <input 
                                    type="text"
                                    placeholder="placeholder"
                                    className="productUpdateInput"
                                ></input>
                            </ProductUpdateItem>

                            <ProductUpdateItem>
                                <label>Status:</label>
                                <input 
                                    type="text"
                                    placeholder="placeholder"
                                    className="productUpdateInput"
                                ></input>
                            </ProductUpdateItem>
                            <button className="productUpdateButton">Update</button>
                           
                        </ProductUpdateLeft>  

                        <ProductUpdateRight>
                        
                        </ProductUpdateRight>  
                    </ProductUpdateForm>                   
                        
                    </ProductUpdate>
                </ProductContainer>
               
            </StyledContainer>
    )
}

export default ProductEdit
