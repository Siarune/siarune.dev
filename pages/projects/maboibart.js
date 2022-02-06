import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '/styles/index.module.scss'

export default function bart() {
    return (
        <main className={styles.main}>
            <Head>
                <title>Siarune</title>
                <meta name={styles.Description} content="My stupid little site" />
                <link rel="icon" href="/hentie_solid.png" />
            </Head>




            
        </main>
    )
}