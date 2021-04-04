import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BaseUrl } from "../../service/api"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./style.css"

const Signup = () => {
    const history = useHistory();

    useEffect(() => {
        const accessToken = window.localStorage.getItem("accessToken")

        if (accessToken === null) {
            history.push("/")
        }
    }, [history])


    const [code, setCode] = useState();
    const [name, setName] = useState();
    const [cpf, setCpf] = useState();
    const [address, setAddress] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [password, setPassword] = useState();
    const [obs, setObs] = useState();

    const handleUpdateCode = (event) => {
        setCode(event.target.value)
    }

    const handleUpdateName = (event) => {
        setName(event.target.value)
    }

    const handleUpdateCpf = (event) => {
        setCpf(event.target.value)
    }

    const handleUpdateAddress = (event) => {
        setAddress(event.target.value)
    }

    const handleUpdatePhoneNumber = (event) => {
        setPhoneNumber(event.target.value)
    }

    const handleUpdatePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleUpdateObs = (event) => {
        setObs(event.target.value)
    }

    const signup = async () => {
        const signupBody = {
            code: code,
            name: name,
            cpf: cpf,
            address: address,
            phoneNumber: phoneNumber,
            password: password,
            obs: obs
        }

        try {
            const response = await axios.post(`${BaseUrl}/createuser`, signupBody)

            const takeCpf = signupBody.cpf.substring(0, 5)

            alert(`Successfully registered. Code:${signupBody.code} and CPF: ${takeCpf}`)

        } catch (error) {

            if (code === null || name == null || cpf == null || password == null) {
                alert(`Required fields: Code, Name, CPF, Password.`)
            }

            else {
                alert("Something went wrong. Try again")
            }

        }

    }

    return (
        <div className="main-div">
            <h1>REGISTER</h1>
            <div className="register">
                <TextField type="number" label="Code" variant="outlined" value={code} onChange={handleUpdateCode} />
                <TextField type="text" label="Name" variant="outlined" value={name} onChange={handleUpdateName} />
                <TextField type="text" label="CPF EX: 111.111.111-11" variant="outlined" value={cpf} onChange={handleUpdateCpf} />
                <TextField type="text" label="Address" variant="outlined" value={address} onChange={handleUpdateAddress} />
                <TextField type="text" label="Phone Number" variant="outlined" value={phoneNumber} onChange={handleUpdatePhoneNumber} />
                <TextField type="password" label="Password" variant="outlined" value={password} onChange={handleUpdatePassword} />
                <TextField type="text" label="Note" variant="outlined" value={obs} onChange={handleUpdateObs} />
            </div>
            <Button variant="contained" color="primary" onClick={signup}>REGISTER</Button>
        </div>
    )

}


export default Signup;

