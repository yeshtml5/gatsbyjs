//* core
import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';

//* lib
class ContactTemplate extends React.Component {
  componentDidMount() {
    (function (d, s, id) {
      let js; const
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&appId=356027551919150&autoLogAppEvents=1&';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  //* function
  render() {
    return (
        <Layout>
            <div id="fb-root"></div>
            <Sidebar/>
            <Page title="Contac me">
                <div className="fb-comments" data-href="https://yeshtml5.com" data-order-by="reverse_time"
                     data-numposts="20"/>
            </Page>
        </Layout>
    );
  }
}


export default ContactTemplate;
