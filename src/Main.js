import React, { useState } from 'react';
import {Search} from './Search';


export const Main = (props) =>{
//  const [isVisible, setIsVisible] = useState(false);

  return(
    <div>


      <Search/>
      <div onClick={() => props.onPageChange(1)}>Подробнее...</div>
    </div>
  )
}
