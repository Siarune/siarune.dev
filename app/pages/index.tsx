import { BlitzPage, Link } from "blitz"
import CluckHUD from "app/core/components/CluckHUD"
import styles from "styles/index.module.sass"
import chud from "styles/chud.module.sass"

const Home: BlitzPage = () => {
	return (
		<main className={styles.main}>
			<CluckHUD theme={chud.Moon} />
			<div className={styles.cont}>
				<div className={styles.grid}>
					<div className={styles.card}>
						<h2>About Me</h2>

						<p>
							Hey, Sia here. Nice place, huh?
							<br />
							It&apos;s taken quite a few redesigns, and this certainly won&apos;t be
							the last :D
							<br />
							I&apos;m just a computer science student with a little too much free
							time.
							<br />
							Why don&apos;t you check out the place while you&apos;re here?
							<br />
							You can also take a look at my{" "}
							<a href="https://siarune.me/" target="_blank" rel="noopener noreferrer">
								old website
							</a>
							, or where it all started on{" "}
							<a
								href="https://github.com/Siarune"
								target="_blank"
								rel="noopener noreferrer"
							>
								Github
							</a>
						</p>
					</div>

					<div className={styles.card}>
						<h2>
							<Link href="/projects/sauce">
								<a>This Website</a>
							</Link>
						</h2>
						<h4>A How and Why</h4>
					</div>

					<div className={styles.card}>
						<h2>
							<Link href="/projects/poetry">
								<a>Poetry is for Nerds</a>
							</Link>
						</h2>
						<h4>...Wait, I&apos;m a nerd</h4>
					</div>

					<div className={styles.card}>
						<h2>
							<Link href="/projects/maboibart">
								<a>Bartholomew</a>
							</Link>
						</h2>
						<h4>He hates everything and it&apos;s great</h4>
					</div>
				</div>
			</div>
			<footer className={styles.footer}>
				<p>
					Created and maintained by Aidan Sharp and open source on Github under the GPLv3
					liscence
				</p>
			</footer>
		</main>
	)
}

export default Home
