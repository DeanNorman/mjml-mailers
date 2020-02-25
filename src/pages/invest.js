import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';


import HeaderInvest from '../components/Headers/HeaderInvest';
import SectionOne from '../components/Invest/SectionOne';
import SectionTwo from '../components/Invest/SectionTwo';
import SectionThree from '../components/Invest/SectionThree';
import SectionFour from '../components/Invest/SectionFour';


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

         <div>
            <div><img src="section3.jpg" alt=""/></div>
            <div>
               <h2>Invest in your goals.</h2>
               <p>Putting money in a savings account may be familiar. But investing in your goals can be way better.

                  22seven offers low cost funds from one of the most trusted names in the investment business - Old Mutual. So you know your money is safe and working towards your future just as hard as you are</p>
            </div>
         </div> 

         <div>
            <div>
               <h2>Add money whenever you want.</h2>
               <p>If you can’t commit to a monthly contribution right away, no sweat! You can invest in your goals monthly, once off, or both. Toggle debit orders on or off whenever you like, so you have the flexibility to adjust to life as it happens.</p>
            </div>
            <div><img src="section4.jpg" alt=""/></div>
         </div> 

         <div>
            <p>Pssssssst!</p>
            <p>For a limited time, you can put a minimum of R250 into your goals (instead of the usual R350). Once off or monthly. Or both!</p>         
         </div> 

         <div>
            <div><img src="section5.jpg" alt=""/></div>
            <div>
               <h2>Track your progress.</h2>
               <p>Sometimes life gets in the way of our plans despite our best intentions. So we’ve made sure you can track the progress of your goals. See how many days you have to go and if you’re going to reach them on time. Then make changes if you need to.</p>
            </div>
         </div> 

         <div>
            <div>
               <h2>Spend guilt-free.</h2>
               <p>Once you reach your goals, give yourself a pat on the back! You get to spend guilt free, knowing you aren’t dipping into credit to enjoy the things you want. Say goodbye to debt repayment headaches and hello to living.</p>
            </div>
            <div><img src="section6.jpg" alt=""/></div>
         </div> 

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