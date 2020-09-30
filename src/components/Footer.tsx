import React, { memo } from 'react';
import { createPortal } from 'react-dom';
import { version } from '../../package.json';
import github from '../img/github.svg';

const footerEl: HTMLElement | null = document.getElementById('footer');

function Footer() {
  const FooterContent = (
    <span>
      <a
        href="https://github.com/SW999/random-number"
        rel="nofollow"
        title="Github page"
      >
        <img src={github} alt="github" width="24" height="24" />
      </a>{' '}
      | Siarhei Vaitehovich | {`v. ${version}`}
    </span>
  );

  return footerEl === null ? null : createPortal(FooterContent, footerEl);
}

export default memo(Footer);
