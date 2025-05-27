import React from "react";
import { data, Navigate} from "react-router-dom";

function LogOut(){
    sessionStorage.removeItem("token")
    history.go("/login")
}

const TransactionsList = ({transactions}) => {
    return <div>
        <h2>Recent Transactions</h2>
        <div>
            <button>Date</button>
            <button>Recipient</button>
            <button>Amount</button>
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
                {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                        <td>{transaction.toAccount}</td>
                        <td>{transaction.state}</td>
                        <td>{transaction.ammount}</td>
                        <td>{transaction.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default TransactionsList;    