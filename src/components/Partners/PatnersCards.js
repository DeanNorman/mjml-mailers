import React from 'react'
import styled from 'styled-components'
import { breakpoints as bp } from '../../styling/index'

import linkArrow from '../../images/linkArrow.png';
import uber from '../../images/partners/uber.png'
import taxTim from '../../images/partners/taxtim.png'

const Container = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;

`
const SubHeader = styled.div`
   font-family: 'CircularStd';
   color: #4e4b6b;
   display:flex;
   justify-content: center;
   flex-direction: column;
   text-align: center;
   line-height: 20.74px;

   h2 {
      font-family: "CircularStd", Helvetica, Arial, serif;
      font-size: 30px;
      line-height: 35px;
      margin-bottom: 15px;
   }

   p {
      font-family: "CircularStd-Book", Helvetica, Arial, serif;
      font-size: 14px;
      line-height: 20px;
      max-width: 330px;
      
      color: #69668e;

      ${bp.sm`
         max-width: 530px;
      `}
   }
`
const Content = styled.div`
   display: flex;
   flex-direction: column;
   padding: 0 15px;
`


const Card = styled.div`
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   margin: 20px 0;
   background: #f1f2f3;
   padding: 0 20px;
`

const Column = styled.div`
   display: flex;
   flex-direction: column;
   padding: 40px 0;

   h3 {
      font-family: "CircularStd-Bold", Helvetica, Arial, serif;
      font-size: 30px;
      line-height: 35px;
   }

   p {
      font-family: "CircularStd-Book", Helvetica, Arial, serif;
      font-size: 14.0px;
      line-height: 22px;
   }

   a {
      font-family: "CircularStd-Medium", Helvetica, Arial, serif;
      text-decoration: none;
      color: #69668e;
      font-size: 16px;
   }

   a:hover {
      transform: translate(5px, 0);
      transition: all 0.2s ease-in-out;
   }

  

   a {
      font-family: "CircularStd-Medium", Helvetica, Arial, serif;
      text-decoration: none;
      color: #69668e;
      font-size: 16px;
   }

   a:hover {
      padding-left: 5px;
      transition: all 0.2s ease-in-out;
   }
`

const LogoContainer = styled.div`
   display: flex;
   width: 100%;

   img {
      width:120px;
      height: 120px;
   }
`

const Arrow = styled.img`
    height: 9px;
    width: 5px;
    margin-left: 10px;
`;

const PartnersCards = () => {
   return (
      <Container>
         <SubHeader>
            <h2>Our Partners</h2>
            <p>That’s why we’ve partnered with these guys to help people show their money who’s boss:</p>
         </SubHeader>    
         <Content>    
            <Card>
               <LogoContainer>
                  <img src={uber} alt="uber"/>
               </LogoContainer>
               <Column>
                  <h2>Uber</h2>
                  <p>We’ve team up with Uber to help their drivers better navigate the financial world. Using custom-built nudges that feature insights uniquely relevant to them, and workshops designed around their specific cash flow, Uber drivers will now be more confident with their money and have better financial know-how.</p>

                  <a href="https://www.22seven.com/app/signup" target="_blank">
                     Signup to 22seven
                     <Arrow src={linkArrow} alt="link" />
                  </a>
               </Column>
            </Card>
            <Card>
               <LogoContainer>
                  <img src={taxTim} alt="taxtim"/>
               </LogoContainer>
               <Column>
                  <h2>TaxTim</h2>
                  <p>With TaxTim, completing your tax return is as easy as answering a few questions. And, as a 22seven customer, you get a 25% discount off the already affordable price.</p> 
                  <p>But first, here are a few of our favourite reasons to use TaxTim:</p>
                  <p><strong>You’ll have a new tax buddy.</strong>
                     He’ll guide you through your income and expenses with ease by asking you simple questions in plain English.
                  </p>
                  <p><strong>Find new deductions.</strong>
                     Deductions help reduce your overall tax liability, which means you’re more likely to receive a refund. TaxTim will make sure you claim for all deductions available to you based on your personal tax profile.
                  </p>

                  <p><strong>Automatically file returns.</strong>
                     completed return is automatically filed at the touch of a button. No more blue blocked forms for you!
                  </p>

                  <a href="https://www.taxtim.com/za/?193" target="_blank">
                     How to rock your tax return
                     <Arrow src={linkArrow} alt="link" />
                  </a>
               </Column>
            </Card>
         </Content>         
      </Container>
   )
}

export default PartnersCards;