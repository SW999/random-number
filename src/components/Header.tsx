import * as React from 'react';

type HeaderType = {
  name: string,
  title: string
}

const Header = ({ name = '', title = '' }: HeaderType) => {
  return (
    <h1>{name} <sup className="warning tooltip" data-tooltip={title}>*</sup></h1>
  )
};

export default Header
