import React from 'react';
import styled from 'styled-components'

import background from '../../images/invest/invest_hero_background.png'

import { breakpoints as bp } from '../../styling/index'

const Container = styled.div`
   display: flex;
   justify-content: center;
   font-family: 'CircularStd';
   background-color: #4e4b6b;
   color: #fff;
   min-height: 600px;
   background: url(${background}) no-repeat;
   background-position: center center;
   background-size: cover;
   margin-top: -1px;


   ${bp.sm`
     
   `}


   ${bp.md`
     
   `}

   ${bp.lg`
     min-height: 550px;
   
   `}

   
   ${bp.xl`
    min-height: 500px;
   
   `}

${bp.xl`
    min-height: 500px;
   `}

`

const Content = styled.div`
   display: flex;
   align-content: center;
   justify-content: flex-start;
   padding-left: 10px;

   ${bp.sm`
      padding-right: 60px;
   `}


`
const Column = styled.div`
   display: flex;
   flex-direction: column;
   align-self: center;
   width: 80%;

   ${bp.sm`
      width: 70%;
      text-align: left; 
   `}

   ${bp.xl`
      width: 70%;
      text-align: left; 
   `}

`
const Title = styled.h1`
   font-size: 30px;
`
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
      align-self: flex-start;
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
