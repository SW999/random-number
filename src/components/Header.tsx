import React, { FunctionComponent, memo } from 'react';

type HeaderType = {
  name: string;
  title?: string;
};

const Header: FunctionComponent<HeaderType> = ({ name, title }) => (
  <h1>
    {name}{' '}
    {title && (
      <sup className="warning tooltip" data-tooltip={title}>
        *
      </sup>
    )}
  </h1>
);

export default memo(Header);
