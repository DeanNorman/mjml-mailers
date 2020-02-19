import React from 'react';
import { Link } from "gatsby"
import appStore from '../images/public-mobile-badgeappstore-1@2x.png';
import googlePlay from '../images/public-mobile-badgegoogle-play-1@2x.png';
import styled from 'styled-components';


import youtube from '../images/legalterms-iconyoutube.svg';
import twitter from '../images/about-icontwitter.svg';
import facebook from '../images/jobs-iconfacebook.svg';
import linkedin from '../images/iconlinkedin.svg';
import instagram from '../images/invest-in-your-goals-iconinstagram.svg';
import om from '../images/public-logo-om-mark.svg';


const Container = styled.div`
   display: flex;
   align-items: flex-start;
   justify-content:space-around;
   /* height: 500px; */
   margin-top: 80px;
   /* padding:50px; */
   margin-bottom: 50px;
 
`;

const Column = styled.div`
   display: flex;
   flex-direction: column;

   p {
      font-family: "CircularStd";
      font-weight: bold;
      font-size: 15px;
      color: #4e4b6b;
      margin-bottom: 10px;
   }
`
const NavItem = styled(Link)`
  font-family: "CircularStd";
  font-size: 15px;
  font-weight: 300;
  text-align: left;
  line-height: 30px;
  text-decoration: none;
  color: #4e4b6b;
  /* display: inline-block;
  white-space: nowrap;
  transition: all 200ms ease-in; */
  /* position: relative; */


  &:hover {
   transform: translate( 5px, 0px);
   transition: all 0.2s ease-in-out;
  }
`

const SocialContainer = styled.div`
   display:flex;
   align-items: flex-start;
   justify-content: space-around;

   a:hover {
      transform:translate(0, -5px);
      transition: all 0.2s ease-in-out;
   }
`;


const AppBadgeContainer = styled.div`
display: flex;
a:hover {
   transform: translate( 0px, -5px);
   transition: all 0.2s ease-in-out;
  }

`;

const OldMutualTag = styled.div`
   display: flex;
   align-items: flex-end;
   margin-top: 40px;
   margin-left: 25px;
p {
   font-family: "CircularStd-Book", Helvetica, Arial, serif;
   font-size: 12px;
   padding-left: 10px;
   margin: 0;
}


`;

const AppBadge = styled.img`
   height: 40px;
   width: 131px;
   margin: 20px 1vw;
`
const Foot = styled.div`   
   display: flex;
   flex-direction: column;
   align-content: center;
   justify-content: center;
   height:60px;
   border-top: 1px solid #f6f9ff;
   padding-left: 20px;

   p {
      font-family: "CircularStd-Book", Helvetica, Arial, serif;
      font-size: 12px;
      margin: 0;
      color: #4e4b6b;
   }
`;

export default function Footer() {
   return (
      <>
      <OldMutualTag>
         <img src={om} alt="old mutual" />
         <p>Backed by Old Mutual</p>
      </OldMutualTag>
      <Container>
         <Column>
            <p>Using 22seven</p>
            <NavItem to="/">Security</NavItem>
            <NavItem to="/">Invest in your goals</NavItem>
         </Column>
         <Column>
            <p>Resources</p>
            <NavItem to="/">Help Centre</NavItem>
            <NavItem to="/">Blog</NavItem>
         </Column>
         <Column>
            <p>Legal</p>
            <NavItem to="/">Privacy Policy</NavItem>
            <NavItem to="/">Terms of Service</NavItem>
            <NavItem to="/">Investing T&Cs</NavItem>
            <NavItem to="/">FAIS Disclosures</NavItem>
         </Column>
         <Column>
            <p>Company</p>
            <NavItem to="/">About 22seven</NavItem>
            <NavItem to="/">Jobs</NavItem>
            <NavItem to="/">Contact us</NavItem>
            <NavItem to="/">In the media</NavItem>
            <NavItem to="/">Partners</NavItem>
         </Column>
         <Column social>
            <SocialContainer>
               <a href="https://twitter.com/22seven">
                  <img src={twitter} alt="twitter" />
               </a>
               <a href="https://www.facebook.com/ilike22seven">
               <img src={facebook} alt="facebook" />
               </a>
               <a href="https://www.linkedin.com/company/3309665/admin/">
                  <img src={linkedin} alt="linkedin" />
               </a>
               <a href="https://www.youtube.com/channel/UC67gilqN1j-ZtW_XCNA-ycQ">
                  <img src={youtube} alt="youtube" />
               </a>
               <a href="https://www.instagram.com/ilike22seven/" target="_blank">
                  <img src={instagram} alt="instagram" />
               </a>
            </SocialContainer>
            <AppBadgeContainer>
               <a href="" target="_blank>">
                  <AppBadge src={appStore} />
               </a>
               <a href="" target="_blank>">
                  <AppBadge src={googlePlay} />
               </a>
            </AppBadgeContainer>
         </Column>
      </Container>
      <Foot>
         <p>© 2019 22seven All Rights Reserved. <strong>Old Mutual is a Licensed Financial Services Provider. 22seven is a juristic representative of Old Mutual</strong></p>
      </Foot>
   </>
   )
}
