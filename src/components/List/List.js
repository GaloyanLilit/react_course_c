import React from 'react';
import ListItem from  '../ListItem';
import './list.css';




const List = ({listData}) => {

   const listItemData = listData.map((d) =>{
       return <ListItem item={d} key={d.id}/>
   })
    return (
    <div className='ml-5 mt-5'>
        <h3 className='text-danger'>Lists</h3>
        <ul>
            {listItemData}
            </ul>
            </div>
    
    );
    
    };

    export default List;

