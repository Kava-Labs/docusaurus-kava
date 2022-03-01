/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Link from '@docusaurus/Link';
export default function PaginatorNavLink(props) {
  const { permalink, title, subLabel } = props;
  return (
    <Link to={permalink} style={{ color: 'var(--ifm-navbar-link-color)' }}>
      {subLabel && <div className="pagination-nav__sublabel">{subLabel}</div>}
      <h3 className="pagination-nav__label">{title}</h3>
    </Link>
  );
}
