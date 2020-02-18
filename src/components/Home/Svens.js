import React from 'react';
import styled from 'styled-components';
import svens from '../../images/svens.png';

import email from '../../images/email.svg'
import phone from '../../images/phone.svg'

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   font-family: 'CircularStd';
   color: #4e4b6b;
   text-align: center;
   padding-top:100px;

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
    height: 118px;
    max-width: 600px;
    align-self: center;

`
const Contact = styled.div`
display: flex;
justify-content: space-evenly;

`

const Svens = () => {
   return (
      <Container>
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