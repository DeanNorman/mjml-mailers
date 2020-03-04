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

         <ContentTitle>3. The legal basis of your relationship with 22seven</ContentTitle>
         <p>
            <ul>
               <li>
                  <p>
                  3.1. 22seven has entered into a juristic representative agreement with OMLACSA in terms whereof 22seven is mandated by OMLACSA to provide Intermediary Services on OMLACSA’s license to you.
                  </p>
               </li>
               <li>
                  <p>
                  3.2. OMLACSA and 22seven have agreed in the juristic representative agreement that the Intermediary Services referred to in paragraph 3.1 above will be provided to you through the 22seven Application.
                  </p>
               </li>
               <li>
                  <p>
                  3.3. Consequently you agree with 22seven that you will only access the Intermediary Services and associated Investments through the 22seven Application.
                  </p>
               </li>
               <li>
                  <p>
                  3.4. You further acknowledge and authorise 22seven to enter into all necessary third party relationships and to make all necessary and reasonable enquiries in order to comply with applicable legislation or to give effect to your instructions.
                  </p>
               </li>
               <li>
                  <p>
                  3.5. The Intermediary Services provided by 22seven to you are based on the above regulatory framework together with:
                  </p>
               </li>
               <ul>
                  <li>
                     <p>
                     3.5.1. the information that you provided to 22seven in the 22seven Application.
                     </p>
                  </li>
                  <li>
                     <p>
                     3.5.2. the relevant supporting documents that you provided to 22seven during the application process.
                     </p>
                  </li>
                  <li>
                     <p>
                     3.5.3. any subsequent valid instructions that you give to 22seven through the 22seven Application.
                     </p>
                  </li>
               </ul>
            </ul>
         </p>

         <ContentTitle>4. Your investment(s)</ContentTitle>
         <p>
            <ul>
               <li>
                  <p>
                  4.1. 22seven has entered into an agreement with OMLACSA to render intermediary services in respect of the Investments made available by Old Mutual Unit Trusts to you through the 22seven Application.
                  </p>
               </li>
               <li>
                  <p>
                  4.2. These Investments are collective investment schemes portfolios registered by Old Mutual Unit Trusts and regulated by the Registrar for Collective Investment Schemes in terms of CISCA.
                  </p>
               </li>
               <li>
                  <p>
                  4.3. Your Investment is divided into identical units. Each unit represents the pro rata ownership of the assets in the Investment. The size of a contribution and the unit price at the time when an investment is made determine the number of units that are bought by you.
                  </p>
               </li>
               <li>
                  <p>
                  4.4. You may access two types of Investments through the 22seven Application, namely, tax-free Investment(s) or taxable Investment(s).
                  </p>
               </li>
            </ul>
         </p>

         <ContentTitle>5. Administering payments into Investment(s)</ContentTitle>
         <p>
            <ul>
               <li>
                  <p>
                  5.1. You confirm that you may pay amounts that exceed R33,000 in a particular tax-year or R500,000 over your lifetime into Old Mutual Unit Trusts’ bank account using the 22seven Application.
                  </p>
               </li>
               <li>
                  <p>
                  5.2. In the event that you have chosen the tax-free investment and your payment(s) exceed the limits stated in paragraph 5.1 above then you instruct 22seven to:
                  </p>
                  <ul>
                     <li>
                        <p>
                        5.2.1. invest the first R33,000 as your contribution into your selected tax-free Investment.
                        </p>
                     </li>
                     <li>
                        <p>
                        5.2.2. invest any amount that exceeds R33,000 in a particular tax-year into your selected taxable Investment.
                        </p>
                     </li>
                     <li>
                        <p>
                        5.2.3. invest any payment that exceeds R500,000 over your lifetime into your selected taxable Investment.
                        </p>
                     </li>
                  </ul>
               </li>
               <li>
                  <p>
                  5.3. 22seven does not have access to tax-free savings accounts or investments that you hold/may hold with other providers or any information relating thereto. Consequently, it is your responsibility to ensure that your total investments into tax-free savings and investments across providers do not exceed the legislated investment limits. You indemnify and hold 22seven harmless of all claims that may arise in respect of you exceeding your investment limits by investing with other providers.
                  </p>
               </li>
            </ul>
         </p>

         <ContentTitle>6. Choosing your Investment</ContentTitle>
         <p>
            <ul>
               <li>
                  <p>
                  6.1. 22seven may not give you advice (as defined in FAIS) on whether any Investment is suitable for your needs.
                  </p>
               </li>
               <li>
                  <p>
                  6.2. Please ensure that you understand these implications, costs and consequences before you invest.
                  </p>
               </li>
            </ul>
         </p>

         <ContentTitle>7. Conditions relating to purchases</ContentTitle>
         <p>
            <ul>
               <li>
                  <p>
                  7.1. All purchases of Investments are subject to a 10 day clearance period.
                  </p>
               </li>
               <li>
                  <p>
                  7.2. All purchases are subject to Investments being made available to members of the public for investment by Old Mutual Unit Trusts.
                  </p>
               </li>
            </ul>
         </p>

         <ContentTitle>8. Valid instructions</ContentTitle>
         <p>
            <ul>
               <li>
                  <p>
                  8.1. All instructions to 22seven must be submitted by you through the 22seven Application in order for them to constitute valid instructions.
                  </p>
               </li>
               <li>
                  <p>
                  8.2. Instructions to 22seven will only be valid instructions where you have satisfied all 22seven’s requirements, including but not limited to the provision of required supporting documents, where applicable.
                  </p>
               </li>
               <li>
                  <p>
                  8.3. You agree that only valid instructions are legally binding on 22seven and Old Mutual Unit Trusts.
                  </p>
               </li>
               <li>
                  <p>
                  8.4. You agree that it is solely your responsibility to ensure that no person provides instructions to 22seven by gaining unauthorised access to your account.
                  </p>
               </li>
               <li>
                  <p>
                  8.5. You indemnify 22seven and Old Mutual Unit Trusts and hold them harmless against any claims of whatsoever nature arising out of any person submitting instructions to 22seven or Old Mutual Unit Trusts through gaining unauthorised access to your account.
                  </p>
               </li>
            </ul>
         </p>

         <ContentTitle>9. Complete and accurate information</ContentTitle>
         <p>You agree to ensure that all the instructions and supporting documents you give to 22seven are accurate, clear and complete.</p>

         <ContentTitle>10. Administration rules</ContentTitle>
         <p>
            <ul>
               <li>
                  <p>
                  10.1. You agree that the rules specified in the 22seven Application and the Old Mutual Unit Trusts Terms and Conditions (as specified by Old Mutual Unit Trusts from time to time) shall apply in respect of the following:
                  </p>
                  <ul>
                     <li>
                        <p>
                        10.1.1. Cut-off times for transactions (including withdrawals, switch instructions and any other changes to your Investment) to be processed
                        </p>
                     </li>
                     <li>
                        <p>
                        10.1.2. Turnaround times for transactions to be processed
                        </p>
                     </li>
                     <li>
                        <p>
                        10.1.3. Required supporting documents
                        </p>
                     </li>
                     <li>
                        <p>
                        10.1.4. Updating your details
                        </p>
                     </li>
                  </ul>
               </li>
               <li>
                  <p>
                  10.2. 22seven may decide whether to accept or reject instructions received from you through the 22seven Application. Where appropriate 22seven may also reverse transactions.
                  </p>
               </li>
               <li>
                  <p>
                  10.3. 22seven will endeavour to action instructions at the earliest reasonable opportunity. Any instructions received will be subject to prevailing law, 22seven’s administrative procedures and Old Mutual Unit Trusts administrative procedures.
                  </p>
               </li>
            </ul>
         </p>

         <ContentTitle>11. Tax</ContentTitle>
         <p>
            <ul>
               <li>
                  <p>
                  11.1. Should you have invested in a taxable Investment you are liable for tax on the interest earned in your Investment.
                  </p>
               </li>
               <li>
                  <p>
                  11.2. Please note that a withdrawal of your Investment from a taxable Investment may result in you being liable for capital gains tax.
                  </p>
               </li>
               <li>
                  <p>
                  11.3. No tax is payable in respect of a tax-free Investment but you may have to satisfy some SARS reporting requirements.
                  </p>
               </li>
            </ul>
         </p>

         <ContentTitle>12. Death</ContentTitle>
         <p>In the event of your death, the amount available in your Investment will be paid according to your executor’s instructions once all processing requirements have been met.</p>

         <ContentTitle>13. Tax certificates</ContentTitle>
         <p>
            <ul>
               <li>
                  <p>
                  13.1. After each tax year, 22seven will provide you with an income tax certificate reflecting any interest and dividends (Income Distributions) you earned within your Investment over the relevant tax year and the capital gains tax that you may be liable for.
                  </p>
               </li>
               <li>
                  <p>
                  13.2. You are responsible for informing the South African Revenue Service (SARS) of the interest and dividends you earned during the relevant tax year and, if required, for submitting the certificate to SARS.
                  </p>
               </li>
            </ul>
         </p>

         <ContentTitle>14. Keeping your personal information confidential</ContentTitle>
         <p>
            <ul>
               <li>
                  <p>
                  14.1. 22seven will keep your personal information relating to your Investment confidential unless the sharing of your personal information is required to give effect to these terms and conditions or by law.
                  </p>
               </li>
               <li>
                  <p>
                  14.2. 22seven may share your personal information with OMLACSA and Old Mutual Unit Trusts from time to time.
                  </p>
               </li>
            </ul>
         </p>

         <ContentTitle>15. Accept, suspend, delay or withdraw your instructions</ContentTitle>
         <p>
            <ul>
               <li>
                  <p>
                  15.1. 22seven will only accept instructions that are valid.
                  </p>
               </li>
               <li>
                  <p>
                  15.2. 22seven may accept, suspend, delay, reverse or withdraw your instructions or transactions where it believes that there is a good reason to do so.
                  </p>
               </li>
            </ul>
         </p>


         <ContentTitle>16. Communicate with you</ContentTitle>
         <p>You agree that 22seven may, in circumstances permitted in law, communicate with you (from time to time) on behalf of Old Mutual Unit Trusts.</p>

         <ContentTitle>17. Exclusions from this investment contract</ContentTitle>
         <p>
            <ul>
               <li>
                  <p>
                  17.1. Investment guarantees<br/>
