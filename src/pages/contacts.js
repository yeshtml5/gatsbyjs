//* Core
import React from 'react';
import ReactUtterences from 'react-utterances';
import axios from 'axios';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';

class ContactTemplate extends React.Component {
    //* const
    repo = 'yeshtml5/blog-comments';

    //* function
    render() {
      return (
            <Layout>
                <Sidebar/>
                <section>
                    <h1>Contact me</h1>
                    <form name="contact" netlify netlify-honeypot="bot-field" hidden>
                        <input type="text" name="name" />
                        <input type="email" name="email" />
                        <textarea name="message"></textarea>
                    </form>

                </section>
                <Page title="Contac me">
                    <ReactUtterences repo={this.repo} type={'pathname'}/>
                </Page>
            </Layout>
      );
    }
}


export default ContactTemplate;
