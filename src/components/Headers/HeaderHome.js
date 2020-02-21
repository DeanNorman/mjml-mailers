import React from 'react';
import styled, { css } from 'styled-components';
import curve from '../../images/homepageCurves/public-header.svg';
import playButton from '../../images/play-button.svg';
import phone from '../../images/public-header.png';
import appStore from '../../images/public-mobile-badgeappstore-1@2x.png';
import googlePlay from '../../images/public-mobile-badgegoogle-play-1@2x.png';

import background from '../../images/homepageCurves/public-header.svg';

import { breakpoints as bp } from '../../styling/index';

const Container = styled.div`
   display: flex;
   justify-content: center;

   background-color: #4e4b6b;
   color: #fff;
   height: 503px;

   background: url(${background}) no-repeat center;
   background-size: cover;
`

const Content = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-around;

   p {
      font-family: 'CircularStd';
      font-weight: 300;
      line-height: 20px;
   }
`

const Column = styled.div`
   width: 50%;
   display: ${props => props.right ? 'flex' : 'block'};

   ${props => props.right ? ''
      : css`
         padding-left: 20px;
      `
   }
`

const Title = styled.h1`
   font-size: 30px;

   ${bp.sm`
      font-size: 50px;
   `}
`

const Description = styled.p`
   font-size: 13px;

   ${bp.sm`
      font-size: 16px;
   `}
`

const Phone = styled.img`
   height: 339px;
   width: 193px;

   ${bp.md`
      height: 527px;
      width: 299px;
      margin-bottom: -210px;
   `}
`

const AppLink = styled.img`
    height: 42px;
    width: 139px;
    margin: 10px 0;

`

const AppLinksContainer = styled.div`
   display: flex;
   flex-direction: row;
   height: 100%;
   width: 100%;
   align-self: center;
   justify-content: space-between;

   ${bp.md`
      flex-direction: row;
   `}
`

const SignUpBtn = styled.a`
   display: none;
   background-color: #13c6b9;
   height: 45px;
   width: 100%;
   border-radius: 4px;
   justify-content: center;
   align-content: center;
   text-decoration: none;
   margin-bottom: 10px;

   p {
      font-family: 'CircularStd';
      font-weight: 300;
      font-size: 17px;
      margin: 0;
      color: #fff;
      align-self:center;
   }

   ${bp.md`
      display: inline-flex;
      width: 176px;
   `}
`

const MobileSignUpBtn = styled.a`
   display: inline-flex;
   background-color: #13c6b9;
   height: 45px;
   width: 100%;
   border-radius: 4px;
   justify-content: center;
   align-content: center;
   text-decoration: none;

   p {
      font-family: 'CircularStd';
      font-weight: 300;
      font-size: 17px;
      margin: 0;
      color: #fff;
      align-self:center;
   }

   ${bp.md`
      display: none;
   `}
`
const WatchVideo = styled.a`
   text-decoration: none;
   display: inline-flex;
   color: #fff;
   align-items: center;
   justify-content: center;
   margin-bottom: 10px;
   
   width: 153px;
   justify-content: space-evenly;
   p { 
      margin: 0
   }

   ${bp.sm`
   margin-top: 20px;
      margin-left:10px;
   `}

${bp.md`

      margin-left:10px;
   `}
`

const MobileColumn = styled.div`
   display: flex;
   flex-direction: column;
   width: 75%;
   max-width: 320px;

   ${bp.md`
      display: none;
   `}
`
const PlaystoreDesktop = styled.a`
   display: none;

   ${bp.md` display: inline-block;`}
`;
const AppstoreDesktop = styled.a`
      display: none;

${bp.md`
   display: inline-block;
   margin-left: 15px;
`}
`;

const HeaderHome = () => {
   return (
      <Container>
         <Content>
             <Column>
               <Title>Boss your money.</Title>
               <Description>Manage your money more easily and invest
                  in your goals with the free 22seven app.</Description>
               
               <SignUpBtn href="https://www.22seven.com/app/signup" target="_blank">
                  <p>Sign up. It&apos;s free.</p>
               </SignUpBtn>

               <WatchVideo href="https://vimeo.com/310103079" target="_blank">
                  <img src={playButton} alt="play" />
                  <p>Watch the video</p>
               </WatchVideo>
              
                  <PlaystoreDesktop href="https://play.google.com/store/apps/details?id=com.twentytwoseven.android" target="_blank>">
                     <AppLink src={googlePlay} alt="Googleplay"/>
                  </PlaystoreDesktop>
                  <AppstoreDesktop href="https://apps.apple.com/us/app/apple-store/id611120440" target="_blank>">
                     <AppLink src={appStore} alt="appstore"/>
                  </AppstoreDesktop>
            
            </Column> 
            
            <Column right>
               <Phone src={phone} alt="iphone" />
            </Column>

            <MobileColumn>
               <MobileSignUpBtn href="https://www.22seven.com/app/signup" target="_blank">
                  <p>Sign up. It&apos;s free.</p>
               </MobileSignUpBtn>
               <AppLinksContainer>
                  <a href="https://play.google.com/store/apps/details?id=com.twentytwoseven.android" target="_blank>">
                     <AppLink src={googlePlay} alt="Googleplay"/>
                  </a>
                  <a href="https://apps.apple.com/us/app/apple-store/id611120440" target="_blank>">
                     <AppLink src={appStore} alt="appstore"/>
                  </a>
               </AppLinksContainer>
            </MobileColumn> 

         </Content>
      </Container> 
   )
}

export default HeaderHome;
