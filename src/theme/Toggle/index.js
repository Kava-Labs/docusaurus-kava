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
import DarkModeIcon from '../../../static/img/darkModeIcon.svg';
import LightModeIcon from '../../../static/img/lightModeIcon.svg';

const ToggleComponent = memo(
  ({
    className,
    switchConfig,
    checked: defaultChecked,
    disabled,
    onChange,
  }) => {
    const { darkIconStyle, lightIconStyle } = switchConfig;
    const darkIcon = (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        \n' + '{' '}
        <path
          d="M14.6827 12.857C10.8614 12.857 7.74413 9.79109 7.74413 6.03285C7.74413 3.75812 8.85027 1.7801 10.5598 0.593286C10.057 0.494385 9.65474 0.494385 9.15195 0.494385C4.42569 0.494385 0.503906 4.25263 0.503906 8.99988C0.503906 13.7471 4.32514 17.5054 9.15195 17.5054C12.6715 17.5054 15.6883 15.4284 16.9955 12.4614C16.2916 12.7581 15.4871 12.857 14.6827 12.857Z"
          stroke="#1E1E1E"
          stroke-miterlimit="10"
        />
        \n' + '
      </svg>
    );
    const lightIcon = (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_7209_80867)">
          <path
            d="M11.9492 4.12017V0"
            stroke="#EEEEEE"
            stroke-miterlimit="10"
          />
          <path
            d="M11.9492 24.0001V19.8799"
            stroke="#EEEEEE"
            stroke-miterlimit="10"
          />
          <path
            d="M0 11.7424H4.12017"
            stroke="#EEEEEE"
            stroke-miterlimit="10"
          />
          <path
            d="M3.39844 20.3949L6.28256 17.5107"
            stroke="#EEEEEE"
            stroke-miterlimit="10"
          />
          <path
            d="M3.50195 3.60522L6.38607 6.48935"
            stroke="#EEEEEE"
            stroke-miterlimit="10"
          />
          <path
            d="M23.7945 12.2576H19.7773"
            stroke="#EEEEEE"
            stroke-miterlimit="10"
          />
          <path
            d="M20.3939 3.60522L17.5098 6.48935"
            stroke="#EEEEEE"
            stroke-miterlimit="10"
          />
          <path
            d="M20.2923 20.3949L17.4082 17.5107"
            stroke="#EEEEEE"
            stroke-miterlimit="10"
          />
          <path
            d="M11.9477 16.6866C14.5076 16.6866 16.5829 14.6114 16.5829 12.0515C16.5829 9.49151 14.5076 7.41626 11.9477 7.41626C9.38775 7.41626 7.3125 9.49151 7.3125 12.0515C7.3125 14.6114 9.38775 16.6866 11.9477 16.6866Z"
            stroke="#EEEEEE"
            stroke-miterlimit="10"
          />
        </g>
        <defs>
          <clipPath id="clip0_7209_80867">
            <rect width="23.794" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );

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
            <span style={lightIconStyle}>{lightIcon}</span>
          ) : (
            <span style={darkIconStyle}>{darkIcon}</span>
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
