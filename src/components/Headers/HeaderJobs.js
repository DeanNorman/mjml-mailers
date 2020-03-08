import React from 'react';
import styled from 'styled-components'

import background from '../../images/jobs/background.png';

import { breakpoints as bp } from '../../styling/index'

const Container = styled.div`
   display: flex;
   justify-content: center;
   min-height: 288px;
   background: url(${background}) no-repeat center center;
   background-color: #f1f2f3;
   background-size: cover;
    background-repeat: no-repeat;
    padding: 70px 30px 250px;
    
   br {
      display: none;
      ${bp.md`
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
   font-family: "CircularStd", Helvetica, Arial, serif;
    font-size: 32px;
    line-height: 35px;
    text-align: center;

    ${bp.sm`
      font-size: 50.0px;
      line-height: 54.045px;
    `}

   
    color: #4e4b6b;

`

const HeaderJobs = () => {
   return (
      <Container>
         <Content>
            <Title>Nobody's job here<br/> is just a job.</Title>
         </Content>
      </Container> 
   )
}

export default HeaderJobs;
