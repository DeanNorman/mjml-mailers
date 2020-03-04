import React from 'react';
import styled, { css } from 'styled-components'
import { Link } from "gatsby"
import { breakpoints as bp } from '../../styling/index'

import linkArrow from '../../images/legal/arrow.png'

const baseFontStyles = css`
   font-family: 'CircularStd';
   color: #69668e;
`
const baseLinkStyles = css`
   text-decoration: underline;
   color: #69668e;
   font-size: 13px;

   &:hover {
      transform: translate(5px, 0);
      transition: all 0.2s ease-in-out;
   }
`

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-top: 100px;
`

const Content = styled.div`
   ${baseFontStyles}
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-content: center;
   background: #f1f2f3;
   padding: 30px;
   margin-top: 15px;
   width: 90%;
   p {
      font-size: 14.0px;
      line-height: 22.0px;
      font-weight: 300;
   }

   li {
      margin: 0;
      font-weight: 400;
      list-style: none;

      p{
         margin-bottom:10px;
      }
   }

   ${bp.md`
      width: 70%;
      padding: 50px;
   `}
`

const TitleContent = styled.div`
      font-family: 'CircularStd';
`

const Title = styled.h2`
      font-family: 'CircularStd';
      color: #4e4b6b;
      text-align: center;
      margin-bottom:10px;
`
const SubTitle = styled.p`
   font-size: 14.0px;
    color: rgba(105, 102, 142, 1.0);
    text-align: center;
    line-height: 20.74px;
    font-weight: 300;
`

const ContentTitle = styled.p`
   font-family: "CircularStd-Bold", Helvetica, Arial, serif;
   font-weight: 600 !important;
   margin-bottom: 10px;
`

const Arrow = styled.img`
       height: 7px;
    width: 4px;
    margin-left: 5px;
`
const InternalLink = styled(Link)`
   ${baseLinkStyles}
`
const ExternalLink = styled.a`
   ${baseLinkStyles}
