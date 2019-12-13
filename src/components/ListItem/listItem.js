import React from 'react';
import './listItem.css';

 const ListItem = () => {
    return (
        <>
    <li className='li1 text-danger'>
    started days
                <button className='ml-5 rounded-circle'>
                    <i className='fa fa-remove btn-danger'></i></button>
                <button className='ml-3 rounded-circle'>
                    <i className='fa fa-check btn-info'></i></button>
     </li>

    <li className='li1 text-danger'>
    go to school
                <button className='ml-5 rounded-circle'>
                    <i className='fa fa-remove btn-danger'></i></button>
                <button className='ml-3 rounded-circle'>
                    <i className='fa fa-check btn-info'></i></button>
    </li>

    <li className='li1 text-danger'>
    read a book
                <button className='ml-5 rounded-circle'>
                    <i className='fa fa-remove btn-danger'></i></button>
                <button className='ml-3 rounded-circle'>
                    <i className='fa fa-check btn-info'></i></button>
    </li>

     <li className='li1 text-danger'>
     listen music
                <button className='ml-5 rounded-circle'>
                    <i className='fa fa-remove btn-danger'></i></button>
                <button className='ml-3 rounded-circle'>
                    <i className='fa fa-check btn-info'></i></button>
    </li>

    <li className='li1 text-danger'>
    watch tv set
                <button className='ml-5 rounded-circle'>
                    <i className='fa fa-remove btn-danger'></i></button>
                <button className='ml-3 rounded-circle'>
                    <i className='fa fa-check btn-info'></i></button>
    </li>
    </>
    );

    };

    export default ListItem
