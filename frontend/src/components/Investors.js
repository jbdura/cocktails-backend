import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import TransactionCard from './TransactionCard'

const Investors = ({deleteTransaction}) => {
    const [investors, setInvestors] = useState({stock_transactions:[]})
    const {id} = useParams()

    useEffect(() => {
        fetch(`http://localhost:9292/investors/${id}`)
            .then(resp => resp.json())
            .then(data => setInvestors(data))
    }, [])

    const investorDeleteTransaction = transaction => {
        setInvestors({
          ...investors,
          stock_transactions: investors.stock_transactions.filter(t => t.id !== transaction.id)
        })
      }

    const transactionCards = investors.stock_transactions.map(transaction => {
        return <TransactionCard investorDeleteTransaction={investorDeleteTransaction} deleteTransaction={deleteTransaction} transaction={ transaction } key={ transaction.id } investor={ investors }/>
    })

  return (
    <div>
      <h1>{ investors.name }</h1>
      { transactionCards }
    </div>
  )
}

export default Investors