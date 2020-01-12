import React from 'react';

import './Slide.css';

const Slide = () => {

    return(
    <div className='onediv'>
  

<div className="mySlides">
  
  <img className='imgclass ml-5 mt-5' />
 <p className='ml-5 mt-5'>Tatooine is a fictional desert planet that appears in the <br/>
 Star Wars space-opera franchise. It is a<br/> beige-colored, desolate world orbiting a pair of <br/>
 binary stars, and inhabited<br/> by human settlers and a variety of other life forms. <br/>The planet was 
 first seen in the original<br/> 1977 film Star Wars, and has to date featured <br/>in a total of six Star 
 Wars theatrical films.
</p>
</div>

<div className='dotdiv'>
  <span className="dot" onclick="currentSlide(1)"></span> 
  <span className="dot" onclick="currentSlide(2)"></span> 
  <span className="dot" onclick="currentSlide(3)"></span> 
</div>
    </div>
    );
    
    };

    export default Slide;

