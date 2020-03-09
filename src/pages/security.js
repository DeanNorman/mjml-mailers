import React from 'react'
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';

import HeaderSecurityAnimated from '../components/Headers/HeaderSecurityAnimated';
import SecurityBenefits from '../components/Security/SecurityBenefits';
import SecurityInformation from '../components/Security/SecurityInformation';
import SecurityQuestions from '../components/Security/SecurityQuestions'

const security = () => {
   return (
      <Layout>
            <Helmet>
            <meta charSet="utf-8" />
            <title>22seven | Budgeting and Investing App</title>
            <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>
      <HeaderSecurityAnimated /> 
      <SecurityBenefits />
      <SecurityInformation />
      <SecurityQuestions />
      </Layout>
   )
}

export default security;