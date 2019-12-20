import React,{Component} from 'react';

import './ListItem.css';


class ListItem extends Component {
        render (){
            const {item} = this.props;
            let liClasses = '';


    liClasses += item.important ? 'important' : '';
    liClasses += item.isDone ? 'done' : ''
   

    return (
    <li className={liClasses}>
        {item.title}
        <button className='btn btn-danger ml-5 rounded-circle border-info'>
            <i className='fa fa-remove'></i></button>
        <button className='btn btn-info ml-3 rounded-circle border-danger'>
            <i className='fa fa-check'></i></button>
        </li>
    
    );
    
    };
}
   
    export default ListItem;

