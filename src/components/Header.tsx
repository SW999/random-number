import React, { FunctionComponent } from 'react';

type HeaderType = {
  name: string,
  title: string
}

const Header: FunctionComponent<HeaderType> = ({ name, title }) => {
  return (
    <h1>{name} <sup className="warning tooltip" data-tooltip={title}>*</sup></h1>
  )
};

export default Header
