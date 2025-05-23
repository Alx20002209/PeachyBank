import React, { useState } from "react";

const LoginForm = ({}) => {
    const[username, setUser] = useState("")
    const[password, setPassword] = useState("")
    

    const handleClick = () => {
        const options = {
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        }
        fetch("http://127.0.0.1:5000/api/token", options)
        .then(r =>{
            if(r.status == 200 && r.status == 201) return r.json();
            else alert("err")
        })
        .then(data => sessionStorage.setItem("token", data.access_token))
        .catch(error => {console.error("Error mate", error)})
    }

    return <div>
    <h1>Login</h1>
        <div>
            <input type ="text" placeholder="username" value={username} onChange={(e) => setUser(e.target.value)}/>
            <input type ="password" placeholder="password" value={password} onChange = {(e) => setPassword(e.target.value)}/>
            <button onClick={handleClick}>Login</button>
        </div>


    </div>
}
export default LoginForm;
