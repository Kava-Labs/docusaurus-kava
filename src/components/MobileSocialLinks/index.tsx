import React from 'react';
import classes from './style.module.css';
import GithubIcon from '@site/src/components/icons/GithubIcon';
import DiscordIcon from '@site/src/components/icons/DiscordIcon';
import TwitterIcon from '@site/src/components/icons/TwitterIcon';

export default function MobileSocialLinks() {
  return (
    <div className={classes.mobileSocialLinksWrapper}>
      <a className={classes.linkWrapper} href="https://github.com/Kava-Labs">
        <GithubIcon />
      </a>
      <a className={classes.linkWrapper} href="https://discord.gg/JJYnuCx">
        <DiscordIcon />
      </a>
      <a
        className={classes.linkWrapper}
        href="https://twitter.com/kava_platform"
      >
        <TwitterIcon />
      </a>
    </div>
  );
}
