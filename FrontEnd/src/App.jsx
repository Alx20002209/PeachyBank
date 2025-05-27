import { useEffect, useState } from 'react'
import './App.css'
import TransactionsList from './TransactionsList';
import TransactionsForm from './TransactionsForm';
import { Navigate } from 'react-router-dom';

function App() {
  const[transactions, setTransaction] = useState([]);
  useEffect(() => {fetchTransactions()},[]);
  const fetchTransactions = async() =>
    {
      const options = {
        headers: {
          Authorization : "Bearer " + sessionStorage.getItem('token'),
        }
      }
      const response = await fetch("http://127.0.0.1:5000/api/transactions", options);
      const data = await response.json();
      setTransaction(data.transactions);
      console.log(data.transactions);
    }
    return <> 
    {(sessionStorage.getItem("token") == null) ? <Navigate to={"/login"}/> :
        ( 
    <div>
    <TransactionsList transactions = {transactions}/>
    <TransactionsForm />
    </div>
            )}
  </>
}

export default App
