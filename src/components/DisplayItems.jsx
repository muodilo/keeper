import React,{useContext} from 'react'
import { ItemsContext } from '../context/AllItemsContext'
import Item from './Item';

function DisplayItems() {
  const { allItems } = useContext(ItemsContext);
  return (

    <div className="container-fluid text-center mt-4">
      <div className="item-row row g-3">

        {allItems.map((item) => {
          return (
            <Item item={item} key={item.id } />
          )
        })}
        

      </div>
    </div>    
  )
}

export default DisplayItems