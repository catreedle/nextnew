"use client"

import React, { useState, useEffect } from "react";


export default function Login() {
    const [name, setName] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ message, setMessage ] = useState(null);

    function handleSubmit() {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }

    useEffect(() => {
        if (name === "admin" && password == "admin") {
            setMessage("Welcome admin!")
        } else {
            setMessage(null)
        }
    }, [name, password])
    return (
        <>
            <p>Login Page</p>
            <input className=" border-2 border-blue-800 p-2 my-2 w-1/2" onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Name"></input>
            <input className=" border-2 border-blue-800 p-2 my-2 space-y-4 w-1/2" onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Password" ></input>
            <button onClick={handleSubmit} className=" p-2 w-1/2 bg-blue-400 m-4">{loading ? 'Process Login...' : 'Login'}</button>
            <p className=" text-center">Halo, {name}</p>
            <p className=" text-center">Passwordmu: {password}</p>
            {message !== null ? <div>{message}</div> : null}
        </>
    )
}