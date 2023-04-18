import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Signup(){
    const {user, getUserProfile} = useAuth()
    const handleClick = ()=>{
        getUserProfile();
        debugger
        console.log(user)

    }
    return(<div>
        Signup
        <button onClick={handleClick}>login</button>
    </div>)
}