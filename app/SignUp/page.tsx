"use client"

import { useState } from 'react'
import styles from './page.module.css'
import { db } from '@/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

export default function page() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const router = useRouter()

    const handleSignUp = () => {
        addDoc(collection(db, "/user"), {
            username: username,
            password: password,
            email: email, 
        })
        router.push("/Itempage")
    }
    
  return (
    <div className = {styles.banner}>
            <div className={styles.content}>
                <h1>MedXpress</h1><br/>
                
            </div>
            <div className={styles.login}>
                <h2>Sign up</h2>
                <label >Email address*:</label><br/>
			    <input onChange={(e) => setEmail(e.target.value)} type="text" required={true}/><br/>
                <label >Username*:</label><br/>
                <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" required={true}/><br/>
                <label >Password*:</label><br/>
                <input onChange={(e) => setPassword(e.target.value)} type="password"  name="password" placeholder="Password" required={true}/><br></br>
                <input onClick={handleSignUp} type="submit" value="Sign Up"/><br/>
            </div>
        </div>
  )
}
