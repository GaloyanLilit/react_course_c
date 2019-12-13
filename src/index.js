import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// Voskan jan chitem sxals vortexic e arandzin faylerov chkaroxaca ashxatacnel



//import One from './components/One/One';
//import Filter from  './components/Filter/filter';



const One = ()  => {
    return (
        <div className='d1'>

            <List/>
            <AddItem/>
        </div>
    );
};

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

    const List = () => {
        return (
        <div className='d3'>
            <h3 className='text-info'>Lists</h3>
            <ul>
                <ListItem/>

                </ul>
                </div>

        );

        };


        const AddItem = () => {
            return (
            <div className='d4'>
                <h3 className='text-warning'>Add Item</h3>
                <textarea className='rounded w-80'></textarea>
                <button className=' but btn rounded ml-3 bg-primary'>Add</button>
                    </div>

            );

            };


const App = () => {
    return (
    <div>

        <One/>
        <Filter/>

            </div>

    );

    };

    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