The value of your Investment is not guaranteed and will fluctuate in line with market movements.
                  </p>
               </li>
               <li>
                  <p>
                  17.2. Financial advice<br/>
22seven and Old Mutual Unit Trusts do not give any financial advice and will only give you factual information. Please contact your financial planner if you require financial advice.
                  </p>
               </li>
            </ul>
         </p>


         <ContentTitle>18. Certain losses suffered</ContentTitle>
         <p>22seven is not responsible for any losses suffered if, for example, but not limited to:</p>
         <p>
            <ul>
               <li>
                  <p>
                  18.1. there is a delay in processing your instructions or if your instructions are rejected for reasons beyond our control e.g. regulatory requirements, etc.
                  </p>
               </li>
               <li>
                  <p>
                  18.2. you provide the 22seven with incorrect information.
                  </p>
               </li>
               <li>
                  <p>
                  18.3. a third party does something illegal, invalid or does not do something that it should have done
                  </p>
               </li>
               <li>
                  <p>
                  18.4. 22seven cannot verify the bank account details you provide
                  </p>
               </li>
               <li>
                  <p>
                  18.5. changes in tax or other laws affect the performance of your investment
                  </p>
               </li>
               <li>
                  <p>
                  18.6. there is a failure or delay with any networks, electronic or mechanical devices, or any other form of communication used to process your instructions
                  </p>
               </li>
               <li>
                  <p>
                  18.6. there is a failure or delay with any networks, electronic or mechanical devices, or any other form of communication used to process your instructions
                  </p>
               </li>
            </ul>
         </p>

         <ContentTitle>19. Professional indemnity cover and fidelity insurance</ContentTitle>
         <p>22seven confirms that OMLACSA has the necessary professional indemnity and fidelity insurance in place to cover 22seven’s activities in terms of these Terms and Conditions.</p>



         </Content>
      </Container> 
   )
}

export default InvestTermsContent;
