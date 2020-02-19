import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   font-family: 'CircularStd';
   color: #4e4b6b;
   text-align: center;
   padding-top:80px;



h2 {
   margin-bottom: 80px;
}

`
const Content = styled.div`

display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 100%;
`

const Card = styled.div`
display: flex;
flex-direction: column;

box-shadow: 0px 0px 68px -17px rgba(0,0,0,0.25);
width: 200px;
border-radius: 9px;
padding: 10px 18px 0px 18px;
h3 {
   font-size: 20px;
   margin: 0;
   padding-top: 20px;
}

p { 
   font-size: 11px;
   font-weight: 300;
   line-height: 22px;
}

`

const Circle = styled.div`
   align-items: center;
   margin: -30px auto 0 auto;
   border-radius: 50%;
   width: 45px;
   height: 45px;
   padding: 8px;
   background-color: #69658f;
   color: #fff;
   text-align: center;
   font-size: 19px;
`

const Line = styled.hr`
 width: 60px;
 height: 3px;
 color: #e1e1e9;
 margin: 30px auto;
`

const HowItWorks = () => {
   return (
      <Container>
         <h2>How it works...</h2>
         <Content>
            <Card>
               <Circle>1</Circle>
               <h3>Link your<br />accounts</h3>
               <Line />
               <p>The first thing you’ll do is link your money stuff: cheque and savings accounts, credit and store cards, investments, loans and rewards.</p>
            </Card>
            <Card>
               <Circle>2</Circle>
               <h3>We gather your<br />transactions</h3>
               <Line />
               <p>When you link accounts, 22seven usually gets the last 3 months’ transactions from them. After that, they’re automatically updated whenever you log in, or daily</p>
            </Card>
            <Card>
               <Circle>3</Circle>
               <h3>…and sort<br />them for you</h3>
               <Line />
               <p>22seven identifies each transaction and automatically puts it into a category like Groceries, Rent or Pets. Use existing categories or create your own.</p>
            </Card>
            <Card>
               <Circle>4</Circle>
               <h3>See where your<br />money goes</h3>
               <Line />
               <p>We automatically add up what you spend on each category, each month, so you see exactly where your money goes. Brace yourself: it’s honest about what you do with your money.</p>
            </Card>
         </Content> 
   </Container>
   )
}
export default HowItWorks;