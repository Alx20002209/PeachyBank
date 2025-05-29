import React, { useState } from "react";
import { data, Link, Navigate} from "react-router-dom";

function LogOut(){
    sessionStorage.removeItem("token")
    history.go("/login")
}

const TransactionsList = ({transactions}) => {
    const [sortType, setSortType] = useState()
    const sortedTransactions = transactions?.sort((a,b) => {
        if(sortType === 'Recipient'){
            return a.toAccount.localeCompare(b.toAccount)
        }
        if(sortType === "Date"){
            return a.date.localeCompare(b.date)
        }
        if(sortType === 'Amount'){
            return a.ammount - b.ammount
        }
    })

    return <div>
        <h2>Recent Transactions</h2>
        <div>
            <button value = "Date" onClick={(e) =>setSortType(e.target.value)}>Sort by Date</button>
            <button value= "Recipient" onClick={(e) =>setSortType(e.target.value)}>Sort by Recipient</button>
            <button value= "Amount" onClick={(e) =>setSortType(e.target.value)}>Sort by Amount</button>
            <button onClick={() => LogOut()}>Log Out</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>To Account</th>
                    <th>State</th>
                    <th>Amount</th>
                    <th>Date</th>
                </tr>
            </thead>
        
            <tbody>
                {sortedTransactions.map((transaction) => (
                    <tr key={transaction.id}>
                        <td>{transaction.toAccount}</td>
                        <td>{transaction.state}</td>
                        <td>{transaction.ammount}</td>
                        <td>{transaction.date}</td>
                        <Link to = {"/" + transaction.id}>
                            <button>Check Transaction</button>
                        </Link>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default TransactionsList;    