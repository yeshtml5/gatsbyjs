import React from 'react';
import styles from './Copyright.module.scss';


const Copyright = () => (
    <p className={styles['copyright']}>
        © 2019 wanhwi.son <br/>
        Powered by <a href="#">GatsbyJS</a> & <a href="#">ReactJS</a> <br/>Hosted by <a href="#">Netlif</a>y Source code on <a href="#" target="_blank">GitHub</a>
    </p>
);

export default Copyright;
