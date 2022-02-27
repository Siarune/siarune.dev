import styles from "../../styles/index.module.sass";
import MetaBundle from '../../components/MetaBundle'
import Head from "next/head";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { promises as fs } from 'fs'
import path from 'path'
// import renderToString from "next-mdx-remote/render-to-string";
// import hydrate from "next-mdx-remote/hydrate";
// import fs from 'fs';
// import * as path from "path";

export default function md({ source }) {
    return (
        <main className={styles.main}>
            <MetaBundle />


            {/* <MDXRemote {...source} /> */}

        </main>
    )
}

// export async function getStaticProps() {
//     // MDX text - can be from a local file, database, anywhere
//     const source = '# hi'
//     const mdxSource = await serialize(source)
//     return { props: { source: mdxSource } }
// }

// export async function getStaticProps() {
//     const postsDirectory = path.join(process.cwd(), 'public/markdown')
//     const filenames = await fs.readdir(postsDirectory)

//     const posts = filenames.map(async (filename) => {
//         const filePath = path.join(postsDirectory, filename)
//         const fileContents = await fs.readFile(filePath, 'utf8')

//         // Generally you would parse/transform the contents
//         // For example you can transform markdown to HTML here
        
//         const mdxSource = await serialize(fileContents)
//         // console.log(mdxSource)

//         return {
//             filename,
//             content: fileContents,
//             source: mdxSource
//         }
//     })
//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time


//     return {
//         props: {
//             posts: await Promise.all(posts),
//             // source: mdxSource
//         },
//     }
// }


// This function gets called at build time on server-side.
// It won't be called on client-side.
// export async function getStaticProps() {
//     const postsDirectory = path.join(process.cwd(), 'markdown')
//     const filenames = fs.readdirSync(postsDirectory)

//     const posts = filenames.map(filename => {
//         const filePath = path.join(postsDirectory, filename)
//         const fileContents = fs.readFileSync(filePath, 'utf8')

//         // Generally you would parse/transform the contents
//         // For example you can transform markdown to HTML here

//         return {
//             filename,
//             content: fileContents,
//         }
//     })
//     // By returning { props: posts }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//         props: {
//             posts,
//         },
//     }
// }