`

const TermsContent = () => {
   return (
      <Container>
         <TitleContent>
            <Title>Terms of Service</Title>
            <SubTitle>Version 2.2, 1 September 2014</SubTitle>
         </TitleContent>
         <Content>
         
         <ContentTitle>1. You accept these terms.</ContentTitle>
         <p>
            When you access the website at www.22seven.com (“the Website”) or the 22seven mobile phone or tablet application (“the Mobile Applications”) (collectively, “the Service Channels”) or use any of the features and functionalities available through these Service Channels, you enter into an agreement with 22seven Digital (Pty) Ltd (Reg No. 2010/011767/07), trading as 22seven (“we”, “us”, “our”, “22seven”) on the terms and conditions set out in these Terms of Service and the Privacy Policy (collectively the “Terms”).
         </p>
         <ContentTitle>2. The Service that we provide.</ContentTitle>
         <p>
            <ul>
               <li>
                  <p>
                     2.1 The service 22seven provides is a personal information management service that allows you to consolidate, visualise and analyse your financial and other related information to help you manage your money (“the Service”).
               </p></li>
               <li><p>
                  2.2 The Service does not include any tax, legal or financial advice.
               </p></li>
            </ul>
         </p>

         <ContentTitle>3. We will let you know if the Terms change.</ContentTitle>
         <p>Each time you access a Service Channel, you agree to be bound by the Terms. We can change the Terms at any time and will publish the amended Terms (“the New Terms”) on the Service Channels. We will alert you to the fact that the Terms have changed and give you an opportunity to review the New Terms. If you don’t agree to the New Terms, you can terminate your use of the Service by following the online process provided for this purpose.</p>

         <ContentTitle>4. We will keep your personal information private.</ContentTitle>
         <p>We will protect any personal information we receive when you use the Service Channels and the Service and only use it as set out in our Privacy Policy.</p>
         <InternalLink to="/legal/privacy/">
               Read our Privacy Policy
               <Arrow src={linkArrow} alt="link" />
         </InternalLink><br/>

         <ContentTitle>5. You must register to use the Service.</ContentTitle>
         <p>
            <ul>
               <li><p>
               5.1 We advertise the Service on the Service Channels as an invitation to you to register to use the Service.
               </p></li>
               <li><p>
                  5.2 To complete the registration process you must fill in your name, surname, email address and a password (“Registration Information”) on the relevant page of the Service Channel.
               </p></li>
            </ul>
         </p>

         <ContentTitle>6. Fees and payment.</ContentTitle>
         <p>
            <ul>
               <li><p>6.1 Use of 22seven is free from 1 September 2014.
               </p></li>
               <li><p>6.2 We may change the Subscription Fee but will always notify you before we do. If you don’t accept the revised Subscription Fee, you can terminate your subscription to the Service by closing your account. Your subscription to the Service will terminate at the end of the calendar month during which you closed your account.
               </p></li>
               <li><p>6.3 You can pay by debit order, credit card or other commercially accepted payment methods set out on the Service Channels.
               </p></li>
            </ul>
         </p>

         <ContentTitle>7. Use your Login Details to access the Service.</ContentTitle>
         <p>
            <ul>
               <li><p>7.1 Each time you want to access the Service you must log in with the email address and password (“Login Details”) you provided as part of your Registration Information.
               </p></li>
               <li><p>7.2 Keep your Login Details safe to prevent unauthorised access to the Service.
               </p></li>
               <li>
                  <p>
                     7.3 If you suspect there has been, or could have been, unauthorised access using your Login Details, you must:
                  </p>
                     <ul>
                        <li><p>
                        7.3.1 change your Login Details, or
                        </p></li>
                        <li><p>
                        7.3.2 email us on thesvens@22seven.com instructing us to block access.
                        </p></li>
                     </ul>
               </li>
               <li>
                  <p>
                  7.4 When you email us we will immediately block access and let you know if we discover any actual or suspected unauthorised access. change your Login Details, or email us on thesvens@22seven.com instructing us to block access.
                  </p>
               </li>
            </ul>
         </p>

         <ContentTitle>8. You authorise us to collect your Account Information.</ContentTitle>
         <p>
            <ul>
               <li>
                  <p>
                  8.1 The Service relies on the automated collection of your information (also known as “Information Aggregation”) from your Product/Service Providers’ websites and systems. To do this we have partnered with Yodlee Inc. (“Yodlee”) – an internationally recognised information aggregator.
                  </p>
               </li>
               <li>
                  <p>
                  8.2 You authorise Yodlee and us as your agents to store and use your User IDs, PINs, passwords and any other authentication information as may be necessary (“Security Credentials”) to automatically and electronically collect your balances, transactions and other information (“Account Information”), necessary to provide the service to you, from your Product/Service Providers’ websites and systems on your behalf. We will do so ONLY to the extent necessary to provide the Service to you and always in accordance with our Privacy Policy. You agree that your Product/Service Providers can rely on and act according to this authorisation and agency.
                  </p>
               </li>
               <li>
                  <p>
                  8.3 If necessary, we may need you to give your Product/Service Providers written notice that you have authorised Yodlee and us to collect your Account Information on your behalf. If you don’t give them written notice and as a result we can’t provide the Service to you, we may have to terminate your access to the Service.
                  </p>
               </li>
               <li>
                  <p>
                  8.4 We are not responsible for the products and services offered by any Product/Service Providers.
                  </p>
               </li>
               <li>
                  <p>
                  8.5 The Service is not endorsed or sponsored by any Product/Service Providers accessible through the Service.
                  </p>
               </li>
            </ul>
         </p>

         <ContentTitle>9. Information you provide.</ContentTitle>
         <p>
            <ul>
               <li>
                  <p>
                  9.1 All the information you submit, including Personal Information and your Security Credentials, must be, and remain, accurate, current and complete. Please update the information via the Service if it changes.
                  </p>
               </li>
               <li>
                  <p>
                  9.2 You warrant that you are authorised to submit the Personal Information and Security Credential
                  </p>
               </li>
               <li>
                  <p>
                  9.3 By using the Service, you grant us, Yodlee and other authorised service providers who assist us to provide the Service to you the right to use any information, data, materials or other content (collectively, “Content”) you provide through or to the Service, SOLELY for the purpose of providing the Service. Such use will always be in accordance with our Privacy Policy. By providing Content, you agree and warrant that the owner of such Content has expressly agreed that, without any particular time limit, we, Yodlee and our authorised service providers may use the Content ONLY for the purposes set out above. To be clear, when we talk about “Content” we are not referring to your security credentials, which are only ever used by ourselves and Yodlee and always in accordance with our Privacy Policy.
                  </p>
               </li>
            </ul>
         </p>        
         </Content>
      </Container> 
   )
}

export default TermsContent;
