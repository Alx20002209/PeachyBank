import React, { useState } from "react";

const TransactionsForm = ({}) => {


    let newDate = new Date()

    const [toAccount, setToAccount] = useState("");
    const [fromAccount, setFromAccount] = useState("");
    const [ammount, setAmmount] = useState("");
    const state = "Pending"
    const date = newDate.toLocaleString()
    

    const onSubmit = async(e) => {
        e.preventDefault()
        const data  = {
            toAccount,
            fromAccount,
            ammount,
            state,
            date
        }
        const url = "http://127.0.0.1:5000/api/create_transaction"
        const options = {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        }

        const response = await fetch(url,options)
        if (response.status != 201 && response.status != 200){
            const message = await response.json()
            alert(data.message)
        }
        else{}
    }
    return <form onSubmit={onSubmit}>
        <div>
            <h3>Submit Transactions</h3>
            <label htmlFor="fromAccount">From Account:</label>
            <input
                type = 'text'
                id = 'fromAccount'
                value = {fromAccount}
                onChange={(e) => setFromAccount(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="toAccount">To Account:</label>
            <input
                type = 'text'
                id = 'toAccount'
                value = {toAccount}
                onChange={(e) => setToAccount(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="ammount">Amount:</label>
            <input
                type = 'number'
                id = 'ammount'
                step = '0.01'
                value = {ammount}
                onChange={(e) => setAmmount(e.target.value)}
            />
        </div>
        <button type = "submit">Submit</button>
    </form>
}

export default TransactionsForm;