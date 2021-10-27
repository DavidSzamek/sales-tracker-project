import React from "react";
import styled from "styled-components";

import {
  LineStyle,
  Timeline,
  TrendingUp,
  ShoppingCart,
  CalendarToday,
  HourglassEmpty,
} from "@mui/icons-material";

const StyledContent = styled.div`
  display: flex;
  font-family: 'Raleway', sans-serif;
`;

const StyledSide = styled.div`
  flex: 1;
  height: calc(100vh - 70px);
  background-color: #F5F5F5;
  position: sticky;
  top: 70px;
  
`;

const StyledSideWrapper = styled.div`
  padding: 20px;
  color: #555;
`;

const StyledSideMenu = styled.div`
  margin-bottom: 30px;
`;

const StyledSideTitle = styled.h3`
  font-size: 1.8rem;
  color: black;
  margin-bottom: 5px;
`;

const StyledSideList = styled.ul`
  font-size: 1.6rem;
  list-style: none;
  padding: 5px;
  
`;

const StyledSideListItem = styled.li`
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  

  a {
    
  } 

  &:hover {
    color: white;
    background-color: #4169E1;
  }
`;




const StyledMain = styled.div`
  flex: 4;
  
`;

const Dashboard = () => {
    return (
      <div>
       <StyledContent>
           
            {/* Sidebar */}
            <StyledSide>
              <StyledSideWrapper>

                {/* Top Section */}
                <StyledSideMenu>

                  <StyledSideTitle>
                    Dashboard
                  </StyledSideTitle>
                    
                    <StyledSideList>

                      <StyledSideListItem>
                        <LineStyle />
                        Home
                      </StyledSideListItem>

                      <StyledSideListItem>
                        <Timeline />
                        Analytics
                      </StyledSideListItem>

                      <StyledSideListItem>
                        <TrendingUp />
                        Sales
                      </StyledSideListItem>

                    </StyledSideList>

                </StyledSideMenu>

                {/* Middle Section */}
                <StyledSideMenu>

                  <StyledSideTitle>
                    Quick Menu
                  </StyledSideTitle>
                    
                    <StyledSideList>

                      <StyledSideListItem>
                        <ShoppingCart />
                        Products
                      </StyledSideListItem>

                      <StyledSideListItem>
                        <CalendarToday />
                        Weeks
                      </StyledSideListItem>

                      <StyledSideListItem>
                        <HourglassEmpty />
                        Data
                      </StyledSideListItem>

                      <StyledSideListItem>
                        <LineStyle />
                        Home
                      </StyledSideListItem>

                    </StyledSideList>

                 </StyledSideMenu>

                 {/* Bottom Section */}
                <StyledSideMenu>

                  <StyledSideTitle>
                    Settings
                  </StyledSideTitle>
                    
                    <StyledSideList>

                      <StyledSideListItem>
                        <Timeline />
                        Add Product
                      </StyledSideListItem>

                      <StyledSideListItem>
                        <TrendingUp />
                        Add Week
                      </StyledSideListItem>

                    </StyledSideList>

                  </StyledSideMenu>

              </StyledSideWrapper>
            </StyledSide>

            
             
            {/* Main Section */}

            <StyledMain>
                Hello World
            </StyledMain>

       </StyledContent>
      </div>
    );
  };
  
export default Dashboard;