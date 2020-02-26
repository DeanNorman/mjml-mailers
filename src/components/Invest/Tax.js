import React from 'react';
import styled, { css } from 'styled-components';

import tax from '../../images/invest/tax.svg';


import { breakpoints as bp } from '../../styling/index';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   font-family: 'CircularStd';
   color: #4e4b6b;
   min-height: 300px;
   text-align: center;
   z-index: 1;   
`;

const Content = styled.div`
   display: flex;
   flex-direction: column;
   align-content: center;
   justify-content: center;
   padding: 0 50px;
   line-height: 20.74px;
   width: 320px;
   align-self: center;

   ${bp.lg`
      text-align: center;
      margin-top: 100px;
      width: 619px;
  
   `}

   h2 {
         line-height: 35.0px;
         font-size: 25px;
      }

   p {
      font-weight: 300;
      line-height: 20px;
      font-size: 14px;
      color: #69668e;
   }
`

const Column = styled.div`
   align-self:center;
   order: -1;

   ${bp.xs(css`
      order: ${props => props.left ? '-1' : '0'};
   `)}

   ${bp.sm(css`
      order: ${props => props.left ? '-1' : '0'};
   `)}


   ${bp.lg(css`
      order: 0;
      padding-left: ${props => props.left ? '50px' : '0'};
   `)}
`



const SignUpBtn = styled.a`
   background-color: #13c6b9;
   height: 45px;
   width: 100%;
   border-radius: 4px;
   justify-content: center;
   align-content: center;
   text-decoration: none;
   margin-bottom: 10px;

   p {
      font-family: 'CircularStd';
      font-weight: 300;
      font-size: 14px;
      margin: 0;
      color: #fff;
      align-self:center;
   }

   ${bp.xs`
      display: inline-flex;
      width: 212px;
   `}

${bp.md`
      display: inline-flex;
      width: 212px;
   `}

`


const Tax = () => {
   return (
      <Container>
         <Content>
            <Column>
            <img src={tax} alt="tax" />
              
            </Column>
            <Column >
            <h2>Tax or tax free.</h2>
            <p>With the launch of tax free savings, you can opt between taxed and tax free investments. We’ll also protect you from over contributing, so you can enjoy your tax freeness!</p>
            <SignUpBtn href="https://www.22seven.com/app/signup" target="_blank">
                  <p>Reach for your goals now</p>
               </SignUpBtn>
            </Column>
         </Content> 
      </Container> 
   )
}

export default Tax;