import React from 'react'
import styled from 'styled-components';
import BackImg from '../assets/background.png';

import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../gql/queries';

const StyledBackground = styled.div`
    // background-image: url(${BackImg});
    height: calc(100vh - 70px);

`;

const StyledContainer = styled.div`
    font-family: 'Raleway', sans-serif;
    width: 100%;
    display: flex;
    justify-content: center;
    
`;

const WelcomeContainer = styled.div`
    margin: 20px;
    margin-top: 10%;
    padding: 20px;
    height: 150px;
    border-radius: 5px;
    background-color: #4169E1;
    color: white;
    border: 1px black solid;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
   
`;

const WelcomeText = styled.div`

    h1 { 
        font-weight: 600;
        margin-bottom: 10px;
    }

    h2 {

    }
`;

// const StyledImage = styled.img`
//     background-repeat: repeat-y;
//     border: 1px black solid;
// `;

function Welcome() {

const { data } = useQuery(QUERY_USER);
if ( data ) console.log(data);

return (
    <StyledBackground>
       <StyledContainer>
           {/* <StyledImage src={BackImg} /> */}
           <WelcomeContainer>
           
                <WelcomeText>
               <h1>Welcome to Gemini Forecasting, (user)</h1>

               <h2> Click on your dashboard to get started!</h2>
               </WelcomeText>
           </WelcomeContainer>

       </StyledContainer>
    </StyledBackground>
 )
}

export default Welcome
