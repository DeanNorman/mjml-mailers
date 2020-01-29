import React from 'react'
import Layout from '../components/Layout';

const security = () => {
   return (
      <Layout>
<div>
      <h1>We take security very seriously.</h1>
   </div>

   <div>
      <div>
         <img src="building" alt=""/>
         <p>We use the same security measures as your bank does</p>
         <p>22seven adheres to the same procedures and standards used by banks, the military and governments around the world. Our security is also regularly, independently reviewed and audited by industry experts.</p>
      </div>
      <div>
         <img src="entrust" alt=""/>
         <p>Your information is always encrypted</p>
         <p>256-bit encryption, certified by Entrust, keeps your information indecipherable and private, always</p>
      </div>
      <div>
         <img src="umbrella" alt=""/>
         <p>You can feel reassured because we’re insured</p>
         <p>22seven is insured by Beazley. So if your information is compromised because of our negligence – which we never expect to happen – we’re covered and will refund you</p>
      </div>
      <div>
         <img src="notouch" alt=""/>
         <p>22seven is READ ONLY. No one can touch your money.</p>
         <p>22seven adheres to the same procedures and standards used by banks, the military and governments around the world. Our security is also regularly, independently reviewed and audited by industry experts.</p>
      </div>
   </div>

   <div>
      <div>
         <h3>How your account login details are kept safe.</h3>
         <p>The usernames, passwords and other authentication information you provide to us are passed, in encrypted format, directly through to Yodlee – our information aggregation partner. 22seven never stores them. Yodlee stores them in encrypted format and only the system that actually collects your information is able to decrypt them when required to do so. At no time can 22seven or Yodlee staff access your credentials. Yodlee’s security overview provides more information on their security.</p>
         <a href="#">
            More about our Yodlee Security
        </a>
        <a href="#">
         FNB client? Set up an FNB  “view-only” profile    
        </a>
      </div>
      <div>
         <h3>How your information is kept secure while travelling over the internet.</h3>
         <p>All information that is transferred over the Internet between your computer or device and our servers is encrypted using 256-bit encryption. We use an Extended Validation SSL certificate provided by Entrust - a globally trusted digital certificate authority. This ensures that, even if intercepted, your information remains protected. In addition, all information transferred between our servers and those of our service providers, like Yodlee, is encrypted. This ensures that at no time is your information visible in clear-text whilst in transit.</p>
         <a href="#">More about Entrust ></a>
      </div>
      <div>
         <h3>How the physical servers that hold your information are secured.</h3>
         <p>All our servers are hosted in a secure Internet hosting facility operated by an industry-leading hosting-provider. Their facilities are certified against the internationally recognised ISO27001 security standard and validated under the Payment Card Industry Data Security Standard (PCI DSS).</p>
         <a href="#">More about PCI DSS ></a>
      </div>
      <div>
         <h3>How we know our security is up to standard.</h3>
         <p>We regularly have our security posture reviewed by industry-experts. These assessments look at the security of our technical infrastructure (servers, firewalls, networks etc.), our applications (including our website and internal systems) as well as our software development and deployment standards and practices. We immediately address any areas that pose a viable security risk.</p>
         <a href="">Need more peace of mind?</a>
      </div>
      <div>
         <h3>How we’re insured.</h3>
         <p>22seven is covered by Beazley, the world's leading cyber insurer. If data or information that you’ve entrusted to us is lost, stolen or compromised because of something we or Yodlee did (or didn’t do), and money is stolen from you because of it, we’re insured and will refund you. If you have a claim, it needs to be validated, and we will help you with the investigation.</p>
         <a href="">More about Beazley ></a>
      </div>
      <div>
         <h3>Who has access to the servers and other technology that holds your information.</h3>
         <p>Access to our servers, databases and other infrastructure as well as internal systems is very tightly restricted. Only the 22seven team members who absolutely have to have access are able to do so. We regularly review each individual’s access rights and make necessary changes to ensure that we adhere to our ‘only the information you need’ policy.</p>
         <a href="">Help centre conversation</a>
      </div>
   </div>

   <div>
      <p>If you have questions, however simple or technical, we’d like to answer them.</p>
      <button>Please email us.</button>
   </div>
      </Layout>
   )
}

export default security;