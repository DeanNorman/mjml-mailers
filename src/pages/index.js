import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

import HeaderHome from '../components/Headers/HeaderHome';
import Security from '../components/Home/Security';
import SectionOne from '../components/Home/SectionOne';
import SectionTwo from '../components/Home/SectionTwo';
import SectionThree from '../components/Home/SectionThree';
import SectionFour from '../components/Home/SectionFour';

const index = () => {
   return (
      <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

      <HeaderHome />
      <Security />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />



      <div>
         <h2>Our customers say the nicest things.</h2>
         <div>
            <div>
               <img src="yellowApos" alt=""/>
               <p>I love it, it helped me detect when my insurance charged me twice</p>
               <p>It’s my 3rd day using this app and I love it already; an insurance company deducted money twice from my account; I was not aware of it and the app could pick that up for me so I was able to get my money and the app could pick that up for me so I was to get my money back; thank you very much.</p>
               <p>Letshego, Dec 2017</p>
               <img src="yellowStars.jpg" alt=""/>
            </div>
            <div>
               <img src="greenApos" alt=""/>
               <p>Thanks to 22seven I’m debt free</p>
               <p>Yay!! When I made a decision 6 months ago to turn my financial life around, I started doing research and came across 22seven. You’ve certainly made sticking to that decision a lot easier. Today I’m debt free. From a debt of R40 000 6 months ago… may you keep nudging me as I move from debt to building an emergency fund and eventually growing my wealth through savings and investments.</p>
               <p>Thandekile, Jan 2018</p>
               <img src="greenStars.jpg" alt=""/>
            </div>
            <div>
               <img src="purpleApos" alt=""/>
               <p>The best app I have used in 2018</p>
               <p>This is by far the best app I have used in 2018. Why did it take me so long to get it?!
                  It helps me keep track of all my spending- to the cent. I am more aware of my spending habits as all my accounts are linked to the app. If you need budgeting tools and a reality check about your spending, this is the best app for you. If you have a goal you are saving towards, this is for you - as the app tells you how much you need to save per month to reach your goal. It’s WONDERFULL!!!!!</p>
               <p>Manileng, Dec 2018</p>
               <img src="purpleStars.pg" alt=""/>
            </div>
         </div>
      </div> 

      <div>
         <div>
            <img src="lock.jpg" alt=""/>
            <h2>Your information is secure. And it belongs to you.</h2>
            <p>We use the same security measures as banks, governments and the military.
               Your information is always encrypted, and we won’t sell your data to third parties.</p>
         </div>

         <div>
            <div>
               <img src="read-only" alt=""/>
               <p>Read only.</p>
               <p>We can only fetch your information. No one can touch your money.</p>
            </div>
            <div>
               <img src="insured" alt=""/>
               <p></p>
               <p>You can feel reassured because we're insured
                  by Beazley.</p>
            </div>
            <div>
               <img src="backed by old mutual" alt=""/>
               <p>Backed by Old Mutual.</p>
               <p>One of the biggest, oldest and most trusted financial institutions of South Africa</p>
            </div>
         </div>
         <div>
            <a href="#">More about our security ></a>
            <button>Sign up. It&apos;s free.</button>
         </div>
      </div>

      <div>
         <h1>How it works...</h1>
         <div>
            <div>1</div>
            <h3>Link your accounts</h3>
            <p>The first thing you’ll do is link your money stuff: cheque and savings accounts, credit and store cards, investments, loans and rewards.</p>
         </div>
         <div>
            <div>2</div>
            <h3>We gather your transactions</h3>
            <p>When you link accounts, 22seven usually gets the last 3 months’ transactions from them. After that, they’re automatically updated whenever you log in, or daily</p>
         </div>
         <div>
            <div>3</div>
            <h3>…and sort them for you</h3>
            <p>22seven identifies each transaction and automatically puts it into a category like Groceries, Rent or Pets. Use existing categories or create your own.</p>
         </div>
         <div>
            <div>4</div>
            <h3>See where your money goes</h3>
            <p>We automatically add up what you spend on each category, each month, so you see exactly where your money goes. Brace yourself: it’s honest about what you do with your money.</p>
         </div>
      </div> 

      <div>
         <img src="svens.jpg" alt=""/>
         <h2>Get really good support from real, live people.</h2>
         <p>The Svens, our support team, are available from 8am to 8pm.</p>
         <a href="#">thesvens@22sven.com</a>
         <a href="#">+27 87 8550 4331</a>
      </div>
   
      </Layout>
   )
}

export default index;
