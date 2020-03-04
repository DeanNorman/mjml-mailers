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

const InvestTermsContent = () => {
   return (
      <Container>
         <TitleContent>
            <Title>Terms and conditions</Title>
            <SubTitle>22seven Digital (PTY) LTD (Registration no. 2010/011767/07) Intermediary Services</SubTitle>
         </TitleContent>
         <Content>
         
         <ContentTitle>1. 22seven’s terms and conditions</ContentTitle>
         <p>
         Please read these terms and conditions carefully to understand the legal principles that govern your relationship with 22seven relating to the intermediary services provided by 22seven to you.
         </p>
         <ContentTitle>2. Definitions</ContentTitle>

         <ContentTitle>22seven</ContentTitle>
         <p>Means 22seven Digital (Pty) Ltd with company registration number 2010/011767/07, being a wholly-owned subsidiary of OMLACSA. 22seven is a juristic representative of OMLACSA, and has been mandated by OMLACSA to provide Intermediary Services in terms of the Financial Advisory and Intermediary Services Act 37 of 2002 (“FAIS”) on OMLACSA’s FSP license.</p>

         <ContentTitle>22seven Application</ContentTitle>
         <p>Means the 22seven mobile and web-based digital application (or app) through which you may transact on your Investment.</p>

         <ContentTitle>Business Day</ContentTitle>
         <p>Means 8:30am to 5pm on any day except a Saturday, Sunday or official South African public holiday.</p>

         <ContentTitle>Intermediary Services</ContentTitle>
         <p>Means intermediary services as defined in FAIS and excludes the provision of financial advice.</p>

         <ContentTitle>Investment(s)</ContentTitle>
         <p>Means collective investment scheme portfolios, also known as unit trusts, where contributions from different investors are pooled together and invested in a specific range of assets. This is administered by the Old Mutual Unit Trust Managers.</p>

         <ContentTitle>Investor</ContentTitle>
         <p>Means the individual who invests in the Investments made available using the Intermediary Services provided by 22seven through the 22seven portal and/or application. In these terms and conditions the investor is referred to as ‘you’ or ‘your’.</p>

         <ContentTitle>OMLACSA</ContentTitle>
         <p>Means Old Mutual Life Assurance Company (South Africa) Ltd with company registration number 1999/004643/06, an authorised Financial Services Provider (“FSP”) in terms of FAIS with FSP number 703.</p>

         <ContentTitle>Old Mutual Unit Trust Managers (“Old Mutual Unit Trusts”)</ContentTitle>
         <p>Means Old Mutual Unit Trust Managers (RF) (Pty) Limited with company registration number 1965/08471/07 and is authorised in terms of the Collective Investment Schemes Control Act 45 of 2002 (“CISCA”) to administer your Investments.</p>

         <ContentTitle>Tax-free Savings Investment</ContentTitle>
         <p>Means the tax-free investment or savings account introduced into South African law by section 12T of the Income Tax Act 58 of 1962 and provided to you by Old Mutual Unit Trusts through the 22seven Application and as more fully described to you in the Old Mutual Unit Trusts terms and conditions (below).</p>
         </Content>
      </Container> 
   )
}

export default InvestTermsContent;
