"use client"

import React, { useState, useEffect } from "react";
import { Header } from "@/components/header"


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
            <Header />
            <p>Ayoyoo</p>
            <input onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Name" className=" space-y-4 m-4 border-2 w-1/2"></input>
            <input onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Password" className=" space-y-4 m-4 border-2 w-1/2"></input>
            <button onClick={handleSubmit} className=" w-1/2 bg-blue-400 m-4 p-2">{loading ? 'Process Login...' : 'Login'}</button>
            <p className=" text-center">Halo, {name}</p>
            <p className=" text-center">Passwordmu: {password}</p>
            {message !== null ? <div>{message}</div> : null}
        </>
    )
}