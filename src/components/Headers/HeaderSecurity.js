import React from 'react';
import styled from 'styled-components'

import background from '../../images/security/background.png';

import { breakpoints as bp } from '../../styling/index'

const Container = styled.div`
   display: flex;
   justify-content: center;
   min-height: 360px;
   background: url(${background}) no-repeat center center;
   background-size: cover;
   background-color: rgb(255, 255, 255);
    background-position: center center;
    background-repeat: no-repeat;
    padding: 70px 30px 250px;
    background-size: cover;
    
   br {
      display: none;
      ${bp.sm`
         display: block;
      `}
   }
`

const Content = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-content: center;

   font-family: 'CircularStd';
   color: #4e4b6b;

   padding-left: 30px;
   padding-right: 30px;

   ${bp.sm`
      padding-right: 60px;
   `}
`

const Title = styled.h1`
    font-size: 32px;
    line-height: 40.32px;
    text-align: center;

    ${bp.sm`
      font-size: 50.0px;
      line-height: 54.045px;
    `}

   
    color: #4e4b6b;
    text-align: center;
    line-height: 56.04px;

`

const HeaderAbout = () => {
   return (
      <Container>
         <Content>
            <Title>We take security very<br/> seriously.</Title>
         </Content>
      </Container> 
   )
}

export default HeaderAbout;
