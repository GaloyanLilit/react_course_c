import React from 'react';

import './Home.css';


const Home = () => {
    return (
        <div className='firstdiv'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <img className='ml-5 oneimg' /> 

        
          <div className="navbar-nav ml-5">
            <a className="nav-item nav-link  ml-5" href="#">Home</a>
            <a className="nav-item nav-link active ml-5" href="#">Planets <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link ml-5" href="#">People</a>
            <a className="nav-item nav-link ml-5" href="People#">Starships</a>
          
        </div>
      </nav>
    </div>
    );
    
    };

    export default Home;

