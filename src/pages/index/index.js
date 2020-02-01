import React from 'react';
import ReactDom from 'react-dom';
import styles from './index.scss';

const App = () => {
  return <p className={styles.app}>hello</p>;
};

ReactDom.render(<App/>, document.querySelector('.container'));
