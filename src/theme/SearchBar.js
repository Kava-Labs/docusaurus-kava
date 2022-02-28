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
  return windowSize === 'desktop' ? <input /> : <div>Search icon</div>;
}
