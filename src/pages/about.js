import React from 'react'
import Layout from '../components/Layout';

const about = () => {
   return (
      <Layout>
         <> 
         <div>
            <h1>A little bit about us.</h1>
            <p>We built 22seven because we think there's a new solution to an old problem.</p>
         </div>
         <div>
            <h2>Our story.</h2>
            <div>
               <p>The old problem is our relationship with money. We all have regrets about things we did, or didn’t do, or don’t think we’ll be able to do, with money. Money feels limiting when it could be liberating.

               The new solution lies in what we know and have now that we didn’t know or have a few years ago. Thanks to new insights in psychology, we know more about how people think and behave with money, and why. Thanks to new technology, we have tools to do things in radically different ways.</p>
            </div>
            <div>
               <p>Using these new insights and smart technology, 22seven can help people do better with their money. To see new things about it, feel more confident about it, find more of it, use it wiser and grow it smarter.

               This was the conviction we launched with as an independent startup in January 2012. It was an ideal Old Mutual shared when they purchased 22seven a year later. Now we’re older, wiser, and more convinced of it than ever.</p>
            </div>
         </div>

         <div>
             <h2>Learn more.</h2>
               <div>
                  <img src="speaker" alt="" />
                  <h3>In the media</h3>
                  <p>Check out what people have been saying about 22seven in the media.</p>
                  <a href="">See what people are saying</a>
               </div>
               <div>
                  <img src="hiring" alt="" />
                  <h3>Jobs</h3>
                  <p>Find out a little more about what we do, why and how we do it, and how you might be able to do it with us.</p>
                  <a href="">Careers at 22seven</a>
               </div>
               <div>
                  <img src="handwave" alt="" />
                  <h3>Get in touch</h3>
                  <p>If you have questions, however simple or technical, we’d like to answer them. Or visit us at the office.</p>
                  <a href=""></a></div>
               <div>
                  <img src="test pilot" alt="" />
                  <h3>Test Pilot community</h3>
                  <p>There’s lots happening at 22seven and we want you to be a part of it. So we’d like to invite you to join our Test Pilot community.</p>
                  <a href="#">Learn More</a>
            </div>
         </div>

         <div>
            <p class="cd-box" id="cd-box">If you have questions, however simple or technical, we&apos;d like to answer them.</p>
            <button>Please email us.</button>
         </div>    
         </>
      </Layout>
   )
}

export default about;