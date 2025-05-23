import { useEffect, useState } from 'react'
import './App.css'
import TransactionsList from './TransactionsList';
import TransactionsForm from './TransactionsForm';

function App() {
  const[transactions, setTransaction] = useState([]);
 
  useEffect(() => {fetchTransactions()},[]);

  const fetchTransactions = async() =>
    {
      const response = await fetch("http://127.0.0.1:5000/api/transactions");
      const data = await response.json();
      setTransaction(data.transactions);
      console.log(data.transactions);
    }

  return <>
  <TransactionsList transactions = {transactions}/>
  <TransactionsForm />
  </>
}

export default App
