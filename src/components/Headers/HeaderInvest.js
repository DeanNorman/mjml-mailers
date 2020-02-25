import React from 'react';
import styled from 'styled-components'

import background from '../../images/invest/header.png'

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
   margin-top: -4px;


   ${bp.sm`
      min-height: 600px;
      background-position: initial;
   `}
`

const Content = styled.div`
   display: flex;
   align-content: center;
   justify-content: flex-start;
   padding-left: 10px;
`
const Column = styled.div`
   align-self: center;

   ${bp.sm`
      br {
         display:none;
      }
   `}
`
const Title = styled.h1``
const Description = styled.p``

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
      font-family: 'CircularStd';
      font-weight: 300;
      font-size: 17px;
      margin: 0;
      color: #fff;
      align-self:center;
   }

   ${bp.md`
      display: inline-flex;
      width: 176px;
   `}
`

const HeaderInvest = () => {
   return (
      <Container>
         <Content>
             <Column>
               <Title>Put your money where your <br />dream is.</Title>
               <Description>
                  Manage your money more easily and invest
                  in your goals with the free 22seven app.
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
