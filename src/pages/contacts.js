//* Core
import React from 'react';
import ReactUtterences from 'react-utterances';
import axios from 'axios';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';

//

class ContactTemplate extends React.Component {
  //* function
  render() {
    return (
            <Layout>
                <Sidebar/>
                <Page title="Contac me">
                    <ReactUtterences repo={this.repo} type={'pathname'}/>
                </Page>
            </Layout>
    );
  }
}


export default ContactTemplate;
