import React from 'react'
import Layout from '../components/Layout';

const partners = () => {
   return (
      <Layout>
         <div>
            <h1>Partners.</h1>
            <p> While we aim to use insights and smart technology to help people do better with their money, we also believe that finding the right collaborations can further this goal.</p></div>
         <div>
            <div>
               <img src="shakinghandsheart-icon.jpg" alt=""/>
            </div>
            <h2>Our Partners</h2>
            <p>That’s why we’ve partnered with these guys to help people show their money who’s boss:</p>
         </div> 
         <div> 
            <div>
               <img src="uber-icon.jpg" alt=""/>
            </div>
            <div>
               <h2>Uber</h2>
               <p>We’ve team up with Uber to help their drivers better navigate the financial world. Using custom-built nudges that feature insights uniquely relevant to them, and workshops designed around their specific cash flow, Uber drivers will now be more confident with their money and have better financial know-how.</p>

               <a href="#">"Signup to 22Seven"</a>
            </div>
         </div>
      </Layout>
   )
}

export default partners;