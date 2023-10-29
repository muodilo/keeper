import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {
  const [allItems, setAllItems] = useState([])
  const [isEditing, setIsEditing] = useState({
    item: {},
    edit:false,
  })

  const onAdd = (item) => {
    item.id = uuidv4();
    
    setAllItems((prev) => {
      return [...prev,item]
    })
  }

  const onDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setAllItems(allItems.filter((item)=>item.id !== id))
    }
    
  }

  const enableEdit = (item) => {
    setIsEditing({
      item: item,
      edit:true,
      
    })
  }

  const updatingItem = (id,updItem) => {
    setAllItems((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, ...updItem };
        }
        return item;
      })
    })
  }
  return (
    <ItemsContext.Provider
      value={{
        allItems,
        isEditing,
        onAdd,
        onDelete,
        enableEdit,
        updatingItem
      }}
    >
      {children}
    </ItemsContext.Provider>
  )
}

export { ItemsProvider, ItemsContext };