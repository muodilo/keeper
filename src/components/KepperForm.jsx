import React, { useState,useContext,useEffect} from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {ItemsContext} from '../context/AllItemsContext'

function KepperForm() {
  const [item, setItem] = useState({
    title: "",
    content:"",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name ==='title') {
      setItem((prev) => {
        return {...prev,[name]:value}
      })
    }
    else if (name === 'content') {
      setItem((prev) => {
        return {...prev,[name]:value}
      })
    }
  }
  const { onAdd, isEditing, updatingItem } = useContext(ItemsContext)

  useEffect(() => {
    setItem(isEditing.item)
  }, [isEditing])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (isEditing.edit === true) {
      updatingItem(isEditing.item.id, item)
      isEditing.edit = false;
    } else {
      onAdd(item)
    }
    
    setItem({
      title: '',
      content:'',
    })

  }
  
  return (
    <div className='keeperForm'>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          className="form-control"
          placeholder="Title"
          name='title'
          value={item.title}
          onChange={handleChange}
        />
        
        <textarea
          required
          className="form-control"
          rows="3"
          placeholder='Description'
          name='content'
          value={item.content}
          onChange = {handleChange}
        >
          
        </textarea>
        
        <button
          type='submit'
          className='btn btn-primary submitKeeper'
        >
          <AddCircleIcon />
        </button>

      </form>
    </div>
  )
}

export default KepperForm