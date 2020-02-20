import React from 'react';
import styled from 'styled-components';
import InvestPromo from './InvestPromo';

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

const SectionFour = () => {
   return (
      <>
      <Container>
         <Content>
         <Column>
            <h2>Invest in your goals and<br />reach them sooner.</h2>
            <p>Putting money towards your future can be a pain. But<br />the right planning can change that. Set, track and<br /> invest in your life goals from as little as R350.</p>
         </Column>
         <Column left>
            <img src={personalisedBudget} alt="" />
            </Column>
         </Content>
       
      </Container> 
        <InvestPromo />
        </>
   )
}

export default SectionFour;