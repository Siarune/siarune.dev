import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '/styles/bartyboy.module.sass'

export default function bart() {
	return (
		<main className={styles.main}>
			<Head>
				<title>Siarune</title>
				<meta name={styles.Description} content="My stupid little site" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
			</Head>

			<div className={styles.bartWrap}>
				<Image src="/bart.png" alt="bart" height="128" width="128" layout="responsive" />
			</div>

			<div className={styles.content}>
				
			</div>

		</main>
	)
}