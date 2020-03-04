import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout'

import HeaderLegal from '../../components/Headers/HeaderLegal'

const faisDisclosures = () => {
   return (
      <Layout>
         <Helmet>
            <meta charSet="utf-8" />
            <title>22seven | Budgeting and Investing App</title>
            <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>

         <HeaderLegal
            title="Here are our FAIS disclosures."
            text="This is legal stuff and has to be worded in Legalish, but we’d be happier if you read it anyway. Luckily, it's short."
         />
      </Layout>
   )
}

export default faisDisclosures;