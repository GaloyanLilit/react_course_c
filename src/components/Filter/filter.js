import React from 'react';
import './filter.css';

const Filter = () => {

    return(

    <div className='d2'>
        <h3 className='text-danger'>Search</h3>
        <input type='text' className='border-dark w-100 rounded'/>
        <button className='btn btn-info mt-1'>Search</button>
        <hr/>
        <button className='btn btn-danger'>Important</button>
        <button className='btn btn-primary ml-3'>Active</button>
    </div>
    );

    };

    export default Filter;
