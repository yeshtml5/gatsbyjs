import React from 'react';
import styles from './Copyright.module.scss';


const Copyright = () => (
    <p className={styles['copyright']}>
        © 2019 wanhwi.son <br/>
        Powered by <a href="https://www.gatsbyjs.org/" target="_blank">GatsbyJS</a> & <a href="https://reactjs.org/" target="_blank">ReactJS</a> <br/>Hosted by <a href="https://www.netlifycms.org/" target="_blank">Netlif</a>y Source code on <a href="https://github.com/yeshtml5/gatsbyjs" target="_blank">GitHub</a>
    </p>
);

export default Copyright;
