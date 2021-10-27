import React from "react";
import styled from "styled-components";
import BgImg from '../assets/hero2.png';


import { Container } from "../components/Container";
import { H2 } from '../components/Text';

const StyledImage = styled.img`
  width: 50vw;
  margin-right: 5%;
  margin-left: 5%;
`;

// const StyledSection = styled.section`
//     background-image: url(${BkImg});
//     display: block;
//     background-repeat: no-repeat;
//     background-size: contain;
// `;

const StyledContent = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: row;
  font-family: 'Raleway', sans-serif;
  height: calc(100vh - 70px);
`;

const StyledLeft = styled.div`
  margin-left: 5%;
  width: 40vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const StyledTitle = styled.span`
  font-size: 45px;
  color: black;
  text-align: center;
  font-weight: 700;
`;

const StyledDesc = styled.span`

  font-size: 20px;
  color: black;
  line-height: 30px;
  margin-top: 58px;
  text-align: justify;
`;


const StyledButton = styled.a`
  align-content; center;
  border-radius: 18px;
  margin-top: 58px;
  margin-left: 60px;
  margin-right: 60px;
  // width: 420px;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(90deg, #000080, #4169E1);
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
`;

const Home = () => {
  return (
   
    <div>
      <StyledContent>

        <StyledLeft>

          <StyledTitle>
              Forecasting and Data Analytics for the FMCG Industry!
          </StyledTitle>

          <StyledDesc>
              Gemini’s cutting edge forecasting tool allows users to capture their historical sales pipeline and quickly analyse the data over any period of time. Gemini visualises the data, so that it’s easy and intuitive to understand and, will help identify where you have gaps, roadblocks, and potential wins within the FMCG Industry. 
          </StyledDesc>
       
          <StyledButton>
              <span>
                Get started today!
              </span>
          </StyledButton>
          
        </StyledLeft>

        <StyledImage src={BgImg} />

      </StyledContent>    
    </div>
  );
};

export default Home;
