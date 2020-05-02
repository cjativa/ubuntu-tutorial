import React, { Component } from 'react';
import { render } from 'react-dom';
import './styles.scss';

const Application = () => {

  const config = {
    name: `Me`,
    computer: `Ubuntu`
  };

  return (
    <div className="application">
    </div>
  )
}

render(<Application />, document.getElementById('root'));
