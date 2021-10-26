import React from "react";
import styled from "styled-components";

const StyledContent = styled.div`
  display: flex;
  font-family: 'Raleway', sans-serif;
`;

const StyledSide = styled.div`
  flex: 1;
  font-size: 50px;
`;

const StyledSideWrapper = styled.div`
  
`;

const StyledSideMenu = styled.div`
  
`;

const StyledSideTitle = styled.h3`
  
`;

const StyledSideList = styled.ul`
  
`;

const StyledSideListItem = styled.li`
  
`;


const StyledMain = styled.div`
  flex: 4;
  background-color: blue;
`;

const Dashboard = () => {
    return (
      <div>
       <StyledContent>

            <StyledSide>
                Your Dashboard
            </StyledSide>

            <StyledMain>
                Hello World
            </StyledMain>

       </StyledContent>
      </div>
    );
  };
  
export default Dashboard;