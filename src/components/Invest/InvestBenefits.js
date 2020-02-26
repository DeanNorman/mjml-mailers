import React from 'react';
import styled from 'styled-components';

import investBenefitOne from '../../images/invest/investBenefitOne.svg';
import investBenefitTwo from '../../images/invest/investBenefitTwo.svg';
import investBenefitThree from '../../images/invest/investBenefitThree.svg';

import { breakpoints as bp } from '../../styling/index';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   font-family: 'CircularStd';
   color: #4e4b6b;
   text-align: center;
   z-index: 1;


`
const Content = styled.div`
   display:flex;
   flex-direction: ${props => props.benefit ? 'row' : 'column'};
   justify-content: center;
   padding: 20px 0;
   flex-wrap:wrap;
   transition: all 0.2s ease-in-out;
   p {
      font-weight: 300;
      margin-bottom: 10px;
      font-size: 15px;
    }

`

const Benefit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 230px;
  margin: 10px 30px;

  p { 
      line-height: 23px;
      color: #69668e;
      font-size: 14px;
   }
`

const Circle = styled.div`
   display: flex;
   justify-content: center;
  
   width: 144px;
   height: 145px;
   border-radius: 1000px; 
   margin: 0.5em;
   
   margin-bottom: 20px;
`


const InvestBenefits = () => {
   return (
   <Container>
      <Content benefit>
         <Benefit>
            <Circle>
                  <img src={investBenefitOne} alt="eye"/>
            </Circle>     
            <p><strong>No brokers. No extra fees.</strong></p>       
            <p>We offer low cost index tracker unit trust funds. And don’t charge an advice fee. So you’re able to make the most of your money’s growth.</p>
         </Benefit>

         <Benefit>
            <Circle>
                  <img src={investBenefitTwo} alt="finger click"/>
            </Circle> 
               <p><strong>Paperless. And done in minutes.</strong></p>
               <p>No complicated forms. No queues. No calls. And no fuss. You’ll be done in minutes. And when you need to make changes in future that’s all on the app too.</p>
         </Benefit>

         <Benefit>
            <Circle>
                  <img src={investBenefitThree} alt="22seven goggles"/> 
            </Circle>
               <p><strong>Local or international.</strong></p>
               <p>Our funds represent the top listed companies around the world.</p>
         </Benefit> 

      </Content> 
   </Container> 
   )
}

export default InvestBenefits;