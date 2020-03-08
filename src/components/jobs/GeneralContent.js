import React from 'react'
import styled from 'styled-components'
import { breakpoints as bp } from '../../styling/index'

import officeImg from '../../images/jobs/office.png'

const Container = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   margin: 0 auto;
`
const Content = styled.div`
   font-family: 'CircularStd';
   color: #4e4b6b;
   display:flex;
   justify-content: center;
   flex-direction: column;
   text-align: center;

   h2 {
      font-size: 30px;
      line-height: 35px;
      margin-bottom: 15px;
   }

   p {
      font-family: "CircularStd-Book", Helvetica, Arial, serif;
      font-size: 14px;
      line-height: 20px;
      max-width: 530px;
      color: #69668e;
   }
`

const ImageContainer = styled.div`
   display: flex;
   flex-basis: 100%;
    justify-content: center;
    margin-top: 60px;
`
const Office = styled.img`
   max-width: 850px;
`



const GeneralContent = ({ title, text, officeImage }) => {
   return (
      <Container>
         <Content>
            <h2>{title}</h2>
            <p>{text}</p>

         </Content>
     
         { officeImage && 
             <ImageContainer>
               <Office src={officeImg} />
            </ImageContainer>
         }
         
      </Container>
   )
}

export default GeneralContent;