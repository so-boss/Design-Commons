import React from 'react';
import Layout from '@theme/Layout';

//import styles from './hello.module.scss';

import Icon_Auto from '@site/static/icons/svg/fill/fill-auto.svg';



function Hello() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Edit <code>pages/hello.js</code> and save to reload.
        </p>
      </div>
      <div>
        <Icon_Auto title="Docusaurus Logo" className="logo" />
      </div>
    </Layout>
  );
}

export default Hello;
