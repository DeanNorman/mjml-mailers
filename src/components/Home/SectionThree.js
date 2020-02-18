import React from 'react';
import styled from 'styled-components';

import temp from '../../images/sectionOne.svg';
const Container = styled.div`
   display: flex;
   justify-content: center;
   font-family: 'CircularStd';
   color: #4e4b6b;
   height: 300px;
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
   align-content: center;
   justify-content: center;
   height: 100%; 
   min-width: 1000px;
`

const Column = styled.div`
align-self:center;
padding-right: ${props => props.right ? '50px' : '0'};
padding-left: ${props => props.left ? '10px' : '0'};
`

const SectionThree = () => {
   return (
      <Container>
         <Content>
         <Column right>
            <img src={temp} alt="Nudges"/>
         </Column>
         <Column>
            <h2>Find relevant<br />insights, regularly.</h2>
            <p>Nudges are hints and observations about your<br />money. See things you didn’t know or hadn’t<br />considered, and use your money better.</p>
         </Column>
         </Content>
      </Container> 
   )
}

export default SectionThree;










