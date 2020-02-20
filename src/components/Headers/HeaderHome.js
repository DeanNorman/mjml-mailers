import React from 'react';
import styled from 'styled-components';
import curve from '../../images/homepageCurves/public-header.svg';
import playButton from '../../images/play-button.svg';
import phone from '../../images/public-header.png';
import appStore from '../../images/public-mobile-badgeappstore-1@2x.png';
import googlePlay from '../../images/public-mobile-badgegoogle-play-1@2x.png';

const Container = styled.div`
   display: flex;
   justify-content: center;
   background-color: #4e4b6b;
   color: #fff;
   height: 503px;
`

const Content = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   /* min-width: 1160px; */

   p {
      font-family: 'CircularStd';
      font-weight: 300;
      font-size: 16px;
      line-height: 20px;
   }
`

const Column = styled.div`
   display: ${props => props.right ? 'flex' : 'block'};
`

const Phone = styled.img`
   height: 527px;
   width: 299px;
   margin-bottom: -210px;
`

const AppLink = styled.img`
    height: 42px;
    width: 139px;
    margin: 10px 0;
`

const AppLinksContainer = styled.div`
   display: inline-flex;
   flex-direction: column;
   height: 100%;
   align-self: center;
   justify-items: space-evenly;
`

const SignUpBtn = styled.a`
   
   display: inline-flex;
   background-color: #13c6b9;
   height: 45px;
   width: 176px;
   border-radius: 4px;
   justify-content: center;
   align-content: center;
   text-decoration: none;

   p {
      font-family: 'CircularStd';
      font-weight: 300;
      margin: 0;
      color: #fff;
      align-self:center;
   }
`
const WatchVideo = styled.a`
   text-decoration: none;
   display: inline-flex;
   color: #fff;
   align-items: center;
   justify-content: center;
   margin-left:10px;
   width: 153px;
   justify-content: space-evenly;
   p { margin: 0}
`


const HeaderHome = () => {
   return (
      <Container>
         <Content>
            <Column>
               <h1>Boss yours money.</h1>
               <p>Manage your money more easily and invest<br />
                  in your goals with the free 22seven app.</p>
               
               <SignUpBtn href="https://www.22seven.com/app/signup" target="_blank">
                  <p>Sign up. It&apos;s free.</p>
               </SignUpBtn>

               <WatchVideo href="https://vimeo.com/310103079" target="_blank">
                  <img src={playButton} alt="play" />
                  <p>Watch the video</p>
               </WatchVideo>
            </Column> 
            
            <Column right>
               <Phone src={phone} alt="iphone" />
               <AppLinksContainer>
                  <AppLink src={googlePlay} alt="Googleplay"/>
                  <AppLink src={appStore} alt="appstore"/>
               </AppLinksContainer>
            </Column>
         
         </Content>
      </Container> 
   )
}

export default HeaderHome;
