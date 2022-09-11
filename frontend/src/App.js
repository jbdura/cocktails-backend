import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Investors from "./components/Investors";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

const App = () => {
const [transactions, setTransactions] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/stocktransactions")
    .then(resp => resp.json())
    .then(data => setTransactions(data))
  },[])

const addTransaction = (transaction) =>
  setTransactions([...transactions, transaction])

const deleteTransaction = (tran) => {
  setTransactions(transactions.filter(t => t.id !== tran.id))
}

const editTransaction = (updatedPrice) =>{
  const update = transactions.map((transaction) => {
    if (transaction.id === updatedPrice.id){
      return updatedPrice
    } else {
      return transaction
    }
  })
  setTransactions(update)
}

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/investors/:id" element={<Investors deleteTransaction={deleteTransaction} />}/>
        <Route path="/transactions" element={<TransactionList editTransaction={editTransaction} deleteTransaction={deleteTransaction} transactions={transactions} />}/>
        <Route path="/transactions/new" element={<TransactionForm addTransaction={addTransaction} />}/>
      </Routes>
    </Router>
  );
}

export default App;
