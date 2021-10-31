import React from "react";
import styled from "styled-components";
import NewProduct from "./Dashboard/NewProduct";

import {
  LineStyle,
  Timeline,
  TrendingUp,
  ShoppingCart,
  CalendarToday,
  HourglassEmpty,
} from "@mui/icons-material";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

// const StyledContent = styled.div`
//   display: flex;
//   font-family: 'Raleway', sans-serif;
// `;

// const StyledSide = styled.div`
//   flex: 1;
//   height: calc(100vh - 70px);
//   background-color: #F5F5F5;
//   position: sticky;
//   top: 70px;
  
// `;

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
  
  .link {
    text-decoration: none;
    color: inherit;
  }

  a {
    text-decoration: none;
  } 

  &:hover {
    color: white;
    background-color: #4169E1;
  }
`;


const Sidebar = () => {
    return (
          <StyledSideWrapper>

            {/* Top Section */}
            <StyledSideMenu>

              <StyledSideTitle>
                Quick Menu
              </StyledSideTitle>
                
                <StyledSideList>

                  <StyledSideListItem>
                    <Link to="/dashboard" className="link">
                      <LineStyle />
                      Home
                      </Link>
                  </StyledSideListItem>

                  <StyledSideListItem>
                    <Link to="/dashboard/products" className="link">
                    <ShoppingCart />
                        Products
                    </Link>
                  </StyledSideListItem>

                  <StyledSideListItem>
                  <Link to="/dashboard/newProduct" className="link">
                    <Timeline />
                    Add Product
                  </Link>
                  </StyledSideListItem>

                </StyledSideList>

          </StyledSideMenu>

      </StyledSideWrapper>
    );
};

export default Sidebar;