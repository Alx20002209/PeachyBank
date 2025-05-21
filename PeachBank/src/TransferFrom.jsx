import {useState} from 'react';

const TransferForm = ({}) => {

    const[toAccount, setToAccount] = useState("");
    const[fromAccount, setFromAccount] = useState("");
    const[ammount, setAmmount] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            toAccount,
            fromAccount,
            ammount
        }
        const url = "http://127.0.0.1:5000/get_transfers";
        const options = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(data)
        }

        const response = await fetch(url, options);
        if (response.status !== 201 && response.status !== 200) {
            const data = await response.json()
            alert(data.message)
        }
        else {
            
        }
    }
    

return ( 
        <form onSubmit = {onSubmit}>
            <div>
                <label htmlFor="toAccount">To Account:</label>
                <input type='text' id="toAccount" value ={toAccount} onChange = {(e) => setToAccount(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="fromAccount">From Account:</label>
                <input type='text' id="fromAccount" value ={fromAccount} onChange = {(e) => setFromAccount(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="ammount">Ammount:</label>
                <input type='text' id="ammount" value ={ammount} onChange = {(e) => setAmmount(e.target.value)}/>
            </div>
            <button type ="submit">Submit</button>
        </form>
    );
};
export default TransferForm;