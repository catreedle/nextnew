"use client"

import React, { useState, useEffect } from "react";


export default function Page() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('kucak');
    const [ password, setPassword ] = useState('');
    const [ loading, setLoading ] = useState(false);

    function handleSubmit() {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }

    return (
        <>
            <p>Register Page</p>
            <input className=" border-2 border-blue-800 p-2 my-2 w-1/2" onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Name"></input>
            <input className=" border-2 border-blue-800 p-2 my-2 w-1/2" onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Email" autoComplete="off"></input>
            <input className=" border-2 border-blue-800 p-2 my-2 space-y-4 w-1/2" onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Password" ></input>
            <button onClick={handleSubmit} className=" p-2 w-1/2 bg-blue-400 m-4">{loading ? 'Wait...' : 'Register'}</button>
            <p className=" text-center">Halo, {name} ({email})</p>
            <p className=" text-center">Passwordmu: {password}</p>
        </>
    )
}