import styles from "../../styles/index.module.sass";
import Head from "next/head";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

export default function md({ source }) {
    return (
        <main className={styles.main}>
            <Head>
                <title>Siarune</title>
                <meta name={styles.Description} content="My stupid little site"/>
                {/* <link rel="icon" href="/hentie_solid.png" /> */}
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>


            <MDXRemote {...source} />

        </main>
    )
}

export async function getStaticProps() {
    // MDX text - can be from a local file, database, anywhere
    const source = '# hi'
    const mdxSource = await serialize(source)
    return { props: { source: mdxSource } }
}