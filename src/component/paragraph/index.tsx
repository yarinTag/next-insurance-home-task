import React, { JSX } from 'react';

import './paragraph.css';

const Paragraph: React.FC<{ text: JSX.Element }> = ({ text }) => {
  return (
    <div className='paragraph-container'>
      <p className='paragraph'>{text}</p>
    </div>
  );
};

export default Paragraph;
