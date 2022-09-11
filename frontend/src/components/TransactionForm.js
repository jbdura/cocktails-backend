import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const TransactionForm = ({addTransaction}) => {
    const [stock, setStock] = useState([])
    const [stockPrice, setStockPrice] = useState([])
    const [date, setDate] = useState([])
    const [investorName, setInvestorName] = useState([])
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault()

    const params = { investor: {
            name: investorName
          },
          stock_transactions: {
            company_name: stock,
            price: stockPrice,
            date: date
          }
        }
        
        fetch("http://localhost:9292/stocktransactions",{
            method: "POST",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
            body: JSON.stringify(params)})
                .then(resp => resp.json())
                .then (data => addTransaction(data))
                navigate("/transactions")
        }

  return (
    <div>
        <h1> New Trade</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Stock</label>
                <input type="text" name="stock" value={stock} onChange={e => setStock(e.target.value)}/>
            </div>
            <div>
                <label>Price</label>
                <input type="integer" name="stockPrice" value={stockPrice} onChange={e => setStockPrice(e.target.value)}/>
            </div>
            <div>
                <label>Date</label>
                <input type="text" name="date" value={date} onChange={e => setDate(e.target.value)}/>
            </div>
            <div>
                <label>Investor Name</label>
                <input type="text" name="investorName" value={investorName} onChange={e => setInvestorName(e.target.value)}/>
            </div>
            <input type="submit" value="Add Transaction" />
        </form>
    </div>
  )
}

export default TransactionForm