import React from 'react';
import styled from 'styled-components';



import investOne from '../../images/invest/investOne.png';
import investTwo from '../../images/invest/investTwo.png';
import investThree from '../../images/invest/investThree.png';
import investFour from '../../images/invest/investFour.png';

import { breakpoints as bp } from '../../styling/index';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-content: center;
   font-family: 'CircularStd';
   color: #4e4b6b;
   min-height: 300px;
   text-align: center;
   z-index: 0;

   p {
      text-align: center;
      font-weight: 300;
      max-width: 500px;
      margin: 0 auto;
      line-height: 20px;
      font-size: 14px;
      color: #69668e;
   }
`

const Content = styled.div`
   display: flex;
   flex-direction: column;
   align-content: center;
   justify-content: center;
   height: 100%; 
   text-align: center;
   line-height: 20.74px;
   width: 350px;
   align-self: center;

   ${bp.md`
      width: 400px;
   `} 

   ${bp.lg`
      width: 1000px;
      text-align: left;
      flex-direction: row;
   `}

   h1 {
      text-align: center;
      font-size: 30px;
      line-height: 40px;
   }

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

   ${bp.sm`
      margin: 20px;
   `}

   
   img {
      margin: 8px 0;
      width: 100%;
      max-width: 217px;

      ${bp.lg`
         width: 50%;
      `}

${bp.xl`
         width: auto;
      `}
   }



`

const Funds = () => {
   return (
      <Container>
         <h1>A fund for<br /> every goal.</h1>
         <p>With the launch of our Money Market fund, we offer the right tools for every goal. Whether you’re saving for something a few months away, or twenty years from now.</p>
         <Content>
            <Column >
               <a href="/">
                  <img src={investOne} alt="22seven testimonial" />
               </a>            
               <a href="/">
                  <img src={investTwo} alt="22seven testimonial" />
               </a>
               <a href="/">
                  <img src={investThree} alt="22seven testimonial" />
               </a>
               <a href="/">
                  <img src={investFour} alt="22seven testimonial" />
               </a>
            </Column>
         </Content>
      </Container> 
   )
}

export default Funds;