import React from 'react'
import { useState } from 'react'

const EditTransaction = ({transaction, handleEdit}) => {
    const {price, id} = transaction
    const [updatedPrice, setUpdatedPrice] = useState(price)

    const handleEditForm = () => {
            
        fetch("http://localhost:9292/stocktransactions/" + id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({price: updatedPrice})
        })
            .then(resp => resp.json())
            .then(data => handleEdit(data))
    }

return (
    <div>
        <form onSubmit={handleEditForm} >
         <label>Update Price:</label>
         <input id={"price"} type={"text"} name={"price"} value={updatedPrice} onChange={e => setUpdatedPrice(e.target.value)} />
         <input type={"submit"} value={"Update"} />
        </form>
    </div>
  )
}

export default EditTransaction