import React from "react"
import styled from "styled-components"
import appStore from '../images/public-mobile-badgeappstore-1@2x.png';
import googlePlay from '../images/public-mobile-badgegoogle-play-1@2x.png';
import { Link } from "gatsby"

const NavItem = styled(Link)`
  font-family: "CircularStd";
  text-align: left;
  line-height: 13.0px;
  text-decoration: none;
  color: #fff;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  /* :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  } */

  @media (max-width: 768px) {
    padding: 20px 0;
    /* font-size: 1.5rem; */
    z-index: 6;
  }
`

const LoginSigupButtons = styled.div`
   @media (max-width: 768px) {
      display: inline; 
  }
`

const SignUp = styled(Link)`
  font-family: "CircularStd";
  text-align: left;
  line-height: 13.0px;
  text-decoration: none;
  color: #fff;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  background-color: #13c6b9;
  padding: 10px 18px ;
  border-radius: 3px;
`

const LogIn = styled(Link)`
  font-family: "CircularStd";
  text-align: left;
  line-height: 13.0px;
  text-decoration: none;
  color: #fff;
  display: inline-block;
  white-space: nowrap;
  margin: 0 0.3vw;
  transition: all 200ms ease-in;
  position: relative;

  border: #fff solid 1px;
  padding: 9px 18px ;
  border-radius: 3px;
`

const AppStoreBadges = styled.div`
   display: none;
   @media (max-width: 768px) {
      display: block;
      margin-top: 24px;
      border-top: 1px solid #ffffff2b;
  }
`
const AppBadge = styled.img`
   height: 40px;
   width: 131px;
   margin: 20px 1vw;
`




const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Invest in your goals</NavItem>
      <NavItem to="/">Help Centre</NavItem>
      <NavItem to="/">Blog</NavItem>
      
      <LoginSigupButtons>
         <SignUp to="/">Sign up</SignUp>
         <LogIn to="/">Log in</LogIn>
      </LoginSigupButtons>
      

      <AppStoreBadges>
         <AppBadge src={appStore} />
         <AppBadge src={googlePlay} />
      </AppStoreBadges>
   
    </>
  )
}

export default NavbarLinks;