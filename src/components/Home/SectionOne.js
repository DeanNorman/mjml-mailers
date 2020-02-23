import React from 'react';
import styled, { css } from 'styled-components';

import ServiceProviders from '../../images/sectionOne.svg';

import { breakpoints as bp } from '../../styling/index';

const Container = styled.div`
   display: flex;
   justify-content: center;
   font-family: 'CircularStd';
   color: #4e4b6b;
   height: 300px;
   padding-top: 100px;
   text-align: center;

   ${bp.sm`
      text-align: left;
   `}

   a {
      text-decoration: none;
      color: #4e4b6b;
   }

   p {
      font-weight: 300;
      line-height: 20px;
      font-size: 16px;
   }
`;

const Content = styled.div`
   display: flex;
   flex-direction: column;
   align-content: center;
   justify-content: center;
   height: 100%; 

   ${bp.sm`
      flex-direction: row;
   `}
`

const Column = styled.div`
align-self:center;
padding-right: ${props => props.right ? '50px' : '0'};
padding-left: ${props => props.left ? '10px' : '0'};


/* ${props => !props.right ? ''
      : css`
         order: 1;
      `
   } */

`

const SectionOne = () => {
   return (
      <Container>
         <Content>
            <Column right>
               <img src={ServiceProviders} alt="22seven Service Providers"/>
            </Column>
            <Column>
               <h2>See all your money<br/>in one place.</h2>
               <p>All your accounts. All your transactions. All<br/>together. Link bank accounts, credit and store<br /> cards, investments, loans and rewards.</p>
               <a href="/">100+ supported institutions ></a>
            </Column>
         </Content>
      </Container> 
   )
}

export default SectionOne;