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
                  7.4 When you email us we will immediately block access and let you know if we discover any actual or suspected unauthorised access.
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
                  9.2 You warrant that you are authorised to submit the Personal Information and Security Credentials to us.
                  </p>
               </li>
               <li>
                  <p>
                  9.3 By using the Service, you grant us, Yodlee and other authorised service providers who assist us to provide the Service to you the right to use any information, data, materials or other content (collectively, “Content”) you provide through or to the Service, SOLELY for the purpose of providing the Service. Such use will always be in accordance with our Privacy Policy. By providing Content, you agree and warrant that the owner of such Content has expressly agreed that, without any particular time limit, we, Yodlee and our authorised service providers may use the Content ONLY for the purposes set out above. To be clear, when we talk about “Content” we are not referring to your security credentials, which are only ever used by ourselves and Yodlee and always in accordance with our Privacy Policy.<br/><br/>
                  <InternalLink to="/legal/privacy/">
                        Read our Privacy Policy
                        <Arrow src={linkArrow} alt="link" />
                  </InternalLink>
                  </p>
               </li>
            </ul>
         </p>

         <ContentTitle>10. Communications that originate from you.</ContentTitle>
         <p>We may assume that all electronic communications which reasonably appear to originate from you or a person you have told us is authorised to act on your behalf (collectively “the originator”) are in fact from you and the form in which we receive the communication is the same as when it was first sent.</p>

         <ContentTitle>11. The Service may not always be available.</ContentTitle>        
         <p>
            <ul>
               <li>
                  <p>
                  11.1 We do not guarantee that the Service will always be available.
                  </p>
               </li>
               <li>
                  <p>
                  11.2 We are also not responsible for the accuracy of any Account Information, communications or personalisation settings. For example, Account Information displayed through the Service is only as up to date as the time shown which reflects when the information was last collected on your behalf from your Product/Service Provider’s system. Your Product/Service Providers may have more up-to-date information.
                  </p>
               </li>
            </ul>
         </p>

         <ContentTitle>12. To protect the integrity of our Service Channels and Proprietary Information. </ContentTitle>
         <p>You may not –</p>
         <p>
            <ul>
               <li>
                  <p>
                  12.1 use any robot, spider, scraper, deep link or other similar automated data gathering or extraction tools, program, algorithm or methodology for any unlawful purpose, including the unlawful access to, acquisition of, control over, copying or monitoring of the Service Channels;
                  </p>
               </li>
               <li>
                  <p>
                  12.2 use or attempt to use any engine, software, tool, agent, or other device or mechanism (including browsers, spiders, robots, avatars or intelligent agents) to unlawfully and without our knowledge navigate or search the Service Channels, other than the search engines and search agents available through the Service and generally available third-party web browsers;
                  </p>
               </li>
               <li>
                  <p>
                  12.3 post or transmit any file which contains viruses, worms, Trojan horses or any other contaminating or destructive features, or that otherwise interferes with the Service Channels or the Service; and/or
                  </p>
               </li>
               <li>
                  <p>
                  12.4 attempt to decipher, decompile, disassemble, or reverse-engineer any of the software comprising the Service Channels or the Service.
                  </p>
               </li>
            </ul>
         </p>

         <ContentTitle>13. Unlawful activity and user forums.</ContentTitle>
         <p>
            <ul>
               <li>
                  <p>
                  13.1 You may not use the Service to post any message or material that is unlawful, defamatory, abusive, indecent, threatening, harmful, obscene, racially offensive, or pornographic. We will remove any posting or message that infringes this prohibition and, if you continue posting messages or material of this kind, we may terminate your use of the Service.
                  </p>
               </li>
               <li>
                  <p>
                  13.2 Please be aware that postings and messages are displayed under your registered name and will remain visible even after you terminate your use of the Service, unless you specifically request this be removed as set out in the Privacy Policy.
                  </p>
               </li>
            </ul>
         </p>

         <ContentTitle>14. Termination of use of the Service by You or Us.</ContentTitle>
         <p>
            <ul>
               <li>
                  <p>
                  14.1 You may terminate your use of the Service at any time by following the termination procedure on the Service Channels or as set out in clause 3 (i.e. We will let you know if the Terms change) of the Terms.
                  </p>
               </li>
               <li>
                  <p>
                  14.2 We may terminate your subscription to the Service –
                  </p>
                  <ul>
                     <li><p>
                     14.2.1 at any time by giving you notice; and
                     </p></li>
                     <li><p>
                     14.2.2 in the event of you breaching these Terms.
                     </p></li>
                  </ul>
               </li>
               <li>
                  <p>
                  14.3 On termination –
                  </p>
                  <ul>
                     <li><p>
                     14.3.1 all your rights under these Terms end immediately;
                     </p></li>
                     <li><p>
                     14.3.2 we will close your account and deactivate your Login Details;
                     </p></li>
                     <li>
                        <p>14.3.3 we will remove from our records all your information in our possession other than information and data which we are obliged by law to retain.</p>
                     </li>
                  </ul>
               </li>
            </ul>
         </p>

         <ContentTitle>15. Breach of these Terms.</ContentTitle>
         <p>
         Should either of us (“the Defaulting Party”) breach these Terms and fail to remedy the breach within fourteen days of receiving written notice from the other party (“the Aggrieved Party”), the Aggrieved Party may, without prejudice to its other rights in law, terminate the Service agreement or claim immediate specific performance of all of the defaulting party’s obligations whether or not due for performance.
         </p>

         <ContentTitle>16. Our intellectual property.</ContentTitle>
         <p>
            <ul>
               <li>
                  <p>
                  16.1 We own or are licensed to use all intellectual property rights in all materials, text, drawings and data (collectively “the Materials”) made available on the Service Channels. This does not include your Account Information and other Personal Information which will always belong to you and will only be used by us in accordance with our Privacy Policy.
                  </p>
               </li>
               <li>
                  <p>
                  16.2 Any unauthorised reproduction, distribution, derivative creation, sale, broadcast or other circulation or exploitation of the whole or any part of the Materials is an infringement of our rights.
                  </p>
               </li>
               <li>
                  <p>
                  16.3 We own or are licensed to use the 22seven Trademarks, names, logos and service marks (collectively “Trademarks”) displayed on the Service Channel whether registered or unregistered. You must get our permission in writing if you want to use any Trademark.
                  </p>
               </li>
               <li>
                  <p>
                  16.4 You may use the Materials only to the extent necessary to enable you to use the Service.
                  </p>
               </li>
            </ul>
         </p>

         <ContentTitle>17. External websites and linking to our Service Channels.</ContentTitle>
         <p>
            <ul>
               <li>
                  <p>
                  17.1 Your use or reliance on external links is at your own risk.
                  </p>
               </li>
               <li>
                  <p>
                  17.2 We grant you a limited, nonexclusive right, revocable by us at any time, to create a hyperlink to our Service Channels, provided such link does not portray us or our Service in a false, misleading, derogatory or defamatory manner and/or does not misrepresent the relationship between the third party website and us.
                  </p>
               </li>
            </ul>
         </p>

         <ContentTitle>18. We may send you alerts and notifications.</ContentTitle>
         <p>
            <ul>
               <li>
                  <p>
                  18.1 We may send alerts, notifications and other communications to you by way of email, SMS or other electronic delivery mechanisms and you consent to receive communications from us in any such manner.
                  </p>
               </li>
               <li>
                  <p>
                  18.2 We will send electronic alerts to the address (email or other) you have provided to us. If your details change, please update them via the Service.
                  </p>
               </li>
               <li>
                  <p>
                  18.3 You can switch account alerts that we send on or off.
                  </p>
               </li>
            </ul>
         </p>

         <ContentTitle>19. Warranties.</ContentTitle>
         <p>
            <ul>
               <li>
                  <p>
                  19.1 Although we will always try to ensure the Service Channels are available, the Service and Service Channels are provided “as is”. Subject to the Consumer Protection Act 68 of 2008 as read with any of its Regulations (collectively “the CPA”), we make no warranties, representations, statements or guarantees (whether express, implied in law or residual) in this regard.
                  </p>
               </li>
               <li>
                  <p>
                  19.2 Subject to the CPA, we do not warrant that the Service, the Service Channels and the information they contain, or any output generated by your use of the Service, or any alert, will –
                  </p>
                  <ul>
                     <li><p>19.2.1 meet your requirements or expectations;
                     </p></li>
                     <li><p>19.2.2 be uninterrupted, timely, secure or error free;
                     </p></li>
                     <li>
                        <p>19.2.3 meet any particular measure of accuracy, completeness or reliability, performance or quality;
                        </p>
                     </li>
                     <li>
                        <p>19.2.4 be free of viruses or any other data or code which has the ability to corrupt or adversely affect the operation of your computer, data or network.
                        </p>
                     </li>
                  </ul>
               </li>
               <li>
                  <p>
                  19.3 No information obtained by you from us and/or our authorised service providers through or from the Service will create any warranty by us or the service provider in question.
                  </p>
               </li>
               <li>
                  <p>
                  19.4 You warrant that -
                  </p>
                  <ul>
                     <li>
                        <p>
                        19.4.1 you are legally entitled to access the Service Channels and use the Service;
                        </p>
                     </li>
                     <li>
                        <p>
                        19.4.2 you have, and will continue to have for the duration of the Terms, all necessary consents to use the Service;
                        </p>
                     </li>
                     <li>
                        <p>
                        19.4.3 you have capacity to be bound by the Terms.
                        </p>
                     </li>
                  </ul>
               </li>
            </ul>
         </p>

         <ContentTitle>20. Our and your liability is limited.</ContentTitle>
         <p>
            <ul>
               <li>
                  <p>
                  20.1 Neither we nor our directors will be liable for any liability or damage (other than arising from our fraudulent actions or gross negligence) of any nature which may be caused by or attributable, directly or indirectly, to
                  </p>
               </li>
               <ul>
                  <li>
                     <p>
                     20.1.1 your use of or reliance on the Service;
                     </p>
                  </li>
                  <li>
                     <p>
                     20.1.2 the Service Channels; 
                     </p>
                  </li>
                  <li>
                     <p>
                     20.1.3 your use of or reliance on any information offered on or via the Service Channels;
                     </p>
                  </li>
                  <li>
                     <p>
                     20.1.4 a breach by you of the Terms;
                     </p>
                  </li>
                  <li>
                     <p>
                     20.1.5 the fact that we act on your instructions or instructions purported to emanate from you;
                     </p>
                  </li>
                  <li>
                     <p>
                     20.1.6 any unlawful access or monitoring of information transmitted to us;
                     </p>
                  </li>
                  <li>
                     <p>
                     20.1.7 any unlawful access or monitoring of information transmitted to us;
                     </p>
                  </li>
                  <li>
                     <p>
                     20.1.8 any error or omission in respect of information submitted to us (including Registration Information and Account Information).
                     </p>
                  </li>
               </ul>
               <li>
                  <p>
                  20.2 You must not construe any information we release (including any information contained in any reports or alerts) or any information you obtain through use of the Service as an opinion on your solvency, financial standing or creditworthiness. You are solely responsible for all actions and decisions you take in reliance on this information.
                  </p>
               </li>
               <li>
                  <p>
                  20.3 You will not be liable for any liability or damage (other than arising from your fraudulent actions or gross negligence) of any nature which may be caused by or attributable, directly or indirectly, to
                  </p>
                  <ul>
                     <li>
                        <p>20.3.1 our acts or omissions;</p>
                     </li>
                     <li>
                        <p>20.3.2 a breach by us of the Terms.</p>
                     </li>
                  </ul>
               </li>
               <li>
                  <p>
                  20.4 Neither of us will be liable for any indirect or consequential loss or damage of whatever nature and however it may arise.
                  </p>
               </li>
            </ul>
         </p>

         <ContentTitle>21. You indemnify us.</ContentTitle>
         <p>You indemnify us, Yodlee and our other authorised service providers and their affiliates against any third party claims, damages or costs (including reasonable attorney's fees) caused by or attributable to your -</p>
         <p>
            <ul>
               <li>
                  <p>
                  21.1 acts or omissions;
                  </p>
               </li>
               <li>
                  <p>
                  21.2 use of the Service and the Service Channels;
                  </p>
               </li>
               <li>
                  <p>
                     21.3 breach of these Terms.
                  </p>
               </li>
            </ul>
         </p>

         <ContentTitle>22. Address for Legal Notices.</ContentTitle>
         <p>
            <ul>
               <li>
                  <p>
                  22.1 You agree to accept any notice or legal process relating to these Terms at the email address provided during the registration process.
                  </p>
               </li>
               <li>
                  <p>
                  22.2 You must send any notice or legal process relating to these Terms to our address set out in clause 31.
                  </p>
               </li>
               <li>
                  <p>
                  22.3 We can change our physical address (to any other physical address in South Africa), our telephone number and facsimile number and we will give you notice of such change.
                  </p>
               </li>
            </ul>
         </p>

         <ContentTitle>23. This is the only agreement between you and us.</ContentTitle>
         <p>
            <ul>
               <li>
                  <p>
                  23.1 These Terms are the sole record of the agreement between you and us in relation to the Service. Neither of us are bound by any express, tacit or implied representation or warranty not recorded in these Terms.
                  </p>
               </li>
               <li>
                  <p>
                  23.2 These Terms replace all prior written and verbal communications between us about the Service.
                  </p>
               </li>
               <li>
                  <p>
                  23.3 If either one of us gives the other an indulgence or extension of time, doing so will not waive or limit any of our rights, unless we expressly agree in writing to waive or limit them.
                  </p>
               </li>
            </ul>
         </p>

         <ContentTitle>24. We can assign our rights on notice to you.</ContentTitle>
         <p>
         If we merge, sell or otherwise assign our assets and this involves transferring our rights and obligations under these Terms to a third party, we will let you know before we do this. If you do not agree to the transfer of our rights and obligations, you may terminate your use of the Service with effect from the date of transfer or assignment.
         </p>

         <ContentTitle>25. Each term is severable.</ContentTitle>
         <p>If any provision of these Terms is or becomes unenforceable in any jurisdiction, the unenforceable aspect of that provision will be treated in such jurisdiction as if it had not been included in the Terms. The remaining provisions of the Terms will remain valid.</p>

         <ContentTitle>26. Cross-border transfer of your information.</ContentTitle>
         <p>Yodlee and some of our other authorised service providers are situated outside South Africa. You consent to your personal information (including Account Information and Security Credentials) being transferred cross-border so that we can render the Service to you. We will ensure that all such authorised service providers have security and privacy policies and procedures providing at least the same level of protection as our Terms.</p>

         <ContentTitle>27. Children can only use the Service with consent.</ContentTitle>
         <p>If you are under 18, you may only use the Service with the consent and involvement of a parent or other legally competent person. We reserve the right to ask you for such information as is necessary to prove that you are 18 years or older, or that you are using the Service with the consent and involvement of a parent or legally competent person.</p>

         <ContentTitle>28. Events or circumstances beyond our control.</ContentTitle>
         <p>
            <ul>
               <li>
                  <p>
                  28.1 If events or circumstances beyond our reasonable control (“force majeure”) prevent either of us (“Affected Party”) from fulfilling any of our obligations, those obligations will be suspended to the extent that and for as long as the Affected Party is so prevented.
                  </p>
               </li>
               <li>
                  <p>
                  23.2 These Terms replace all prior written and verbal communications between us about the Service.

                  </p>
               </li>
               <li>
                  <p>
                  28.3 Force majeure includes an unavoidable natural catastrophe (“vis major”), an uncontrollable accident (“casus fortuitus”), any act of nature, strike, theft, riots, explosion, insurrection, war (whether declared or not), military operations, the downtime of any external telecommunications line, power failure, international restrictions, any requirement of any international authority, any requirement of any government or other competent local authority or any court order.
                  </p>
               </li>
            </ul>
         </p>

         <ContentTitle>29. Your queries and complaints. </ContentTitle>
         <p>Please email any queries or complaints to our customer support team at thesvens@22seven.com.</p>
         <ExternalLink href="mailto:thesvens@22seven.com" target="_blank">
               Contact thesvens@22seven.com
               <Arrow src={linkArrow} alt="link" />
         </ExternalLink><br/>

         <ContentTitle>30. The law that applies to these Terms.</ContentTitle>
         <p>
            <ul>
               <li>
                  <p>
                  30.1 If there is any conflict between these Terms and the CPA, the CPA will apply.
                  </p>
               </li>
               <li>
                  <p>
                  30.2 These Terms are governed by and interpreted in accordance with the laws of the Republic of South Africa without giving effect to any principles of conflict of law.
                  </p>
               </li>
               <li>
                  <p>
                  30.3 You consent to the exclusive jurisdiction of the courts of the Republic of South Africa over any dispute about the Services or the Terms.
                  </p>
               </li>
            </ul>
         </p>

         <ContentTitle>31. 22seven’s details.</ContentTitle>
         <p>
            <ul>
               <li>
                  <p>
                  31.1 Full name: 22seven Digital (Pty) Ltd), (Reg No. 2010/011767/07) trading as 22seven
                  </p>
               </li>
               <li>
                  <p>
                  31.2 Physical address (including for receipt of legal service): 60 Hout Street, Cape Town, 8001
                  </p>
               </li>
               <li>
                  <p>
                  31.3 Telephone number:&nbsp;
                     <ExternalLink>
                        +27 87 550 4331
                        <Arrow src={linkArrow} alt="link" />
                     </ExternalLink>
                  </p>
               </li>
               <li>
                  <p>
                  31.4 Website address:&nbsp;
                     <InternalLink href="mailto:thesvens@22seven.com">
                        www.22seven.com
                        <Arrow src={linkArrow} alt="link" />
                     </InternalLink>
                  </p>
               </li>
               <li>
                  <p>
                  31.5 Email address:&nbsp;
                     <ExternalLink href="mailto:thesvens@22seven.com">
                        thesvens@22seven.com
                        <Arrow src={linkArrow} alt="link" />
                     </ExternalLink>
                  </p>
               </li>
            </ul>
         </p>

         <ContentTitle>32. Proof of date of publication and version of terms.</ContentTitle>
         <p>A certificate signed by our Directors will, unless the contrary is proven, be sufficient evidence of</p>
         <p>
            <ul>
               <li>
                  <p>
                  32.1 the date of publication and the content of the Terms and new Terms;
                  </p>
               </li>
               <li>
                  <p>
                  32.2 the date of publication and the content of earlier versions of the Terms;
                  </p>
               </li>
               <li>
                  <p>
                  32.3 the date and content of any communication and notifications sent in terms of the Terms.
                  </p>
               </li>
            </ul>
         </p>
         <p>Copyright in these Terms vests with 22seven Digital (Pty) Ltd</p>
         </Content>
      </Container> 
   )
}

export default TermsContent;
