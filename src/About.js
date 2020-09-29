import React from 'react';
import {FirstPage} from './FirstPage';
import {SecondPage} from './SecondPage';


export function About() {
  return (
    <div >
      <FirstPage />
      <div id="second">
        <SecondPage />
     </div>
  </div>
  );
}
