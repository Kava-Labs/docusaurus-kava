import React from 'react';
import classes from './styles.module.css';

export default function PioneerLink() {
  return (
    <div className={classes.linkWrapper}>
      <hr className={classes.dividerColor} />
      <a href="https://www.kava.io/pioneer">Join the Kava Network</a>
    </div>
  );
}
