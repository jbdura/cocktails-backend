import React from 'react'
import TransactionCard from './TransactionCard'

const TransactionList = ({transactions, deleteTransaction, editTransaction}) => {

  const transactionCards = transactions.map(transaction => <TransactionCard editTransaction={editTransaction} deleteTransaction={deleteTransaction} transaction={transaction} key={transaction.id}/> )
  return (
    <div>
      <h1>Transaction List</h1>
      <div>
      {transactionCards}
      </div>
    </div>
  )
}

export default TransactionList