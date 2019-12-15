import React from 'react';

import './Filter.css';

const Filter = () => {

    return(
    <div>
    <h3 className='text-primary ml-5'>Search</h3>
    <input type='text'className='w-50 ml-5 mr-5'/>
        <button className='btn btn-info ml-3'>Search</button>
        <hr/>
        <button className='btn btn-danger ml-5'>Important</button>
        <button className='btn btn-primary ml-3'>Active</button>
    </div>
    );
    
    };

    export default Filter;

