import React, {useRef} from 'react';
import Scrollchor from 'react-scrollchor';
import './line.css';

import logo from './img/logo.png';




export const FirstPage = (props) => {
  return(


<div>
    <div className="container">
    	<div className="poloska"></div>

    	<header>
    			<div className="logo">
    				<a href=""><img width="40" src={logo}/></a>
    			</div>
    			<div className="logotext">
            <p style={{color: '#fff'}}>
      				HistoryTime
      			</p>
    			</div>
    			<div className="avatar">
    			</div>
    	</header>

      <Scrollchor to='second'>
      	<div className="arrow-7">
        	<span></span>
        	<span></span>
        	<span></span>
        </div>
      </Scrollchor>
    </div>
 </div>
  )
}
export default FirstPage
