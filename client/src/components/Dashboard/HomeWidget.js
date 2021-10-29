import React from 'react';
import styled from 'styled-components';

import WidgetBig from './Widgets/WidgetBig';
import WidgetSmall from './Widgets/WidgetSmall';

const HomeContainer = styled.div`
    flex: 4;
`;

const HomeWidgetDisplay = styled.div`
    display: flex;
    margin: 20px;
`;

const HomeWidgetBig = styled.div`
    flex: 2;
    padding: 20px;
    margin-right: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);

`;

const HomeWidgetSmall = styled.div`
    flex: 1;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);

`;


function HomeWidget() {
    return (
        <div>
            <HomeContainer>
                <HomeWidgetDisplay>
                    
                    <HomeWidgetBig>
                        <WidgetBig />
                    </HomeWidgetBig>

                    <HomeWidgetSmall>
                        <WidgetSmall />
                    </HomeWidgetSmall>


                </HomeWidgetDisplay>
            </HomeContainer>
        </div>
    )
}

export default HomeWidget
