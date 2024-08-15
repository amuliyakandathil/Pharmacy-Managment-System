'use client'

import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { DocumentData, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase';
import { useRouter } from 'next/navigation';

export default function page() {
    const [searchparam, setSearchParam] = React.useState("");
    const [visible, setVisible] = React.useState(false);
    const [data, setData] = React.useState<DocumentData[]>([]);
    const router = useRouter()

    const handleSearch = async () => {
        const q = query(collection(db, "medicine"), where("Name", "==", searchparam))
        const doc = await getDocs(q)
        if(doc.docs.length !=0) {
            console.log(doc.docs[0].data());
            setData(doc.docs)
            router.push(`/Order/${doc.docs[0].id}`)
        }
        else{
            console.log("fail");
        }
    }
  return (
    <div className = {styles.banner}>
			<div className = {styles.nav}>
				<h1>
					Your guide to flawless choices...
				</h1>
				<ul>
					<li><Link href="/">home</Link></li>
					<li><Link href="/Login">login</Link></li>
					<li><a href="#">Settings</a></li>	
					<li><a href="#">Help</a></li>
				</ul>
			</div>
			<div className = {styles.tit}>
				<h2>MedXpress</h2>
			</div>
            <div className={styles.search}>
                <input onChange={(e) => setSearchParam(e.target.value)} type="text" name="item" placeholder="search here"/><br/>
                <button onClick = {handleSearch} type="submit"><img src="../static/search.png"/></button>
            </div>
            <div>
            </div>
		</div>
  )
}
