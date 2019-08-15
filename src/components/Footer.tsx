import React, { FunctionComponent, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import github from '../img/github.svg';

const Footer: FunctionComponent = () => {
  const FooterContent: ReactNode = (
    <span><a href="https://github.com/SW999/random-number" rel="nofollow" title="Github page"><img src={github} alt="github" width="24" height="24"/></a> © SW999 2019</span>
  );

  return createPortal(FooterContent, document.getElementById('footer'))
};

export default Footer
