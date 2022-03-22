import Image from 'next/image'
import Link from 'next/link'
import styles from '/styles/index.module.sass'
import CluckHUD from '../components/CluckHUD';

export default function Home() {
	return (
		<div className={styles.cont}>
			<div className={styles.grid}>

				<div className={styles.card}>
					<h2>
						About Me
					</h2>
					<p>
						Hey, Sia here. <br />
						Nice place, huh? It&apos;s taken quite a few redesigns, and this certainly won&apos;t be the last. :3
						<br />
						I&apos;m just a computer science student with a little too much free time. Why don&apos;t you check out the place while you&apos;re here?
					</p>

					<h4 className={styles.linksTitle}>Links</h4>

					<ul className={styles.linkItems}>

						<li className={styles.link1}>
							<a href="https://github.com/Siarune" target="_blank" rel="noopener noreferrer">
								Github
							</a>
						</li>

						<li className={styles.link2}>
							<a href="https://gitlab.com/Siarune" target="_blank" rel="noopener noreferrer">
								Gitlab
							</a>
						</li>

						<li className={styles.link3}>
							<a href="https://siarune.me/" target="_blank" rel="noopener noreferrer">
								Old Site
							</a>
						</li>

						<li className={styles.link4}>
							<a href="https://steamcommunity.com/profiles/76561199007571171/" target="_blank" rel="noopener noreferrer">
								Steam
							</a>
						</li>

					</ul>

				</div>

				<div className={styles.card}>
					<h2>
						<Link href="/projects/sauce"><a>
							This Website
						</a></Link>
					</h2>
					<h4>
						A How and Why
					</h4>
				</div>

				<div className={styles.card}>
					<h2>
						<Link href="/projects/poetry"><a>
							Poetry is for Nerds
						</a></Link>
					</h2>
					<h4>
						...Wait, I&apos;m a nerd
					</h4>
				</div>

				<div className={styles.card}>
					<h2>
						<Link href="/projects/maboibart"><a>
							Bartholomew
						</a></Link>
					</h2>
					<h4>
						He hates everything and it&apos;s great
					</h4>
				</div>

			</div>

			<footer className={styles.footer}>
				<h3>
					Everything Under Construction
				</h3>

			</footer>
		</div>
	)
}
