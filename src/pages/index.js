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
import Privacy from '../components/Home/Privacy';
import HowItWorks from '../components/Home/HowItWorks';

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
      <Privacy />
      <HowItWorks />


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
