import React, { useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';



export default function Home(): JSX.Element {

  useEffect(()=>{
    window.location.href = "docs/intro";
  }, []);

  return null;
}
