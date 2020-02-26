import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

import HeaderAbout from '../components/Headers/HeaderAbout';
import OurStory from '../components/About/OurStory';

const about = () => {
   return (
      <Layout>

         <Helmet>
            <meta charSet="utf-8" />
            <title>22seven</title>
            <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>

         <HeaderAbout />
         <OurStory />

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
      </Layout>
   )
}

export default about;