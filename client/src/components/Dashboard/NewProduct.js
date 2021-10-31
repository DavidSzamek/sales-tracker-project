import React, { useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';


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




function NewProduct() {

    const [input, setInput] = useState({
        productName: '',
        size: '',
        sku: '',
        rrp: '',
        promo: '',
        status: '',
    })

    function handleChange(event) {
        const  {name, value} = event.target;

        setInput(prevInput => {
            return { 
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();

        const newItem = {
            productName: input.productName,
            size: input.size,
            sku: input.sku,
            rrp: input.rrp,
            promo: input.promo,
            status: input.status,
        }
        
        axios.post('http://localhost:3001/create', newItem)
    }

    return (
        <StyledContainer>
            <StyledNewProduct>
                <NewProductTitle> New Product </NewProductTitle>
                <NewProductForm>

                    <NewProductItem>
                        <NewProductLabel> Product Name: </NewProductLabel>
                        <input onChange={handleChange} name="productName" value ={input.productName} type="text" placeholder="Enter product name here.." />
                    </NewProductItem>

                    <NewProductItem>
                        <NewProductLabel> Size: </NewProductLabel>
                        <input onChange={handleChange} name="size" value ={input.size} type="text" placeholder="Enter product size here.." />
                    </NewProductItem>

                    <NewProductItem>
                        <NewProductLabel> SKU: </NewProductLabel>
                        <input onChange={handleChange} name="sku" value ={input.sku} type="text" placeholder="Enter SKU code here.." />
                    </NewProductItem>

                    <NewProductItem>
                        <NewProductLabel> RRP: </NewProductLabel>
                        <input onChange={handleChange} name="rrp" value ={input.rrp} type="text"  placeholder="Enter SKU code here.." />
                    </NewProductItem>

                    <NewProductItem>
                        <NewProductLabel> Promo: </NewProductLabel>
                        <input onChange={handleChange} name="promo" value ={input.promo} type="text"  placeholder="Enter SKU code here.." />
                    </NewProductItem>

                    <NewProductItem>
                        <NewProductLabel> Status: </NewProductLabel>
                        <select onChange={handleChange} name="status" value ={input.status} className="newProductStatus" id="status" name="status">
                            <option value="Active">Active</option>
                            <option value="Not Active">Discontinued</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </NewProductItem>

                    <NewProductButton onClick={handleClick}> Create </NewProductButton>
                    
                </NewProductForm>

            </StyledNewProduct>


        </StyledContainer>
    )
}

export default NewProduct
