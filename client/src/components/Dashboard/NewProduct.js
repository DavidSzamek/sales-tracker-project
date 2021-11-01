import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_PRODUCT } from '../../gql/mutations';

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




function NewProduct(props) {

    const [formState, setFormState] = useState ({ productName: '', size: '', rrp: '', promo:'', status:'' })
    
    const [addProduct] = useMutation(ADD_PRODUCT);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addProduct({
            variables: {
                productName: formState.productName,
                size: formState.size,
                rrp: formState.rrp,
                promo: formState.promo,
                status: formState.status
            }
        });
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    return (
        <StyledContainer>
            <StyledNewProduct>
                <NewProductTitle> New Product </NewProductTitle>
                <NewProductForm onSubmit={handleFormSubmit}>

                    <NewProductItem>
                        <NewProductLabel> Product Name: </NewProductLabel>
                        <input 
                            type="text"
                            placeholder="Enter product name here.."
                            name="productName"
                            id="productName"
                            onChange={handleChange}
                            />
                    </NewProductItem>

                    <NewProductItem>
                        <NewProductLabel> Size: </NewProductLabel>
                        <input
                            type="text"
                            placeholder="Enter product size here.."
                            name="sizee"
                            id="size" 
                            onChange={handleChange}
                            />
                    </NewProductItem>

                    {/* <NewProductItem>
                        <NewProductLabel> SKU: </NewProductLabel>
                        <input type="text" placeholder="Enter SKU code here.." />
                    </NewProductItem> */}

                    <NewProductItem>
                        <NewProductLabel> RRP: </NewProductLabel>
                        <input
                            type="text"
                            placeholder="Enter SKU code here.."
                            name="rrp"
                            id="rrp" 
                            onChange={handleChange}
                            />
                    </NewProductItem>

                    <NewProductItem>
                        <NewProductLabel> Promo: </NewProductLabel>
                        <input
                            type="text"
                            placeholder="Enter SKU code here.."
                            name="promo"
                            id="promo" 
                            onChange={handleChange}
                            />
                    </NewProductItem>

                    <NewProductItem>
                        <NewProductLabel> Status: </NewProductLabel>
                        <input
                            type="text"
                            placeholder="Active, Pending or Discontinued" 
                            name="status"
                            id="status" 
                            onChange={handleChange}
                            />
                    </NewProductItem>

                    <NewProductButton type="submit"> Submit </NewProductButton>
                    
                </NewProductForm>

            </StyledNewProduct>


        </StyledContainer>
    )
}

export default NewProduct
