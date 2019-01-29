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
                    <h1>FORM TESGING...</h1>
                    <form name="contact" method="POST" data-netlify="true">
                        <p>
                            <label>Your Name: <input type="text" name="name" /></label>
                        </p>
                        <p>
                            <label>Your Email: <input type="email" name="email" /></label>
                        </p>
                        <p>
                            <label>Your Role: <select name="role[]" multiple>
                                <option value="leader">Leader</option>
                                <option value="follower">Follower</option>
                            </select></label>
                        </p>
                        <p>
                            <label>Message: <textarea name="message"></textarea></label>
                        </p>
                        <p>
                            <button type="submit">Send</button>
                        </p>
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
