/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { memo } from 'react';
import DocSidebarItem from '@theme/DocSidebarItem';
import {
  DocSidebarItemsExpandedStateProvider,
  useWindowSize,
} from '@docusaurus/theme-common';
import MobileSocialLinks from '@site/src/components/MobileSocialLinks';
import styles from '@site/src/theme/Navbar/styles.module.css';
import Toggle from '@site/src/theme/Toggle';
import { useColorModeToggle } from '@site/src/theme/Navbar';
import '@fontsource/inter';

// TODO this item should probably not receive the "activePath" props
// TODO this triggers whole sidebar re-renders on navigation
function DocSidebarItems({ items, ...props }) {
  const windowSize = useWindowSize();
  const colorModeToggle = useColorModeToggle();

  return (
    <DocSidebarItemsExpandedStateProvider>
      {items.map((item, index) => (
        <>
          <DocSidebarItem
            key={index} // sidebar is static, the index does not change
            item={item}
            index={index}
            {...props}
          />
          {/*only display social links below the very last expanded tab*/}
          {windowSize === 'mobile' && index === items.length - 1 && (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <MobileSocialLinks />
              <Toggle
                className={styles.toggle}
                checked={colorModeToggle.isDarkTheme}
                onChange={colorModeToggle.toggle}
              />
            </div>
          )}
        </>
      ))}
    </DocSidebarItemsExpandedStateProvider>
  );
}

export default memo(DocSidebarItems);
