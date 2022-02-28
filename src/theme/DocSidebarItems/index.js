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

// TODO this item should probably not receive the "activePath" props
// TODO this triggers whole sidebar re-renders on navigation
function DocSidebarItems({ items, ...props }) {
  const windowSize = useWindowSize();

  return (
    <DocSidebarItemsExpandedStateProvider>
      {items.map((item, index) => (
        <DocSidebarItem
          key={index} // sidebar is static, the index does not change
          item={item}
          index={index}
          {...props}
        />
      ))}
      {windowSize === 'mobile' && <MobileSocialLinks />}
    </DocSidebarItemsExpandedStateProvider>
  );
} // Optimize sidebar at each "level"

export default memo(DocSidebarItems);
