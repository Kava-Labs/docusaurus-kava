import React from 'react';
import classes from './styles.module.css';

export default function PioneerLink() {
  return (
    <a className={classes.linkWrapper} href="https://www.kava.io/pioneer">
      <div className={classes.linkBox}>
        <div className={classes.linkText}>Join the Kava Network</div>
      </div>
    </a>
  );
}
