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
import DarkModeIcon from '@site/src/components/icons/DarkModeIcon';
import LightModeIcon from '@site/src/components/icons/LightModeIcon';

const ToggleComponent = memo(
  ({
    className,
    switchConfig,
    checked: defaultChecked,
    disabled,
    onChange,
  }) => {
    const { darkIconStyle, lightIconStyle } = switchConfig;
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
