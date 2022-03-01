/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import PaginatorNavLink from '@theme/PaginatorNavLink';
export default function DocPaginator(props) {
  const { previous, next } = props;
  return (
    <nav
      className="pagination-nav docusaurus-mt-lg"
      aria-label={translate({
        id: 'theme.docs.paginator.navAriaLabel',
        message: 'Docs pages navigation',
        description: 'The ARIA label for the docs pagination',
      })}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <div
          style={{
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: '50%',
            maxWidth: '50%',
          }}
        >
          {previous && (
            <PaginatorNavLink
              {...previous}
              subLabel={
                <Translate
                  id="theme.docs.paginator.previous"
                  description="The label used to navigate to the previous doc"
                >
                  Previous
                </Translate>
              }
            />
          )}
        </div>
        <div
          className="pagination-nav__item--next"
          style={{
            /* display: flex; */ flexGrow: 1,
            flexShrink: 1,
            flexBasis: '50%',
            maxWidth: '50%',
          }}
        >
          {next && (
            <PaginatorNavLink
              {...next}
              subLabel={
                <Translate
                  id="theme.docs.paginator.next"
                  description="The label used to navigate to the next doc"
                >
                  Next
                </Translate>
              }
            />
          )}
        </div>
      </div>
    </nav>
  );
}
