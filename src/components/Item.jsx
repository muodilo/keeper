import React,{useContext} from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import {ItemsContext} from '../context/AllItemsContext'

function Item({ item }) {
  const btnStyle = {
    cursor:"pointer"
  }
  const { onDelete,enableEdit } = useContext(ItemsContext)
  
  const handleClick = () => {
    enableEdit(item)
  }


  return (

    <div className="item-card card mb-4 col-lg-3 col-md-4 col-sm-6">
      <div className="card-body">
        <h5 className='card-title'>{item.title}</h5>
        <hr />
        <p className='card-text'>{item.content}</p>
        <div className='item-btn-container'>
          <EditIcon style={btnStyle} onClick={handleClick} />
          <ClearIcon style={btnStyle} onClick={()=>onDelete(item.id) } />
        </div>
        
    </div>
    </div>
    
  )
}

export default Item