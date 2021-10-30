import React from 'react';
import styled from "styled-components";
import { DataGrid } from '@mui/x-data-grid';
import { HighlightOff } from '@mui/icons-material';
import { productRows } from '../../testData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const StyledContainer = styled.div`
    flex: 4;
    height: 400px;
    widgth: 100%;

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

function ProductList() {
    // Function handles the deletion of the product rows; however, not linked to DB just yet
    const [data,setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter(item=>item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'productName', headerName: 'Product name', width: 200 },
        { field: 'size', headerName: 'Size', width: 150 },
        { field: 'rrp', headerName: 'RRP', width: 120 },
        { field: 'status', headerName: 'Status', width: 150 },
        { 
            field: "action",
            headerName: "Action", 
            width: 150,
            renderCell: (params) =>{
                return(
                    <>
                    <Link to={"/products/"+params.row.id}>
                    <button className="productListEdit">Edit</button>
                    </Link>
                    <HighlightOff className="productListDelete" onClick={()=>handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
      ];

    return (
        <div>
            <StyledContainer>

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
