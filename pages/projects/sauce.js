import Image from 'next/image'
import styles from '/styles/sauce.module.sass'
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { promises as fs } from 'fs'
import path from 'path'

export default function sauce({ source }) {
    return (
        <cont className={styles.cont}>
            <div className={styles.hentWrap}>
                <Image src="/hentieSolid.png" alt="bart" height="100" width="100" layout="fixed" className={styles.portrait} />
                <h1 className={styles.title}>Whatever This Place Is</h1>
            </div>

            <div className={styles.content}>
                <MDXRemote {...source} components={components} className={styles.mdx} />
            </div>
        </cont>
    )
}

const components = {}

export async function getStaticProps() {
    const mdPath = await path.join(process.cwd(), 'public/markdown/sauce.mdx');
    const rawMarkdown = await fs.readFile(mdPath, 'utf8');
    const postMd = await serialize(rawMarkdown);

    return { props: { source: postMd } }
}