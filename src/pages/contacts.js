import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';

import ReactUtterences from 'react-utterances'

const repo = 'yeshtml5/blog-comments'
const ContactTemplate = () => (
    <Layout>
        <Sidebar/>

        <Page title="making..">
            <ReactUtterences repo={repo} type={'pathname'} />
        </Page>
    </Layout>
);

export default ContactTemplate;
