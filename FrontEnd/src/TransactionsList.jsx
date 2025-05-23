import React from "react";

const TransactionsList = ({transactions}) => {
    return <div>
        <h2>Recent Transactions</h2>
        <table>
            <thead>
                <tr>
                    <th>To Account</th>
                    <th>State</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <button>Date</button>
                    <button>Recipient</button>
                    <button>Amount</button>
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