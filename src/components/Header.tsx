import * as React from 'react';
import { FunctionComponent } from 'react';

type HeaderType = {
  name: string,
  title?: string
}

export const Header: FunctionComponent<HeaderType> = ({
  name,
  title
}) => (
    <h1>{name} {title && (<sup className="warning tooltip" data-tooltip={title}>*</sup>)}</h1>
  );
