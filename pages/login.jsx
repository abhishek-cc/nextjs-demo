import { useRouter } from "next/router";
import { createContext, useState } from "react"
import axios from "axios";
import nookies from 'nookies'

export default function Login(){

    const ctx = createContext();

    const router = useRouter();

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

    const handleChange = (event) => {
        console.log(event.target.id, event.target.value);
        if(event.target.id==='email'){
            setEmail(event.target.value);
        }else{
            setPassword(event.target.value);
        }   
    }

    const handleSubmit = () => {
        console.log("I am in handle submit", email, password);
        const loginPayload = {
            user : {
                email: email,
                password: password
            }
        }
        if(email && password){
            axios.post("https://floating-falls-55336.herokuapp.com//users/sign_in", loginPayload)
            .then(response => {
                console.log(response)
                const token = response.headers.authorization;
                // Parse
                const cookies = nookies.get(ctx)

                // Set
                nookies.set(ctx, 'token', token, {
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/auth-route',
                })
                console.log(nookies)
            });
            router.push('/auth-route');       
        }
    }

    return (<div>
        <h1>Login</h1>    
        
        <div>
            <span>Email:</span>
            <span><input placeholder="Enter Email" id='email' type='text' value={email} onChange={(event)=>handleChange(event)} /></span>
            <span><input placeholder="Enter Password" id='password' type='password' value={password} onChange={(event)=>handleChange(event)} /></span>
            <button onClick={()=>handleSubmit()}>Login</button>
        </div>
    </div>)
}