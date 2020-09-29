import React, { useState } from 'react';
import {Search} from './Search';
import logo from './img/logo.png';
import steve from './img/SteveJobs.png';

export const Main = (props) =>{
//  const [isVisible, setIsVisible] = useState(false);

  return(
    <div>
    <div className="container">
    	<div className="poloska">

    	</div>
    	<header>
    			<div className="logo">
    				<a href=""><img width="40" src={logo}></a>
    			</div>
    			<div className="logotext"><p>
    				HistoryTime
    			</p>
    			</div>
    			<div className="avatar">
    			</div>
    	</header>
    	<div className="container1">
    		<div className="text">
    			<p>ПРОЙДИ<br>ПУТЬ ЖИЗНИ</br> ИЗВЕСТНОЙ <br>ЛИЧНОСТИ</br></p>
    			<div>
    			<svg className="strelka-left-3" viewBox="0 0 5 9">
    			<path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" ></path>
    					</svg>


    					<svg className="strelka-right-3" viewBox="0 0 5 9">
    					    <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" ></path>
    					</svg>
    					</svg>
    			</div>
    			<div className="search1">

    			 	<form onsubmit="event".preventDefault(); role="search">
    			  		<label for="search">Search for stuff</label>
    			  		<input id="search" type="search" placeholder="Search..." autofocus required />
    			  		<button type="submit">Go</button>
    				</form>
    			</div>
    		</div>
    		<div className="scroll_bar">
    				<a href="file:///C:/Users/Baytik-228/Desktop/HistoryTime/TimeLine.html"></a><img height="125%" src={steve}>
    		</div>
    		<div className="contact">
    			<div className="vk"><a href="https://vk.com/rgilyazow"></a></div>
    			<div className="yt"><a href=""></a></div>
    			<div className="inst"><a href=""></a></div>

    		</div>
    	</div>

    </div>

      <Search/>
      <div onClick={() => props.onPageChange(1)}>Подробнее...</div>
    </div>
  )
}
