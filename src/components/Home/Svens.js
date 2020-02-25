import React from 'react';
import styled from 'styled-components';
import svens from '../../images/svens.png';

import email from '../../images/email.svg'
import phone from '../../images/phone.svg'
import background from '../../images/homepageCurves/blobSix.svg';
import { breakpoints as bp } from '../../styling/index';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   font-family: 'CircularStd';
   color: #4e4b6b;
   font-weight: 300;
   text-align: center;
   padding-top:100px;
   z-index: 1;

`
const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;



p { 
   font-weight: 300;
}

a {
   color: #4e4b6b;
   display: inline-block;
   align-self: initial;
   text-decoration: underline;
}
`

const SvenTeam = styled.img`
    /* height: 118px; */
    max-width:300px;
    align-self: center;

    ${bp.sm`
      max-width: 500px;
    `}

`
const Contact = styled.div`
display: flex;
justify-content: space-evenly;
a {
   display: flex;
   font-size:15px;

   img { 
      padding-right: 10px;
   }
}
`

const Background = styled.div`
   top: 7333px;
    height: 1030px;
    width: 2399px;
    position: absolute;
    margin: 0;
    left: -2085px;
    transform: rotate(-2deg);
    z-index: -1;

   ${bp.xs`
       top: 7043px;
       left: -2080px;
   `}

   ${bp.sm`
       top: 6603px;
       left: calc(0.01% - 1900px);
   `}

    ${bp.md`
      top: 4089px;
      left: calc(0.01% - 1650px);
    `}

   ${bp.lg`
      top: 4089px;
      left: calc(0.01% - 1000px);
    `}
`

const Svens = () => {
   return (
      <Container>
         <Background>
            <img src={background} alt="22seven Service Providers"/>
         </Background>
         <Content>
            <SvenTeam src={svens} alt="Svens"/>
            <h2>Get really good support from real, live people.</h2>
            <p>The Svens, our support team, are available from 8am to 8pm.</p>
            <Contact>
             <a href="mailto:thzesvens@22seven.com"><img src={email} />thesvens@22sven.com</a>
             <a href="tel:+27875504331"><img src={phone} />+27 87 8550 4331</a>
            </Contact>
         </Content>
      </Container>
   )
}

export default Svens;