import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';

const ContactTemplate = () => (
    <Layout>
        <Sidebar/>
        <Page title="some text">
           TEST
        </Page>
    </Layout>
);


export default ContactTemplate;
