import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

import HeaderHome from '../components/Headers/HeaderHome';
import Security from '../components/Home/Security';
import SectionOne from '../components/Home/SectionOne';
import SectionTwo from '../components/Home/SectionTwo';
import SectionThree from '../components/Home/SectionThree';
import SectionFour from '../components/Home/SectionFour';
import Testimonials from '../components/Home/Testimonials';

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
      <Testimonials />

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
