import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '/styles/index.module.sass'

export default function sauce() {
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