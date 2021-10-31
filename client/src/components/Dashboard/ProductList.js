import React from 'react';
import styled from "styled-components";
import { DataGrid } from '@mui/x-data-grid';
import { HighlightOff } from '@mui/icons-material';
import { productRows } from '../../testData';
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

const StyledContainer = styled.div`
    flex: 4;
    height: 400px;
    widgth: 100%;
    margin: 20px;

    .productListEdit {
        border: none;
        border-radius: 10px;
        padding: 5px 10px;
        background-color: #3bb077;
        color: white;
        cursor: pointer;
        margin-right: 20px;
    },

    .productListDelete {
        color: red;
        cursor: pointer;
    }

`;

const ProductTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: black;
    margin-bottom: 20px;
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

function ProductList() {
    // Function handles the deletion of the product rows; however, not linked to DB just yet
    const [data,setData] = useState(productRows);
    console.log(data);

    const handleDelete = (id) => {
        setData(data.filter(item=>item.id !== id));
    };

    // const [products, setProducts] = useState([{
    //     productName: '',
    //     size: '',
    //     sku: '',
    //     rrp: '',
    //     promo: '',
    //     status: '',
    // }]);

    // useEffect(() => { 
    //     fetch("/products").then (res => {
    //         if (res.ok) {
    //             return res.json()
    //         }
    //     }).then(jsonRes => setProducts(jsonRes));
    // })

    const columns = [
        { field: 'id', headerName: 'ID', width: 75 },
        { field: 'productName', headerName: 'Product name', width: 170 },
        { field: 'size', headerName: 'Size', width: 80 },
        { field: 'rrp', headerName: 'RRP', width: 83 },
        { field: 'promo', headerName: 'Promo', width: 100 },
        { field: 'status', headerName: 'Status', width: 100 },
        { 
            field: "action",
            headerName: "Action", 
            width: 150,
            renderCell: (params) => {
                return(
                    <>
                    <Link to={"/products/"+params.row.id}>
                    <button className="productListEdit">Edit</button>
                    </Link>
                    <HighlightOff className="productListDelete" onClick={()=>handleDelete(params.row.id)}/>
                    </>
                )
            }
        },
       
      ];

    return (
        <div>
            <StyledContainer>

            <ProductTitleContainer>
                    <ProductTitle>Edit Product</ProductTitle>
                    <Link to="/dashboard/newProduct">
                    <ProductButton>Create Product</ProductButton>
                    </Link>
                </ProductTitleContainer>

                <DataGrid
                    rows={data}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />

            </StyledContainer>
        </div>
    )
}

export default ProductList;
