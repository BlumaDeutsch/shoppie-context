import React, { useState } from 'react'

const ItemProductEdit = ({item,editItemDetails}) => {
    const {title, price, id} = item
    const [formTitle, setTitle] = useState(title);
    const [formPrice, setPrice] = useState(price)
    const onFormSubmit = (e)=>{
      e.preventDefault()
        alert('kuku')
        editItemDetails({title:formTitle, price:formPrice, id})
    }
  return (
    <div>
        <form onSubmit={onFormSubmit}>
            title:
            <input type="text" onChange={(e)=>setTitle(e.target.value)} value={formTitle} />
            price
            <input type="text"  onChange={(e)=>setPrice(e.target.value)} value={formPrice} />
           <input hidden type="submit" />
        </form>
    </div>
  )
}

export default ItemProductEdit