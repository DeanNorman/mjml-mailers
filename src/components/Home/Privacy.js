import React from 'react';
import styled from 'styled-components';
import noTouch from '../../images/noTouch.svg';
import umbrella from '../../images/umbrella.svg';
import oldmutual from '../../images/oldmutual.svg';
import lock from '../../images/lock.svg';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   font-family: 'CircularStd';
   color: #4e4b6b;
   text-align: center;
   /* border-bottom: 1px solid gray; */
`
const Content = styled.div`
   display:flex;
   flex-direction: ${props => props.benefit ? 'row' : 'column'};
   justify-content: center;
   padding: 20px 0;
   p {
      font-weight: 300;
      margin-bottom: 10px;
      font-size: 16px;
    }
   a {
      text-decoration: none;
      color: #4e4b6b;
      font-size: 16px;
   }
`
const MoreInfo = styled.span`
  a {
      text-decoration: none;
      color: #4e4b6b;
      font-size: 16px;
   }
`

const Benefit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 200px;
  margin: 10px 30px;

  p { 
      line-height: 23px;
      color: #69668e;
   }
`

const Circle = styled.div`
   display: flex;
   justify-content: center;
   background-color: #fff;
   width: 80px;
   height: 80px;
   border-radius: 1000px; 
   margin: 0.5em;
   box-shadow: 0px 0px 230px 3px rgba(112,112,112,1);
   margin-bottom: 20px;
`

const Aligner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
`
const Lock = styled.img`
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
   align-self: center;
   margin-top: 20px;

   p {
      font-family: 'CircularStd';
      font-weight: 300;
      margin: 0;
      color: #fff;
      align-self:center;
   }
`

const Privacy = () => {
   return (
   <Container>
      <Content>
            <Lock src={lock} alt="lock" />
            <h2>Your information is secure. And it belongs to you.</h2>
            <p>We use the same security measures as banks, governments and the military.<br />
               Your informaation is always encrypted, and we won’t sell your data to third parties.</p>
   
      </Content> 

      <Content benefit>
         <Benefit>
            <Circle>
               <Aligner>
                  <img src={noTouch} alt="eye"/>
               </Aligner>
            </Circle>            
               <p><strong>Read only.</strong></p>
               <p>We can only fetch your information. No one can touch your money.</p>
         </Benefit>

         <Benefit>
            <Circle>
               <Aligner>
                  <img src={umbrella} alt="finger click"/>
               </Aligner>
            </Circle>  
            <p><strong>Insured</strong></p>
            <p>You can feel reassured because we're insured
                  by Beazley.</p>
         </Benefit>

         <Benefit>
            <Circle>
               <Aligner>
                  <img src={oldmutual} alt="22seven goggles"/>
               </Aligner>
            </Circle>
            <p><strong>Backed by Old Mutual.</strong></p>
               <p>One of the biggest, oldest and most trusted financial institutions of South Africa</p>
         </Benefit> 
      </Content> 
      <MoreInfo><a href="/">More about our security ></a></MoreInfo>
      <SignUpBtn href="https://www.22seven.com/app/signup" target="_blank">
                  <p>Sign up. It&apos;s free.</p>
               </SignUpBtn>
   </Container> 
   )
}

export default Privacy;