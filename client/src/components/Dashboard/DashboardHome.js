import React from 'react'
import styled from "styled-components";

import Featured from './Featured';
import Chart from './Chart';
import {testData} from '../../testData';
import HomeWidget from './HomeWidget';


function DashboardHome() {
    return (
        <div>
            <Featured />
            <Chart data={testData} title="Sales Analytics" grid dataKey="Units"/>
            <HomeWidget/>
        </div>
    )
}

export default DashboardHome;
