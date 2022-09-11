import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import EditTransaction from './EditTransaction'

const TransactionCard = ( {transaction, investor, deleteTransaction, investorDeleteTransaction, editTransaction} ) => {
    const [isEditing, setIsEditing] = useState(false)

    const handleEdit = (updatedPrice) =>{
        editTransaction(updatedPrice)
    }
    
    const handleDelete = () => {
        fetch("http://localhost:9292/stocktransactions/" + transaction.id, {
        method: "DELETE",
        })   
            .then(resp => resp.json())
            .then(data => {
                deleteTransaction(data)
                if(investor) {
                    investorDeleteTransaction(data)
                }
        })  
    }   

  return (
    <div>
      <li style={{ listStyleType: "none" }}>
        {isEditing ? <EditTransaction  handleEdit={handleEdit} transaction={transaction} /> : <p>Stock:{transaction.company_name} - Price: {transaction.price} - Date: {transaction.date}</p>}
        { transaction.investor ? <p><em>From: <Link to={`/investors/${transaction.investor.id}`}>{transaction.investor.name}</Link></em></p> : <p><em>By: <Link to={`/investors/${investor.id}`}>{ investor.name}</Link></em></p>}
        <div> <button onClick={handleDelete} >Delete</button> <button onClick={() => setIsEditing((isEditing) => !isEditing)}>Edit Price</button> </div>
      </li>
    </div>
  )
}

export default TransactionCard

