"use client"

import {useState} from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase';
import { useRouter } from 'next/navigation';

export default function page() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async () => {
        const q = query(collection(db, "user"), where("username", "==", username), where("password", "==", password))
        const doc = await getDocs(q)
        if(doc.docs.length !=0) {
            console.log("success");
            router.push("/Itempage")
        }
        else{
            console.log("fail");
        }
    }

  return (
    <div className = {styles.banner}>
            <div className={styles.content}>
                <h1>Med Xpress</h1><br/>
            </div>
            <div className={styles.login}>
                <h2>Log In</h2>
                <label >Username*:</label><br/>
                <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" required={true}/><br/>
                <label >Password*:</label><br/>
                <input onChange={(e) => setPassword(e.target.value)} type="" placeholder="Password" required={true}/><br/>
                <input onClick={handleLogin} type="submit" value="Log In"/><br/>
                <Link href="/SignUp">Don't have an account? Sign up</Link>
            </div>
    </div>
  )
}
