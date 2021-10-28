import React from "react";
import styled from "styled-components";

import Sidebar from '../components/Sidebar';
import DashboardHome from '../components/Dashboard/DashboardHome';

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
    return (
      <div>
       <StyledContent>
           
            {/* Sidebar */}

            <StyledSide>
              <Sidebar />
            </StyledSide>

            {/* Main Section */}

            <StyledMain>
                <DashboardHome/>
            </StyledMain>

       </StyledContent>
      </div>
    );
  };
  
export default Dashboard;