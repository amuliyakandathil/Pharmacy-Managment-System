import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
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
		</div>
  )
}
