import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';


import HeaderInvest from '../components/Headers/HeaderInvest';
import SectionOne from '../components/Invest/SectionOne';
import SectionTwo from '../components/Invest/SectionTwo';
import SectionThree from '../components/Invest/SectionThree';
import SectionFour from '../components/Invest/SectionFour';
import SectionFive from '../components/Invest/SectionFive';
import SectionSix from '../components/Invest/SectionSix';

import Twitter from '../components/Invest/Twitter';


export const invest = () => {
   return (
      <Layout>
         <Helmet>
            <meta charSet="utf-8" />
            <title>22seven</title>
            <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>
         <HeaderInvest />
         <SectionOne />
         <SectionTwo />
         <SectionThree />
         <SectionFour />
         <SectionFive />
         <SectionSix />
         <Twitter />

         {/* <div>
            <p>Pssssssst!</p>
            <p>For a limited time, you can put a minimum of R250 into your goals (instead of the usual R350). Once off or monthly. Or both!</p>         
         </div>  */}


         <div>
            <h2>But don&apos; our word for it</h2>
            <div>
               <img src="twitter" alt=""/>
            </div>
         </div> 

         <div>
            <h2>A fund for every goal</h2>
            <p>With the launch of our Money Market fund, we offer the right tools for every goal. Whether you’re saving for something a few months away, or twenty years from now.</p>
            <div>
               <img src="fund1" alt=""/>
               <img src="fund2" alt=""/>
               <img src="fund3" alt=""/>
               <img src="fund4" alt=""/>
            </div>
         </div> 

         <div>
            <div>
               <img src="noBrokers" alt=""/>
               <p>No brokers. No extra fees.</p>
               <p>We offer low cost index tracker unit trust funds. And don’t charge an advice fee. So you’re able to make the most of your money’s growth.</p>
            </div>
            <div>
               <img src="paperless" alt=""/>
               <p>Paperless. And done in minutes.</p>
               <p>No complicated forms. No queues. No calls. And no fuss. You’ll be done in minutes. And when you need to make changes in future that’s all on the app too.</p>
            </div>
            <div>
               <img src="localorint" alt=""/>
               <p>Local or international</p>
               <p>Our funds represent the top listed companies around the world.</p>
            </div>
         </div> 

         <div>
            <img src="taxortaxfree" alt=""/>
            <h2>Tax or tax free.</h2>
            <p>With the launch of tax free savings, you can opt between taxed and tax free investments. We’ll also protect you from over contributing, so you can enjoy your tax freeness!</p>
            <button>Reach your goals now</button>
         </div>
      </Layout>
   )
}

export default invest;