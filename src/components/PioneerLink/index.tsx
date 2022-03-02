import styles from '@site/src/theme/DocSidebar/styles.module.css';
import React from 'react';
import classes from './styles.module.css';

export default function PioneerLink() {
  return (
    <div className={classes.linkWrapper}>
      <hr style={{ borderColor: '#FF564F' }} />
      <a style={{ textDecoration: 'none' }} href="https://www.kava.io/pioneer">
        Join the Kava Network
      </a>
    </div>
  );
}
