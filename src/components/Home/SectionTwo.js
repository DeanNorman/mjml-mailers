import React from 'react';
import styled from 'styled-components';

import personalisedBudget from '../../images/public-section-2---right.svg';

const Container = styled.div`
   display: flex;
   justify-content: center;
   font-family: 'CircularStd';
   text-align: right;
   color: #4e4b6b;
   height: 500px;
   padding-top: 100px;

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
   /* flex-wrap: wrap; */
   align-content: center;
   justify-content: center;
   height: 100%; 
   /* min-width: 1000px; */
`

const Column = styled.div`
align-self:center;
padding-right: ${props => props.right ? '50px' : '0'};
padding-left: ${props => props.left ? '50px' : '0'};
`


const SectionTwo = () => {
   return (
      <Container>
         <Content>
            <Column>
               <h2>Get a personalised budget,<br/>automatically.</h2>
               <p>It’s generated for you. And based on your own, actual<br />spending. See exactly how much you spend on what<br />each month. Know what you‘ve already spent and<br />have left to spend, and find more money</p>
            </Column>
            <Column left>
               <img src={personalisedBudget} alt="Personalised Budget" />
            </Column>
         </Content> 
      </Container> 
   )
}

export default SectionTwo;