/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState, useRef, useEffect, memo } from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { translate } from '@docusaurus/Translate';
import clsx from 'clsx';
import styles from './styles.module.css'; // Based on react-toggle (https://github.com/aaronshaf/react-toggle/).
import DarkModeIcon from '@site/src/components/DarkModeIcon';
import LightModeIcon from '@site/src/components/LightModeIcon';

const ToggleComponent = memo(
  ({
    className,
    switchConfig,
    checked: defaultChecked,
    disabled,
    onChange,
  }) => {
    const { darkIconStyle, lightIconStyle } = switchConfig;
    // const darkIcon = (
    //   <svg
    //     width="18"
    //     height="18"
    //     viewBox="0 0 18 18"
    //     fill="none"
    //     xmlns="http://www.w3.org/2000/svg"
    //   >
    //     \n' + '{' '}
    //     <path
    //       d="M14.6827 12.857C10.8614 12.857 7.74413 9.79109 7.74413 6.03285C7.74413 3.75812 8.85027 1.7801 10.5598 0.593286C10.057 0.494385 9.65474 0.494385 9.15195 0.494385C4.42569 0.494385 0.503906 4.25263 0.503906 8.99988C0.503906 13.7471 4.32514 17.5054 9.15195 17.5054C12.6715 17.5054 15.6883 15.4284 16.9955 12.4614C16.2916 12.7581 15.4871 12.857 14.6827 12.857Z"
    //       stroke="#1E1E1E"
    //       stroke-miterlimit="10"
    //     />
    //     \n' + '
    //   </svg>
    // );

    const [checked, setChecked] = useState(defaultChecked);
    const [focused, setFocused] = useState(false);
    const inputRef = useRef(null);
    useEffect(() => {
      setChecked(defaultChecked);
    }, [defaultChecked]);

    return (
      <div>
        <button
          onClick={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            border: 'none',
            backgroundColor: 'inherit',
            cursor: 'pointer',
          }}
        >
          {checked ? (
            <span style={lightIconStyle}>
              <LightModeIcon />
            </span>
          ) : (
            <span style={darkIconStyle}>
              <DarkModeIcon />
            </span>
          )}
        </button>
      </div>
    );
  }
);
export default function Toggle(props) {
  const {
    colorMode: { switchConfig },
  } = useThemeConfig();
  const isBrowser = useIsBrowser();
  return (
    <ToggleComponent
      switchConfig={switchConfig}
      disabled={!isBrowser}
      {...props}
    />
  );
}
