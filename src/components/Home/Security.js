import React from 'react';
import styled from 'styled-components';
import shield from '../../images/security.svg';
import eye from '../../images/eye.svg';
import fingerClick from '../../images/click.svg';
import yellowGoggles from '../../images/yellowgoggles.svg';
import purpleMountain from '../../images/mountain.svg';


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
const Shield = styled.img`
   padding-bottom: 15px;
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


const Security = () => {
   return (
   <Container>
      <Content>
         <Shield src={shield} alt=""/>         
         <h2>We take security very seriously</h2>
         <p>Your data is secure, private and insured.</p>
         <a href="/">Over 180 000 South Africans trust us with their money stuff. ></a>
      </Content> 

      <Content benefit>
         <Benefit>
            <Circle>
               <Aligner>
                  <img src={eye} alt="eye"/>
               </Aligner>
            </Circle>            
            <p>Keep track of your<br/>money more simply.</p>
         </Benefit>

         <Benefit>
            <Circle>
               <Aligner>
                  <img src={fingerClick} alt="finger click"/>
               </Aligner>
            </Circle>  
               <p>Get a personalised<br/>budget, automatically</p>
         </Benefit>

         <Benefit>
            <Circle>
               <Aligner>
                  <img src={yellowGoggles} alt="22seven goggles"/>
               </Aligner>
            </Circle>
               <p>Find relevant<br/>insights, regularly.</p>
         </Benefit> 

         <Benefit>
            <Circle>
               <Aligner>
                  <img src={purpleMountain} alt="mountain"/>
               </Aligner>
            </Circle>
               <p>Invest in your goals and<br/>reach them sooner.</p>
         </Benefit>

      </Content> 
   </Container> 
   )
}

export default Security;