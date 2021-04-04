import axios from "axios";
import React, { useState } from "react";
import { BaseUrl } from "../../service/api"
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./style.css"


const LoginPage = () => {
    const history = useHistory();
    const [name, setName,] = useState("");
    const [password, setPassword] = useState("");



    const handleUpdateName = (event) => {
        setName(event.target.value)
    }

    const handleUpdatePassword = (event) => {
        setPassword(event.target.value)
    }


    const login = async () => {
        const loginBody = {
            name: name,
            password: password
        }
        try {
            const response = await axios.post(`${BaseUrl}/login`, loginBody)

            window.localStorage.setItem("accessToken", response.data.accessToken);
            alert(`Logged in.. redirecting!`)
            history.push("/signup")

        } catch (error) {
            alert("Something went wrong. Try again")
        }
    }


    return (

        <div className="main-div">
            <h1>Login</h1>
            <div className="login">
                <TextField className="input" type="text" label="Name" variant="outlined" value={name} onChange={handleUpdateName} />
                <TextField type="password" label="Password" variant="outlined" value={password} onChange={handleUpdatePassword} />
            </div>
            <div>
                <Button variant="contained" color="primary" onClick={login}>Login</Button>
            </div>

            <div>
                <div className="portfolio">
                    <h3><a href="https://jmsantini.com/" target="_blank">Meu Portfólio</a></h3>
                </div>
            </div>

        </div>
    )
}


export default LoginPage;