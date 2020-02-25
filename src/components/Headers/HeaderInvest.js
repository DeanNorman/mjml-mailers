import React from 'react';
import styled from 'styled-components'

import background from '../../images/invest/Header.png'

import { breakpoints as bp } from '../../styling/index'

const Container = styled.div`
   display: flex;
   justify-content: center;
   font-family: 'CircularStd';
   background-color: #4e4b6b;
   color: #fff;
   min-height: 600px;
   background: url(${background}) no-repeat;
   background-position: center;
   background-size: cover;
   margin-top: -1px;


   ${bp.sm`
      background-position: initial;
   `}


   ${bp.md`
      background-position-x: -700px;
   `}

   ${bp.lg`
     min-height: 550px;
     background-position-x: -450px;
   `}

   
   ${bp.xl`
   min-height: 500px;
    background-position-x: 0px;
   `}

`

const Content = styled.div`
   display: flex;
   align-content: center;
   justify-content: flex-start;
   padding-left: 10px;

   ${bp.sm`
      
      justify-content: center;
   `}
`
const Column = styled.div`
   display: flex;
   flex-direction: column;
   align-self: center;
   width: 80%;

   ${bp.sm`
      width: 70%;
      text-align: center; 
   `}
`
const Title = styled.h1``
const Description = styled.p`
   font-weight: 300;
`

const SignUpBtn = styled.a`
   display: flex;
   background-color: #13c6b9;
   height: 45px;
   width: 176px;
   border-radius: 4px;
   justify-content: center;
   align-content: center;
   text-decoration: none;
   margin-bottom: 10px;

   p {
      font-weight: 300;
      font-size: 17px;
      margin: 0;
      color: #fff;
      align-self:center;
   }

   ${bp.sm`
      max-width: 157px;
      text-align: center; 
      align-self: center;
   `}
`

const HeaderInvest = () => {
   return (
      <Container>
         <Content>
             <Column>
               <Title>Put your money where your dream is.</Title>
               <Description>
                  Invest in your goals and start living.
               </Description>
               <SignUpBtn href="https://www.22seven.com/app/signup" target="_blank">
               <p>Invest now.</p>
            </SignUpBtn>
            </Column> 
         </Content>
      </Container> 
   )
}

export default HeaderInvest;
