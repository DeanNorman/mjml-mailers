import React from 'react';
import styled from 'styled-components'

import { breakpoints as bp } from '../../styling/index'

import story from '../../images/about/story.svg';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   font-family: "CircularStd-Book", Helvetica, Arial, serif;
   color: #4e4b6b;
`

const Content = styled.div`
   display: flex;
   flex-direction: center;
   justify-content: center;
   text-align: center;
   flex-wrap: wrap;
   padding: 0 20px;

   p {
      font-weight: 300;
      font-size: 14px;
      line-height: 22px;
   }


   ${bp.sm`
      flex-direction: row;
      
      div {
         flex-direction: row;
         width: 40%;
         padding: 0 20px;
         text-align: left;
         justify-content: space-evenly;
      }      
   `}

`

const Title = styled.h2`
   font-size: 37.0px;
   line-height: 35.0px;
   
    ${bp.sm`
      font-size: 30.531px;
      line-height: 54.045px;
    `}
`

const Card = styled.div`

`

const OurStory = () => {
   return (
      <Container>
         <Title>Our story.</Title>
         <Content>
            <div>
               <p>The old problem is our relationship with money. We all have regrets about things we did, or didn’t do, or don’t think we’ll be able to do, with money. Money feels limiting when it could be liberating.<br /><br />

               The new solution lies in what we know and have now that we didn’t know or have a few years ago. Thanks to new insights in psychology, we know more about how people think and behave with money, and why. Thanks to new technology, we have tools to do things in radically different ways.</p>
            </div>
            <div>
               <p>Using these new insights and smart technology, 22seven can help people do better with their money. To see new things about it, feel more confident about it, find more of it, use it wiser and grow it smarter.<br /><br />

               This was the conviction we launched with as an independent startup in January 2012. It was an ideal Old Mutual shared when they purchased 22seven a year later. Now we’re older, wiser, and more convinced of it than ever.</p>
            </div>
            <img src={story} alt="22seven story" />
         </Content>
         <Content>
            <Card>
               <h3>In the media</h3>
               <p>Check out what people have been saying about 22seven in the media.</p>
               <a href="/">See what people are saying</a>
            </Card>
         </Content>
      </Container> 
   )
}

export default OurStory;
