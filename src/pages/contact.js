import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import HeaderContact from '../components/Headers/HeaderContact'
import SvensContact from '../components/Contact/SvensContact'
import ContactDetails from '../components/Contact/ContactDetails'

const contact = () => {
   return (
      <Layout>
         <Helmet>
            <meta charSet="utf-8" />
            <title>22seven | Budgeting and Investing App</title>
            <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>
         <HeaderContact />
         <ContactDetails />


         <div> 
            <img src="mail-icon.jpg" alt=""/>
         </div>

         <div>
            <b><p>By email.</p></b><br/>
            <p>General enquiries and support</p>
            <a href="#">"thesvens@22seven.com"</a><br/>

            <p>Security</p>
            <a href="#">"security@22seven.com"</a><br/>

            <p>Media-related stuff or PR</p>
            <a href="#">"prteam@22seven.com"</a><br/>

            <p>Jobs</p>
            <a href="#">"awesomejobs@22seven.com"</a><br/>
         </div>

         <div> 
            <img src="phone-icon.jpg" alt=""/>
         </div>
    
         <div>
            <b><p>By phone.</p></b><br/>
            <p>The Svens</p>
            <a href="#">"+27 87 550 4331"</a><br/>

            <p>Between 8am and 8pm every day</p>               
         </div>

         <div> 
            <b><h2>HQ. Cape Town</h2></b><br/>

            <p>Come meet us in person</p>
            <p> Find us at 60 Hout Street in Cape Town.</p><br/>

            <a href="#">"Get directions"</a><br/>
         </div>

         <SvensContact />
      </Layout>
   )
}

export default contact;