import React from 'react';
import styled from 'styled-components'

import background from '../../images/about/header.png';

import { breakpoints as bp } from '../../styling/index'

const Container = styled.div`
   display: flex;

   justify-content: center;
   font-family: 'CircularStd';
   color: #4e4b6b;
   min-height: 320px;
   background: url(${background}) no-repeat center center;
   background-size: cover;
   
`

const Content = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-content: center;
   padding-left: 30px;
   padding-right: 30px;

   ${bp.sm`
      padding-right: 60px;
   `}
`

const Title = styled.h1`
    font-size: 28px;
    line-height: 40.32px;
    text-align: center;

    ${bp.sm`
      font-size: 37.531px;
      line-height: 54.045px;
    `}


`
const Description = styled.p`
   font-weight: 300;
   font-size: 16px;
   text-align: center;

   ${bp.md`
      font-size: 20.0px;
   `}
`

const HeaderAbout = () => {
   return (
      <Container>
         <Content>
            <Title>A little bit about us.</Title>
            <Description>
               We built 22seven because we think there's a new solution to an old problem.
            </Description>
         </Content>
      </Container> 
   )
}

export default HeaderAbout;
