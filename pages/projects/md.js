import styles from "../../styles/index.module.sass";
import MetaBundle from '../../components/MetaBundle'
import Head from "next/head";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { promises as fs } from 'fs'
import path from 'path'

export default function md({ source }) {
    return (
        <main className={styles.main}>
            <MetaBundle />


            <MDXRemote {...source} />

        </main>
    )
}


export async function getStaticProps() {
    const mdPath = await path.join(process.cwd(), 'public/markdown/hello.mdx');
    const rawMarkdown = await fs.readFile(mdPath, 'utf8');
    const postMd = await serialize(rawMarkdown);

    return { props: { source: postMd } } 
}
