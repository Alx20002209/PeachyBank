import React from "react";

const TransferList = ({transfers}) => {

    return <div>
        <h2>Recent Transactions</h2>
        <table>
            <thead>
                <tr>
                    <th>State</th>
                    <th>Date</th>
                    <th>Account</th>
                    <th>Ammount</th>
                    <th>
                        <button>Date</button>
                        <button>Ammount</button>
                        <button>Company</button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {transfers.map((transfers) => (
                    <tr key={transfers.id}>
                        <td>{transfers.state}</td>
                        <td>{transfers.date}</td>
                        <td>{transfers.to_account}</td>
                        <td>{transfers.ammount}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>

}

export default TransferList