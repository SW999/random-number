import React, { memo } from 'react';
import { createPortal } from 'react-dom';
import github from '~img/github.svg';

const version =
  process.env.NODE_ENV === 'test' ? '1.0.0' : process.env.npm_package_version;

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

  return createPortal(FooterContent, document.getElementById('footer'));
}

export default memo(Footer);
