import React from 'react';
import styled from 'styled-components';


import phoneBackground from '../../images/invest/phoneBackground.svg';
import sectionOneAnimation from '../../images/invest/sectionOneAnimation.gif';
import background from '../../images/homepageCurves/blobFive.png';
import tweetOne from '../../images/invest/tweetOne.svg';
import tweetTwo from '../../images/invest/tweetTwo.svg';
import tweetThree from '../../images/invest/tweetThree.svg';
import tweetFour from '../../images/invest/tweetFour.svg';

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
      width: 900px;
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

   img {
      box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.17);
      margin: 8px 0;
      width: 100%;
   }

   ${bp.sm`

margin: 20px;
`}

`

const Background = styled.div`
   background-color: rgba(255,255,255,0.0);
   /* top: 5807px; */
   display: none;
   top: 5807px;
   height: 1109px;
   width: 2050px;
   position: absolute;
   margin: 0;
   left: calc(-2.73% - 1925px);
   transform: rotate(3deg);
   z-index: -1;

   ${bp.md`
      display: block;
      top: 3368px;  
      left: calc(-2.73% - 1025px);
   `}

   ${bp.md`
      display: block;
      top: 3368px;  
      left: calc(-2.73% - 1025px);
   `}
`

const Twitter = () => {
   return (
      <Container>
         <Background>
            <img src={background} alt="22seven Service Providers"/>
         </Background>
         <h1>But don&apos;t take<br /> our word for it.</h1>
         <Content>
            <Column >
               <img src={tweetOne} alt="22seven testimonial" />
               <img src={tweetThree} alt="22seven testimonial" />
            </Column>
            <Column>
            <img src={tweetTwo} alt="22seven testimonial" />
            <img src={tweetFour} alt="22seven testimonial" />
            </Column>
         </Content>
      </Container> 
   )
}

export default Twitter;