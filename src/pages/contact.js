import React from 'react'
import Layout from '../components/Layout';

const contact = () => {
   return (
      <Layout>
         <div>
            <h1> Get in touch with us.</h1>
         </div>
         <div>
            <img src="lama.animation.jpg" alt="" />
         </div>

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

         <div> 
            <img src="contact-team.jpg" alt=""/>
            <h2>Get really good support from real, live people.</h2>
            <p>The Svens, our support team, are available from 8am and 8pm</p>
            <img src="mail-icon.jpg" alt=""/>
            <a href="#">"thesvens@22seven.com"</a><br/>
            <img src="phone-icon.jpg" alt=""/>
            <a href="#">"+27 87 550 4331"</a><br/>
         </div>
      </Layout>
   )
}

export default contact;