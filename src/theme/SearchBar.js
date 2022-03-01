/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// By default, the classic theme does not provide any SearchBar implementation
// If you swizzled this, it is your responsibility to provide an implementation
// Tip: swizzle the SearchBar from the Algolia theme for inspiration:
// npm run swizzle @docusaurus/theme-search-algolia SearchBar
// export {default} from '@docusaurus/Noop';

import React from 'react';
import { useWindowSize } from '@docusaurus/theme-common';

export default function SearchBar() {
  const windowSize = useWindowSize();

  //  todo - get search from another theme so we don't rebuild mobile design
  return windowSize === 'desktop' ? (
    <input />
  ) : (
    <div style={{ display: 'flex', alignItems: 'center', marginRight: '24px' }}>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="6.5" cy="6.5" r="6" stroke="#1E1E1E" />
        <line
          x1="10.3536"
          y1="10.6464"
          x2="14.3536"
          y2="14.6464"
          stroke="#1E1E1E"
        />
      </svg>
    </div>
  );
}
