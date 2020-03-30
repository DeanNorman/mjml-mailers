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

   ul {
      margin-top: 0;
      margin-bottom: 0;
      padding-left: 9px;

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
    max-width: 350px;
`

const ContentTitle = styled.p`
   font-family: "CircularStd-Bold", Helvetica, Arial, serif;
   font-weight: 600 !important;
   margin-bottom: 10px;
`

const ContentBreak = styled.div`
P {
   font-size: 20px;
    text-align: center;
    color: #4e4b6b;
    font-weight: 300;
}
     

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

const Subsection = styled.li`
   display: flex;

   p { 
      margin-right: 10px;
   }
`

const NestedSection = styled.div`
   display: flex;
   flex-wrap: wrap;
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
            <ul>
               <Subsection>
                  <p>3.1</p>
                  <p>
                  22seven has entered into a juristic representative agreement with OMLACSA in terms whereof 22seven is mandated by OMLACSA to provide Intermediary Services on OMLACSA’s license to you.
                  </p>
               </Subsection>
               <Subsection>
                  <p>3.2</p>
                  <p>
                     OMLACSA and 22seven have agreed in the juristic representative agreement that the Intermediary Services referred to in paragraph 3.1 above will be provided to you through the 22seven Application.
                  </p>
               </Subsection>
               <Subsection>
                  <p>3.3</p>
                  <p>
                  Consequently you agree with 22seven that you will only access the Intermediary Services and associated Investments through the 22seven Application.
                  </p>
               </Subsection>
               <Subsection>
                  <p>3.4</p>
                  <p>
                  You further acknowledge and authorise 22seven to enter into all necessary third party relationships and to make all necessary and reasonable enquiries in order to comply with applicable legislation or to give effect to your instructions.
                  </p>
               </Subsection>
               <Subsection>
                  <p>3.5</p>
                  <p>
                     The Intermediary Services provided by 22seven to you are based on the above regulatory framework together with:
                  </p>
               </Subsection>
               <NestedSection>
               <ul>
                  <Subsection>
                     <p>3.5.1</p>
                     <p>
                     the information that you provided to 22seven in the 22seven Application.
                     </p>
                  </Subsection>
                  <Subsection>
                     <p>3.5.2</p>
                     <p>
                        the relevant supporting documents that you provided to 22seven during the application process.
                     </p>
                  </Subsection>
                  <Subsection>
                     <p>3.5.3</p>
                     <p>
                        any subsequent valid instructions that you give to 22seven through the 22seven Application.
                     </p>
                  </Subsection>
               </ul>
               </NestedSection>
            </ul>


         <ContentTitle>4. Your investment(s)</ContentTitle>
         <ul>
            <Subsection>
               <p>4.1</p>
               <p>
                  22seven has entered into an agreement with OMLACSA to render intermediary services in respect of the Investments made available by Old Mutual Unit Trusts to you through the 22seven Application.
               </p>
            </Subsection>
            <Subsection>
               <p>4.2</p>
               <p>
                These Investments are collective investment schemes portfolios registered by Old Mutual Unit Trusts and regulated by the Registrar for Collective Investment Schemes in terms of CISCA.
               </p>
            </Subsection>
            <Subsection>
               <p>4.3</p>
               <p>
               Your Investment is divided into identical units. Each unit represents the pro rata ownership of the assets in the Investment. The size of a contribution and the unit price at the time when an investment is made determine the number of units that are bought by you.
               </p>
            </Subsection>
            <Subsection>
               <p>4.4</p>
               <p>
                  You may access two types of Investments through the 22seven Application, namely, tax-free Investment(s) or taxable Investment(s).
               </p>
            </Subsection>
         </ul>

         <ContentTitle>5. Administering payments into Investment(s)</ContentTitle>
        
         <ul>
            <Subsection>
               <p>5.1</p>
               <p>
               You confirm that you may pay amounts that exceed R33,000 in a particular tax-year or R500,000 over your lifetime into Old Mutual Unit Trusts’ bank account using the 22seven Application.
               </p>
            </Subsection>
            <NestedSection>
            <Subsection>
               <p>5.2</p>
               <p>
               In the event that you have chosen the tax-free investment and your payment(s) exceed the limits stated in paragraph 5.1 above then you instruct 22seven to:
               </p>
            </Subsection>
               <ul>
                  <Subsection>
                     <p>5.2.1</p>
                     <p>
                        invest the first R33,000 as your contribution into your selected tax-free Investment.
                     </p>
                  </Subsection>
                  <Subsection>
                     <p>5.2.2</p>
                     <p>
                        invest any amount that exceeds R33,000 in a particular tax-year into your selected taxable Investment.
                     </p>
                  </Subsection>
                  <Subsection>
                     <p>5.2.3</p>
                     <p>
                        invest any payment that exceeds R500,000 over your lifetime into your selected taxable Investment.
                     </p>
                  </Subsection>
               </ul>
            </NestedSection>
            <Subsection>
               <p>5.3</p>
               <p>
               22seven does not have access to tax-free savings accounts or investments that you hold/may hold with other providers or any information relating thereto. Consequently, it is your responsibility to ensure that your total investments into tax-free savings and investments across providers do not exceed the legislated investment limits. You indemnify and hold 22seven harmless of all claims that may arise in respect of you exceeding your investment limits by investing with other providers.
               </p>
            </Subsection>
         </ul>


         <ContentTitle>6. Choosing your Investment</ContentTitle>
         <ul>
            <Subsection>
               <p>6.1</p>
               <p>
                  22seven may not give you advice (as defined in FAIS) on whether any Investment is suitable for your needs.
               </p>
            </Subsection>
            <Subsection>
               <p>6.2</p>
               <p>
                  Please ensure that you understand these implications, costs and consequences before you invest.
               </p>
            </Subsection>
         </ul>


         <ContentTitle>7. Conditions relating to purchases</ContentTitle>

         <ul>
            <Subsection>
               <p>7.1</p>
               <p>
                  All purchases of Investments are subject to a 10 day clearance period.
               </p>
            </Subsection>
            <Subsection>
               <p>7.2</p>
               <p>
               All purchases are subject to Investments being made available to members of the public for investment by Old Mutual Unit Trusts.
               </p>
            </Subsection>
         </ul>


         <ContentTitle>8. Valid instructions</ContentTitle>
         <ul>
            <Subsection>
               <p>8.1</p>
               <p>
               All instructions to 22seven must be submitted by you through the 22seven Application in order for them to constitute valid instructions.
               </p>
            </Subsection>
            <Subsection>
               <p>8.2</p>
               <p>
                  Instructions to 22seven will only be valid instructions where you have satisfied all 22seven’s requirements, including but not limited to the provision of required supporting documents, where applicable.
               </p>
            </Subsection>
            <Subsection>
               <p>8.3</p>
               <p>
                  You agree that only valid instructions are legally binding on 22seven and Old Mutual Unit Trusts.
               </p>
            </Subsection>
            <Subsection>
               <p>8.4</p>
               <p>
               You agree that it is solely your responsibility to ensure that no person provides instructions to 22seven by gaining unauthorised access to your account.
               </p>
            </Subsection>
            <Subsection>
               <p>8.5</p>
               <p>
                  You indemnify 22seven and Old Mutual Unit Trusts and hold them harmless against any claims of whatsoever nature arising out of any person submitting instructions to 22seven or Old Mutual Unit Trusts through gaining unauthorised access to your account.
               </p>
            </Subsection>
         </ul>

         <ContentTitle>9. Complete and accurate information</ContentTitle>
         <p>You agree to ensure that all the instructions and supporting documents you give to 22seven are accurate, clear and complete.</p>

         <ContentTitle>10. Administration rules</ContentTitle>
         
            <ul>
               <NestedSection>
               <Subsection>
                  <p>10.1</p>
                  <p>
                  You agree that the rules specified in the 22seven Application and the Old Mutual Unit Trusts Terms and Conditions (as specified by Old Mutual Unit Trusts from time to time) shall apply in respect of the following:
                  </p>
               </Subsection>
                  <ul>
                     <Subsection>
                        <p>10.1.1</p>
                        <p>
                        Cut-off times for transactions (including withdrawals, switch instructions and any other changes to your Investment) to be processed
                        </p>
                     </Subsection>
                     <Subsection>
                        <p>10.1.2</p>
                        <p>
                           Turnaround times for transactions to be processed
                        </p>
                     </Subsection>
                     <Subsection>
                        <p>10.1.3</p>
                        <p>
                           Required supporting documents
                        </p>
                     </Subsection>
                     <Subsection>
                        <p>10.1.4</p>
                        <p>
                           Updating your details
                        </p>
                     </Subsection>
                  </ul>
                  </NestedSection>
               <Subsection>
                  <p>10.2</p>
                  <p>
                  22seven may decide whether to accept or reject instructions received from you through the 22seven Application. Where appropriate 22seven may also reverse transactions.
                  </p>
               </Subsection>
               <Subsection>
                  <p>10.3</p>
                  <p>
                     22seven will endeavour to action instructions at the earliest reasonable opportunity. Any instructions received will be subject to prevailing law, 22seven’s administrative procedures and Old Mutual Unit Trusts administrative procedures.
                  </p>
               </Subsection>
            </ul>

         <ContentTitle>11. Tax</ContentTitle>
         <ul>
            <Subsection>
               <p>11.1</p>
               <p>
               Should you have invested in a taxable Investment you are liable for tax on the interest earned in your Investment.
               </p>
            </Subsection>
            <Subsection>
               <p>11.2</p>
               <p>
                  Please note that a withdrawal of your Investment from a taxable Investment may result in you being liable for capital gains tax.
               </p>
            </Subsection>
            <Subsection>
               <p>11.3</p>
               <p>
               No tax is payable in respect of a tax-free Investment but you may have to satisfy some SARS reporting requirements.
               </p>
            </Subsection>
         </ul>

         <ContentTitle>12. Death</ContentTitle>
         <p>In the event of your death, the amount available in your Investment will be paid according to your executor’s instructions once all processing requirements have been met.</p>

         <ContentTitle>13. Tax certificates</ContentTitle>
         <ul>
            <Subsection>
               <p>13.1</p>
               <p>
                  After each tax year, 22seven will provide you with an income tax certificate reflecting any interest and dividends (Income Distributions) you earned within your Investment over the relevant tax year and the capital gains tax that you may be liable for.
               </p>
            </Subsection>
            <Subsection>
               <p>13.2</p>
               <p>
                  You are responsible for informing the South African Revenue Service (SARS) of the interest and dividends you earned during the relevant tax year and, if required, for submitting the certificate to SARS.
               </p>
            </Subsection>
         </ul>

         <ContentTitle>14. Keeping your personal information confidential</ContentTitle>
  
         <ul>
            <Subsection>
               <p>14.1</p>
               <p>
                  22seven will keep your personal information relating to your Investment confidential unless the sharing of your personal information is required to give effect to these terms and conditions or by law.
               </p>
            </Subsection>
            <Subsection>
               <p>14.2</p>
               <p>
               22seven may share your personal information with OMLACSA and Old Mutual Unit Trusts from time to time.
               </p>
            </Subsection>
         </ul>


         <ContentTitle>15. Accept, suspend, delay or withdraw your instructions</ContentTitle>
         <ul>
            <Subsection>
               <p>15.1</p>
               <p>
                  22seven will only accept instructions that are valid.
               </p>
            </Subsection>
            <Subsection>
               <p>15.2</p>
               <p>
               22seven may accept, suspend, delay, reverse or withdraw your instructions or transactions where it believes that there is a good reason to do so.
               </p>
            </Subsection>
         </ul>
   


         <ContentTitle>16. Communicate with you</ContentTitle>
         <p>You agree that 22seven may, in circumstances permitted in law, communicate with you (from time to time) on behalf of Old Mutual Unit Trusts.</p>

         <ContentTitle>17. Exclusions from this investment contract</ContentTitle>

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



         <ContentTitle>18. Certain losses suffered</ContentTitle>
         <p>22seven is not responsible for any losses suffered if, for example, but not limited to:</p>
 
            <ul>
               <Subsection>
                  <p>18.1</p>
                  <p>
                  there is a delay in processing your instructions or if your instructions are rejected for reasons beyond our control e.g. regulatory requirements, etc.
                  </p>
               </Subsection>
               <Subsection>
                  <p>18.2</p>
                  <p>
                  you provide the 22seven with incorrect information.
                  </p>
               </Subsection>
               <Subsection>
                  <p>18.3</p>
                  <p>
                  a third party does something illegal, invalid or does not do something that it should have done
                  </p>
               </Subsection>
               <Subsection>
                  <p>18.4</p>
                  <p>
                     22seven cannot verify the bank account details you provide
                  </p>
               </Subsection>
               <Subsection>
                  <p>18.5</p>
                  <p>
                     changes in tax or other laws affect the performance of your investment
                  </p>
               </Subsection>
               <Subsection>
                  <p>18.6</p>
                  <p>
                     there is a failure or delay with any networks, electronic or mechanical devices, or any other form of communication used to process your instructions
                  </p>
               </Subsection>
               <Subsection>
                  <p>18.7</p>
                  <p>
                  there is a delay in the sale of units in your Investment due to ring-fencing (when a large amount of units are sold in an Investment, Old Mutual Unit Trusts may apply the process of ring-fencing to protect Investments and investors remaining in the Investment. Ring-fencing may result in the separation and delay of the sale of your units).
                  </p>
               </Subsection>
            </ul>

         <ContentTitle>19. Professional indemnity cover and fidelity insurance</ContentTitle>
         <p>22seven confirms that OMLACSA has the necessary professional indemnity and fidelity insurance in place to cover 22seven’s activities in terms of these Terms and Conditions.</p>

         <ContentTitle>20. Fees and charges</ContentTitle>
         <p>22seven will receive the following Intermediary Services fees and pay the following Charges in respect of your investment:

         <ul>
            <li>
            <br/>
               <p>
               20.1. Intermediary Services Fees<br/>
               Fees in respect of Intermediary Services rendered to you by 22seven are payable by Old Mutual Unit Trusts to OMLACSA. OMLACSA in turn pays its juristic representative, 22seven each month. These fees are already included in the single service fee that Old Mutual Unit Trusts discloses in your Investment’s Fund Fact Sheet. These fees are built into the daily unit price of your Investment and are not collected through the sale of units. The latest applicable fees are:
               </p>
               <ul>
                  <li>
                     <p>
                     20.1.1.<br/><br/>

                     OMLACSA’s Fee Paid to 22seven<br/>
                     0.2% of your Investment market value, per annum for the following fund(s):<br/>
                     Old Mutual Core Balanced Fund<br/>
                     Old Mutual Top 40 Index Fund 100%
                     </p>
                  </li>
                  <li>
                     <p>
                     20.1.2.<br/><br/>

                     OMLACSA’s Fee Paid to 22seven<br/>
                     0.1% of your Investment market value, per annum for the following fund(s):<br/>
                     Old Mutual FTSE RAFI® All World Index Feeder Fund<br/>
                     Old Mutual Money Market Fund 100%
                     </p>
                     <br/>
                  </li>
               </ul>
            </li>
            <li>
               <p>
               20.2. Charges<br/>
               There are other charges (in addition to the above Intermediary Services fees) that may be deducted from your Investment. These charges are included in the unit price of your Investment and will not show on your investment statement. They include the following:<br/><br/>
               – bank charges<br/>
               – trustee fees<br/>
               – audit fees<br/>
               – securities transfer tax<br/>
               – value added tax<br/>
               – brokerage fees<br/>
               </p>
               <br/>
            </li>
            <li>
               <p>
               20.3. Value added tax (VAT)<br/>
               All fees and charges are shown exclusive of value added tax (VAT), unless stated otherwise.
               </p>
            </li>
         </ul>
         </p>

         <ContentTitle>21. Changes to these terms and conditions, fees and charges</ContentTitle>
         <p>These Terms and Conditions, and the fees and charges applicable to this Investment, may change from time to time. If required by law, 22seven will give you written notice of changes to these Terms and Conditions or the fees and charges relating to your Investment.</p>

         <ContentTitle>22. Laws that apply to your investment</ContentTitle>
         <p>Your Investment is governed by the laws of South Africa. The most important laws that apply are detailed below.</p>
         <p>Financial Intelligence Centre Act (38 of 2001 and any amendments thereto)<br/>
            This Act aims to prevent money laundering and terrorist financing. It requires 22seven to establish and prove your identity and source of funds before accepting your investment application.</p>
         <p>The Collective Investment Schemes Control Act (45 of 2002 and any amendments thereto)<br/>
            This Act regulates the administration and management of collective investment schemes.</p>
         <p>Exchange Control Regulations<br/>
            Certain collective investment scheme portfolios are subject to exchange control regulations.</p>
         <p>Financial Advisory and Intermediary Services Act (FAIS) (37 of 2002 and any amendments thereto)<br/>
            This Act regulates the activities of those who give advice or provide intermediary services to investors regarding financial products. It requires such persons be licensed and enforces professional behaviour through codes of conduct.</p>
         <p>Income Tax Act (52 of 1962 and any amendments thereto)<br/>
            This Act applies to taxation.</p>
         <p>Consumer Protection Act (68 of 2008 and any amendments thereto)<br/>
            This Act promotes a fair, accessible and sustainable market place for consumer products and services.</p>
         <p>The Protection of Personal Information Act</p>
         <p>22seven may use your information or obtain information about you for the following purposes:</p>
         <p>
         – Credit searches and/or verification<br/>
         – Fraud prevention and detection<br/>
         – Market research and statistical analysis<br/>
         – Audit & record keeping purposes<br/>
         – Compliance with legal & regulatory requirements<br/>
         – Verifying your identity<br/>
         – Sharing information with service providers we engage to process such information on our behalf or who render services to us.<br/>
         – Sharing information with OMLACSA and Old Mutual Unit Trusts on behalf of OMLACSA as Financial Services Provider where you are invested in an Old Mutual Unit Trusts Fund. 
         </p>

         <p>You may access the personal information that 22seven holds and view our full privacy notice by logging on to our website at 22seven.com. You may request that 22seven delete this information by e-mailing &nbsp;
         <ExternalLink href="mailto:thesvens@22seven.com">
               thesvens@22seven.com
         </ExternalLink>.</p>

         <ContentTitle>23. Contact details and domicile</ContentTitle>
         <p>22seven can be contacted at:</p>
         <p>
         Registered Address<br/>
         Mutual Park<br/>
         Jan Smuts Drive<br/>
         Pinelands<br/>
         7405<br/><br/>

         Postal Address<br/>
         P.O. Box 50128<br/>
         Waterfront<br/>
         Cape Town<br/>
         8002<br/><br/>

         Tel: &nbsp;   <ExternalLink href="tel:+27214265771">
         (021) 4265771
                     
                  </ExternalLink> <br/>
         Email: &nbsp;      <ExternalLink href="mailto:thesvens@22seven.com">
               thesvens@22seven.com
         </ExternalLink><br/>
         </p>

         <p>
         22seven has chosen the above registered address as its domicilium citandi et executandi for the purposes of receiving notices and legal proceedings in connection with your Investment.
You nominate the physical address inserted by you in the 22seven Application as your domicilium citandi et executandi for the purposes of receiving notices and legal proceedings in connection with your Investment
         </p>
         <hr />

      
            <ContentBreak>
               <p>Old Mutual Unit Trusts Managers (RF) PTY LTD</p>
               <p><span style={{ fontSize : "13px" }}>(Registration no. 65/008471/07)</span></p>
               <p>Collective Investment Scheme Portfolios</p>
               <p>Terms and conditions</p>
            </ContentBreak>


         <hr />

         <ContentTitle>1. Information about your investment</ContentTitle>


            <ul>
               <li>
                  <p>
                  a. The investment that you have made is the purchase of participatory interests (“Units”) in Collective Investment Scheme portfolios (“Unit Trusts”).
                  </p>
               </li>
               <li>
                  <p>
                  b. Two types of portfolios are being made available by Old Mutual Unit Trusts, namely:
                  </p>
               </li>
               <ul>
                  <li>
                     <p>
                     i. Taxable Investments
                     </p>
                  </li>
                  <li>
                     <p>
                     ii. Tax-free Investments
                     </p>
                  </li>
               </ul>
               <li>
                  <p>
                  c. Should you have invested in a Tax-free Investment then:
                  </p>
                  <ul>
                     <Subsection>
                        <p>i. </p>
                        <p>
                        The Tax-free Investment is offered to individual people only (i.e. not for Trusts, companies, etc.) by Old Mutual Unit Trust (“we” or “us” or “our”) through 22seven Digital (Pty) Ltd’s (“22seven”) digital application (“22seven Application”).
                        </p>
                     </Subsection>
                     <Subsection>
                        <p>ii. </p>
                        <p>
                        “Tax-free” means that you will not pay income tax on the interest earned in the portfolio, or dividend withholding tax on the dividends earned in the portfolio, and when you eventually sell, you will pay no capital gains tax on the growth of the value in your portfolio.
                        </p>
                     </Subsection>
                     <Subsection>
                        <p>iii. </p>
                        <p>
                        You can invest up to R33,000 each year, until your total investment reaches R500,000 which is the lifetime limit that you are allowed to save in a tax-free investment or savings account. If you go over these limits you will be taxed at 40% of the extra amount by SARS.
                        </p>
                     </Subsection>
                     <Subsection>
                        <p>iv. </p>
                        <p>
                        Your Tax-free Investment account will be opened when we have received your application form and supporting documents through the 22seven Application, your debit order has been actioned and your money reflects in our bank account.
                        </p>
                     </Subsection>
                     <Subsection>
                        <p>v. </p>
                        <p>
                        You can withdraw money from your portfolio at any time, but remember that should you withdraw from your Tax-free Investment then the amount you withdraw remains part of your maximum lifetime investment amount and cannot be reinvested at a later stage. This means withdrawals permanently reduce your total amount of allowable tax-free savings.
                        </p>
                     </Subsection>
                     <Subsection>
                        <p>vi.</p>
                        <p>
                        You may switch into a Tax-free Investment and between unit trusts in the Tax-free Investment but you may not switch out of this portfolio.
                        </p>
                     </Subsection>
                  </ul>
               </li>
               <Subsection>
                  <p>d.</p>
                  <p>
                  Should you have invested in a Taxable Savings Investment then the capital growth and returns accruing to your investment will be subject to the tax laws prescribed in the Income Tax Act 58 of 1962 and may be subject to income tax.
                  </p>
               </Subsection>
               <Subsection>
                  <p>e.</p>
                  <p>
                  In order to withdraw money from your portfolio, you need to sell your units using the 22seven Application and the money must be paid into the same bank account that we have on record for you.
                  </p>
               </Subsection>
            </ul>


         <ContentTitle>2. Bank details for investments</ContentTitle>
     
         <ul>
            <Subsection>
               <p>a.</p>
               <p>
               This is the bank account that you provided to Old Mutual Unit Trusts through the 22seven Application.
               </p>
            </Subsection>
            <Subsection>
               <p>b.</p>
               <p>
               You agree to fund your investment and all future payments from this account or the account that you later provide to us through the 22seven Application.
               </p>
            </Subsection>
            <li>
               <p>
               c. Please note:
               </p>
               <ul>
                  <li>
                     <p>
                     i. Deductions cannot be made from credit cards.
                     </p>
                  </li>
                  <li>
                     <p>
                     ii. Payments can only be made to your own bank account
                     </p>
                  </li>
               </ul>
            </li>
         </ul>
         

         <ContentTitle>3. Administrative arrangements</ContentTitle>
         <p>If all our requirements are met by 15h00 you will receive the same day’s price. Otherwise the first working day’s price will apply once all requirements have been met, with the same cut-off times applying.</p>

         <ContentTitle>4. Minimum investment amounts</ContentTitle>
 
            <ul>
               <li>
                  <p>
                  a. We may specify minimum investment amounts from time to time.
                  </p>
               </li>
               <Subsection>
                  <p>b.</p>
                  <p>
                  We are under no obligation to accept below minimum investments and reserve the right not to debit or to cease debiting your account under certain circumstances.
                  </p>
               </Subsection>
            </ul>

         <ContentTitle>5. Reinvestment of distributions</ContentTitle>
         <p>Distributions are automatically reinvested.</p>

         <ContentTitle>6. Financial intelligence centre act</ContentTitle>
         <p>Certain buying and selling requests require at least proof of identity (e.g. bar-coded ID/passport) and residential address (e.g. recent utility bill), unless we have your current documents on record or you have made them available to 22seven through the 22seven Application.</p>

         <ContentTitle>7. Statutory disclosure</ContentTitle>
         <p>Unit trusts are generally medium- to long-term investments. Past performance is no indication of future performance. Shorter term fluctuations can occur as your investment moves in line with the markets. Fluctuations or movements in exchange rates may cause the value of underlying international investments to go up or down. Unit trusts can engage in borrowing and scrip lending. The fund’s TER reflects the percentage of the average Net Asset Value of the portfolio that was incurred as charges, levies and fees related to the management of the portfolio. A higher TER does not necessarily imply a poor return, nor does a low TER imply a good return. The current TER cannot be regarded as an indication of future TERs. A schedule of fees, charges and maximum commissions is available from Old Mutual Unit Trust Managers (RF) (Pty) Ltd. You may sell your investment at the ruling price of the day (calculated at 15h00 on a forward pricing basis). Certain funds may be capped to be managed in accordance with their mandates. Old Mutual is a member of the Association for Savings and Investment South Africa (ASISA).</p>

         <ContentTitle>8. Declaration</ContentTitle>
         <p style={{marginBottom : "10px"}}>By using the 22seven Application you declare that:</p>

            <ul>
               <Subsection>
                 <p>a.</p>
                  <p>
                  you accept the number of units sold to you by virtue of the 22seven Application and you warrant that you have full power and authority to enter into and conclude this transaction, with the necessary assistance where such assistance is a legal requirement.
                  </p>
               </Subsection>
               <Subsection>
                  <p>b.</p>
                  <p>
                  you are aware that this product offers no cooling-off rights.
                  </p>
               </Subsection>
               <Subsection>
                  <p>c.</p>
                  <p>
                     you know that the cost of buying units may include an initial charge plus VAT, depending on the amount invested, and that there are no guarantees on your capital.
                  </p>
               </Subsection>
               <Subsection>
                  <p>d.</p>
                  <p>
                     you acknowledge that there are further allowable deductions from the unit trust (e.g. an annual service fee) that impact on the value of your investment.
                  </p>
               </Subsection>
               <Subsection>
                  <p>e.</p>
                  <p>
                  you are satisfied that the facts you provided through the 22seven Application are accurate and complete.
                  </p>
               </Subsection>
               <Subsection>
                  <p>f.</p>
                  <p>
                     you are aware of the unit trust’s/unit trusts’ objectives, risk factors, the charges and income distributions, as set out in the unit trust fund fact sheet/s.
                  </p>
               </Subsection>
               <Subsection>
                  <p>g.</p>
                  <p>
                     you acknowledge that we may borrow up to 10% of the portfolio to bridge insufficient liquidity.
                  </p>
               </Subsection>
               <Subsection>
                  <p>h.</p>
                  <p>
                  you have read and fully understood all the pages of these terms and conditions together with all information contained in the 22seven Application.
                  </p>
               </Subsection>
               <Subsection>
                  <p>i.</p>
                  <p>
                     you hereby authorise us to debit the account mentioned above with the monthly amount/lump sum specified.
                  </p>
               </Subsection>
               <Subsection>
                  <p>j.</p>
                  <p>
                  you further authorise us to accept instructions from you via the 22seven Application.
                  </p>
               </Subsection>
            </ul>

         <ContentTitle>9. Contact details</ContentTitle>
         <p>
         Old Mutual Unit Trust Managers (RF) (Pty) Ltd (Registration no. 65/08471/07)<br/>
         Mutualpark, Jan Smuts Drive, Pinelands 7405, South Africa<br/>
         PO Box 207, Cape Town 8000, South Africa<br/>
         Telephone no.: &nbsp;
         <ExternalLink href="tel:+270215031770">
                  +27(0)21 503 1770
         </ExternalLink>   
         
         <br/>
         Helpline: &nbsp;
         <ExternalLink href="tel:0860234234">
                  0860 234 234
         </ExternalLink>   
         <br/>
         Fax no.: +27(0)21 509 7100<br/>
         Internet address: &nbsp;
         <ExternalLink href="www.omut.co.za" target="_blank">
         www.omut.co.za
         </ExternalLink>   
         <br/>
         Email: &nbsp;
         <ExternalLink href="mailto:unittrusts@oldmutual.com">
               unittrusts@oldmutual.com
         </ExternalLink>   
         <br/>
         Complaints: Write to our Client Services Manager at the above address or call &nbsp;
         <ExternalLink href="tel:0860234234">
         0860 234 234
         </ExternalLink>   
         .<br/>
         Compliance Department: &nbsp;
         <ExternalLink href="tel:+270215031770">
                  +27(0)21 503 1770
         </ExternalLink>   
         </p>
         <p>
         Old Mutual Investment Administrators (Pty) Ltd (Registration no. 1988/003478/07)<br/>
         Mutualpark, Jan Smuts Drive, Pinelands 7405, South Africa<br/>
         PO Box 5408, Cape Town 8000, South Africa<br/>
         Telephone no.: &nbsp;
         <ExternalLink href="tel:+270215031770">
                  +27(0)21 503 1770
         </ExternalLink>   <br/>
         Fax no.: +27(0)21 509 7100<br/>
         Compliance Department:        &nbsp;
         <ExternalLink href="tel:+270215031770">
                  +27(0)21 503 1770
         </ExternalLink>  <br/>
         Professional indemnity cover and fidelity insurance cover are in place. Old Mutual Investment Administrators (Pty) Ltd is a third party administration and service provider to Old Mutual Unit Trust Managers (RF) (Pty) Limited and is a licensed financial services provider.
         </p>
         </Content>
      </Container> 
   )
}

export default InvestTermsContent;
