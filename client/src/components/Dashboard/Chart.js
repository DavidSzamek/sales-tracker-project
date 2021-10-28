import React from 'react'
import styled from "styled-components";
import { 
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer 
    } from 'recharts';



const StyledChart = styled.div`
    margin: 20px;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
`;

const ChartTitle = styled.h3`
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 700;
`;

function Chart({title, data, dataKey, grid}) {

    return (
        <div>
            <StyledChart>
                <ChartTitle>
                    {title}
                </ChartTitle>

                <ResponsiveContainer width="100%" aspect={4 / 1}>
                    <LineChart data={data}>
                        <XAxis dataKey="week" stroke="#4169E1"/>
                        <Line type="monotone" dataKey={dataKey} stroke="#4169E1"/>
                        <Tooltip />
                        { grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/> }
                    </LineChart>
                </ResponsiveContainer>

            </StyledChart>
        </div>
    )
}

export default Chart
