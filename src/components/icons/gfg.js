import * as React from 'react';
import gfgImage from '../../../gfgnew.jpeg';

const GfgImage = (props) => (
  <img
    src={gfgImage}
    alt="GeeksforGeeks"
    width={32}
    height={32}
    {...props}
  />
);

export default GfgImage;
