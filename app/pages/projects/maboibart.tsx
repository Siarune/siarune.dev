import Image from "next/image"
import Link from "next/link"
import styles from "styles/bartyboy.module.sass"
import chud from "styles/chud.module.sass"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import { promises as fs } from "fs"
import path from "path"
import CluckHUD from 'app/core/components/CluckHUD'

export default function bart({ source }: { source: any }) {
	return (
		<main className={styles.main}>
			<CluckHUD theme={chud.Volcano} />
			<div className={styles.cont}>
				<div className={styles.bartWrap}>
					<Image
						src="/bart.png"
						alt="bart"
						height="128"
						width="128"
						layout="fixed"
						className={styles.portrait}
					/>
					<h1 className={styles.title}>Bartholomew</h1>
				</div>

				<div className={styles.content}>
					<MDXRemote {...source} components={components} className={styles.mdx} />
				</div>
			</div >
		</main>
	)
}

const components = {}

export async function getStaticProps() {
	const mdPath = path.join(process.cwd(), "public/markdown/bart.mdx")
	const rawMarkdown = await fs.readFile(mdPath, "utf8")
	const postMd = await serialize(rawMarkdown)

	return { props: { source: postMd } }
}
