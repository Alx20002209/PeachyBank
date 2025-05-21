import { useEffect, useState } from 'react';
import './App.css';
import TransferList from './TransferList';
import TransferForm from './TransferFrom';

function App() {
  const [transfers, setTransfers] = useState([]);

useEffect(() => {fetchTransfers(), []});

  const fetchTransfers = async() => {
    const response = await fetch("http://127.0.0.1:5000/get_transfers");
    const data = await response.json();
      setTransfers(data.transfers);
      console.log(data.transfers);

  }
  return <>
  <TransferList transfers = {transfers}/>
  <TransferForm />
  </>
};

export default App;
