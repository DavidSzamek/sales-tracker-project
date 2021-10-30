import React, { Component } from "react";
import styled from "styled-components";

import Sidebar from '../components/Sidebar';
import DashboardHome from '../components/Dashboard/DashboardHome';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

import ProductList from "../components/Dashboard/ProductList";
import ProductEdit from "../components/Dashboard/ProductEdit";
import NewProduct from "../components/Dashboard/NewProduct";

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

const StyledMain = styled.div`
  flex: 4;
  
`;

const Dashboard = () => {

  const { path, url } = useRouteMatch();

    return (
      <Router>
       <StyledContent>
           
            {/* Sidebar */}

            <StyledSide>
              <Sidebar />
            </StyledSide>

            {/* Main Section */}

            <StyledMain>
                <Switch>
                  <Route exact path="/dashboard">
                   <DashboardHome/>
                  </Route>

                  <Route path="/dashboard/products">
                    <ProductList/>
                    </Route>

                  {/* <Route exact path={`${path}/products`} component={ProductList}/> */}
                  
                  <Route path="/products/:productId">
                    <ProductEdit/>
                  </Route>

                  <Route path="/products/newProducts">
                    <NewProduct/>
                  </Route>

                </Switch>

            </StyledMain>

       </StyledContent>
      </Router>
    );
  };
  
export default Dashboard;