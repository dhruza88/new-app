import React from 'react';

function List(props) {
  return (
    <ul className="list-group">
      {/* TODO: Use the `map` method to iterate over each grocery and return a `li` element that contains the item's name and has a unique key attribute */}
      {props.groceries.map(item=><li>{item.name}</li>)}
      <hr/>
      {props.groceries.map((item) => {
        if(item.purchased === false)
        return (
          // TODO: Your code here
         <li>{item.name}</li> 
      
          
        );
      })}
    </ul>
  );
}

export default List;
