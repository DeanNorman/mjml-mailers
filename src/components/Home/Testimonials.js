import React from 'react'
import styled from 'styled-components';

import yellowQuote from '../../images/yellowQuote.svg'
import yellowStars from '../../images/yellowStars.svg'

import greenQuote from '../../images/greenQuote.svg'
import greenStars from '../../images/greenStars.svg'

import redQuote from '../../images/redQuote.svg'
import redStars from '../../images/redStars.svg'

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-content: center;
   font-family: 'CircularStd';
   color: #4e4b6b;
justify-content: space-evenly;
align-content: space-between;
`

const Content = styled.div`
display: flex;
/* max-width: 885px; */
  
justify-content: space-evenly;
align-items: flex-start;
`;

const Title = styled.h2`
 display: flex;
 justify-content: center;
 align-content: center;
 padding-top: 20px;
`
const Card = styled.div`
display: flex;
flex-direction: column;
height: 100%;

 max-width: 250px;
 text-align: center;
 box-shadow: 0px 0px 36px 9px rgba(0,0,0,0.10);
 border-radius: 5px;
 padding :20px;
 min-height: 210px;
 justify-content: space-evenly;
 P { 
font-size:11px;
color: #69668e;
line-height: 18px;
 }
`;

const Quote = styled.img`
padding: 10px;
`

const Testimonials = () => {
   return (
      <>
      <Title>
         Our customers say the nicest things.
      </Title>
      <Container>
      <Content>
         <Card>
               <Quote src={yellowQuote} alt="quote"/>
               <p>I love it, it helped me detect when my insurance charged me twice</p>
               <p>It’s my 3rd day using this app and I love it already; an insurance company deducted money twice from my account; I was not aware of it and the app could pick that up for me so I was able to get my money and the app could pick that up for me so I was to get my money back; thank you very much.</p>
               <p>Letshego, Dec 2017</p>
               <img src={yellowStars} alt="yellow"/>
          </Card>

            <Card>
            <Quote src={greenQuote} alt="quote" />
               <p>Thanks to 22seven I’m debt free</p>
               <p>Yay!! When I made a decision 6 months ago to turn my financial life around, I started doing research and came across 22seven. You’ve certainly made sticking to that decision a lot easier. Today I’m debt free. From a debt of R40 000 6 months ago… may you keep nudging me as I move from debt to building an emergency fund and eventually growing my wealth through savings and investments.</p>
               <p>Thandekile, Jan 2018</p>
               <img src={greenStars} alt="green atRA"/>
            </Card>

            <Card>
             <Quote src={redQuote} alt="quote"/> 
               <p>The best app I have used in 2018</p>
               <p>This is by far the best app I have used in 2018. Why did it take me so long to get it?!
                  It helps me keep track of all my spending- to the cent. I am more aware of my spending habits as all my accounts are linked to the app. If you need budgeting tools and a reality check about your spending, this is the best app for you. If you have a goal you are saving towards, this is for you - as the app tells you how much you need to save per month to reach your goal. It’s WONDERFULL!!!!!</p>
               <p>Manileng, Dec 2018</p>
               <img src={redStars} alt="green atRA"/>
            </Card>
      </Content>
      </Container>
      </>
   )
}

export default Testimonials;