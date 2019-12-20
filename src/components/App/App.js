import React from 'react';

import Filter from  '../Filter';
import List from  '../List';
import AddItem from  '../AddItem';
import Test from '../Test/Test'

import './App.css';

const dataArr = [
    {
        id: 1,
        title: 'Todo list 1',
        isDone: true,
        important: false
    },

    {
        id: 2,
        title: 'Todo list 2',
        isDone: false,
        important: true
    },

    {
        id: 3,
        title: 'Todo list 3',
        isDone: false,
        important: false
    },

    {
        id: 4,
        title: 'Todo list 4',
        isDone: true,
        important: false
    },
];

const App = () => {
    return (
    <div className='container mt-5 mr-5'>
        <h1 className='ml-5 text-danger'>Add Item</h1>
        < Filter/>
      <Test hello="Hello Gyumri"/>
        <List listData={dataArr}/>
        <AddItem/>
            </div>
    
    );
    
    };

    export default App;

