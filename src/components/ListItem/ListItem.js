import React from 'react';

import './ListItem.css';


const ListItem = ({item}) => {

    const dataStyle = item.important ? 'red' : '#000';
    const testStyle = item.isDone ? 'line-through' : 'none'
   

    return (
    <li style={{'text-decoration':testStyle,color:dataStyle}}>
        {item.title}
        <button className='btn btn-danger ml-5 rounded-circle border-info'>
            <i className='fa fa-remove'></i></button>
        <button className='btn btn-info ml-3 rounded-circle border-danger'>
            <i className='fa fa-check'></i></button>
        </li>
    
    );
    
    };
   
    export default ListItem;

