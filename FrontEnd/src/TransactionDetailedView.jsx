import React, { useEffect, useState } from "react"
import { useParams, Navigate, Link } from "react-router-dom"



const TransactionDetailedView = () => {
    const {id} = useParams(); 
    const[transactionById, setTransactionById] = useState([]);
    let newState = ""

    useEffect(() => {fetchTransactions()},[id]);
    const fetchTransactions = async() =>
    {
      const options = {
        headers: {
          Authorization : "Bearer " + sessionStorage.getItem('token'),
        }
      }
      const response = await fetch(`http://127.0.0.1:5000/api/transactions/${id}`, options);
      const data = await response.json();
      setTransactionById(data);
    }

    const handleChange = (e) => {
        let newState = e
        transactionById.state = newState
    }

    const postChangedState = async(e) => {
        const data = {
            "state": e.state
        }
        const options = {
            method : "PATCH",
            headers: {
                "Content-Type":"application/json",
                Authorization : "Bearer " + sessionStorage.getItem('token'),
            },
            body: JSON.stringify(data)
        }

      const response = await fetch(`http://127.0.0.1:5000/api/update_state/${id}`, options);
      window.location.reload()
      if (response.status != 201 && response.status != 200){
            const message = await response.json()
            alert(message)
        }
        
    }

    return <>
        {(sessionStorage.getItem("token") == null) ? <Navigate to={"/login"}/> :
        ( 
    <div>
        <h1>Transaction Details</h1>
        <Link to ={"/"}>
        <button>Back</button>
        </Link>
        <table>
            <thead>
                <tr>
                    <th>From Account</th>
                    <th>To Account</th>
                    <th>State</th>
                    <th>Amount</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>{transactionById.from_account}</td>
                        <td>{transactionById.to_account}</td>
                        <select onChange={e => handleChange(e.target.value)}>
                            <option value={transactionById.state} selected>{transactionById.state}</option>
                            <option>Pending</option>
                            <option>Processing</option>
                            <option>Paid</option>
                        </select>
                        <td>{transactionById.ammount}</td>
                        <td>{transactionById.date}</td>
                    </tr>
            </tbody>
        </table>
        <button onClick={() => postChangedState(transactionById, newState)}>Save</button>
    </div>
        )}
    </>

};

export default TransactionDetailedView