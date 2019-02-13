//* core
import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';

import {Comments, FacebookProvider} from 'react-facebook';

//* lib
class ContactTemplate extends React.Component {
    //* function
    render() {
        return (
            <Layout>
                <Sidebar/>
                <Page title="Contac me">
                    <FacebookProvider appId="356027551919150">
                        <Comments href="http://www.yeshtml5.com"/>
                    </FacebookProvider>
                </Page>
            </Layout>
        )
    }
}


export default ContactTemplate;
