import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function refreshPage(){ 
    window.location.reload(); 
}

export const LoginForm = () => {
    const[username, setUser] = useState("")
    const[password, setPassword] = useState("")
    const[isLoggedIn, setIsLoggedIn] = useState(false)
    const token = sessionStorage.getItem("token")
    console.log("This is your token", token)


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
        };
        fetch("http://127.0.0.1:5000/api/token", options)
        .then(r => {
            if(r.status == 200 || r.status == 201) return r.json();
            else alert("err");
        })
        .then(data => {
            console.log("Token:", data);
            sessionStorage.setItem("token", data.access_token);
            refreshPage()
        })
        .catch(error => {console.error("Error mate", error)
        });
    }

    return <div>
        <h1>Login</h1>
        {(token && token != "" && token != undefined) ?  <Navigate to={"/"}/> :
        ( 
        <div>
            <input type ="text" placeholder="username" value={username} onChange={(e) => setUser(e.target.value)}/>
            <input type ="password" placeholder="password" value={password} onChange = {(e) => setPassword(e.target.value)}/>
            <button onClick={handleClick}>Login</button>
        </div>
        )}

    </div>
}
export default LoginForm;
