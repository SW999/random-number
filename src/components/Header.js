import React from 'react';

const Header = ({ name, title }) => {
  return (
    <h1>{name} <sup className="warning tooltip" data-tooltip={title}>*</sup></h1>
  )
};

export default Header
