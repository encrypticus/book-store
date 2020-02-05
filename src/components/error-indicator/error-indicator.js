import React from 'react';
import styles from './error-indicator.scss';
import url from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className={styles["error-indicator"]}>
      <img className={styles["error-indicator__img"]} src={url} alt="error"/>
      <span className={styles["error-indicator__boom"]}>OOOPS!!!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (but we already sent guys to fix it)
      </span>
    </div>
  );
};

export default ErrorIndicator;
