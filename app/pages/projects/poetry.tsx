import Head from "next/head"
import Image from "next/image"
// @ts-ignore
import styles from "../../styles/poetry.module.sass"

export default function Poetry() {
	return (
		<div className={styles.container}>
			<div className={styles.bannerWrapper}>
				<h1 className={styles.banner}>Some Very (very) Bad Poetry</h1>
			</div>

			<div className={styles.poems}>
				<div className={styles.collapsibleWrapper}>
					<details>
						<summary className={styles.collapsibleTitle}>2 a.m. romance</summary>
						<div className={styles.content}>
							<p className={styles.collapsibleText}>
								I love you bushels <br />
								I love you bunches <br />
								Through all of the mushes <br />
								And all of the crunches <br />
								<br />
								I love you a pound <br />
								I love you a ton <br />
								I love you so much <br />
								My little cinnamon bun <br />
							</p>

							<div className={styles.littleInfo}>
								<p>May 16th, 2022 -- 12:03 A.M.</p>
							</div>
						</div>
					</details>
				</div>

				<div className={styles.collapsibleWrapper}>
					<details>
						<summary className={styles.collapsibleTitle}>Sad Doot</summary>
						<div className={styles.content}>
							<p className={styles.collapsibleText}>
								Spooky season has ended <br></br>
								not nearly as intended. <br></br>
								For Christmas creeps ever closer. <br></br>
								The candy and pumpkins <br></br>
								replaced with toy munchkins- <br></br>
								Someone get me a bulldozer. <br></br> <br></br>
								What can I do? <br></br>
								What can I say? <br></br>
								Nothing can really <br></br>
								express my dismay. <br></br> <br></br>
								Because spooky scary skeletons <br></br>
								that sent shivers down my spine <br></br>
								they&apos;re shrieking skulls <br></br>
								won&apos;t shock my skull <br></br>
								or seal my doom tonight. <br></br> <br></br>
								But the spook lives on <br></br>
								every day of the year. <br></br>
								In all of my shrieks, <br></br>
								and all of my tears. <br></br> <br></br>
								So I give my salute <br></br>
								with a sad little doot <br></br>
								and wait for the days <br></br>
								of spooky scary skeletons.
							</p>

							<div className={styles.littleInfo}>
								<p>November 9th, 2021 -- 3:16 P.M.</p>
							</div>
						</div>
					</details>
				</div>

				<div className={styles.collapsibleWrapper}>
					<details>
						<summary className={styles.collapsibleTitle}>Bugs</summary>
						<p className={styles.collapsibleText}>
							100 bugs in the code I just wrote <br></br>
							100 bugs in the code <br></br>
							Take one down <br></br>
							Patch in around <br></br>
							300 bugs in the code I just wrote <br></br>
							800 bugs in the code I just wrote <br></br>
							2,000 bugs in the code I just wrote <br></br>
							Your PC ran into a problem and needs to restart
						</p>
						<div className={styles.littleInfo}>
							<p>April 2nd, 2021 -- 6:44 A.M.</p>
						</div>
					</details>
				</div>

				<div className={styles.collapsibleWrapper}>
					<details>
						<summary className={styles.collapsibleTitle}>Law Abiding Citizen</summary>
						<p className={styles.collapsibleText}>
							If you are what you eat, <br></br>
							then I’ll be just fine. <br></br>
							My logic can’t be beat. <br></br>
							I’m a law abiding citizen.
						</p>
						<div className={styles.littleInfo}>
							<p>March 10th, 2021 -- 6:43 P.M.</p>
						</div>
					</details>
				</div>

				<div className={styles.collapsibleWrapper}>
					<details>
						<summary className={styles.collapsibleTitle}>O.D.</summary>
						<p className={styles.collapsibleText}>
							Jack and Jill <br></br>
							went up the hill <br></br>
							To smoke some <br></br>
							crack cocaine. <br></br>
							<br></br>
							Jack tried to boast <br></br>
							and upped the dose, <br></br>
							And Jill took all the blame.
						</p>
						<div className={styles.littleInfo}>
							<p>January 14th, 2021 12:51 A.M.</p>
						</div>
					</details>
				</div>

				<div className={styles.collapsibleWrapper}>
					<details>
						<summary className={styles.collapsibleTitle}>To, Sleep</summary>
						<p className={styles.collapsibleText}>
							Why have you forsaken me? <br></br> <br></br>I lay here tired <br></br>
							In worry mired <br></br>
							Trying to fall asleep <br></br> <br></br>
							But my family&apos;s loud as fuck <br></br>
							And cringy memories are stuck <br></br>
							So I guess I&apos;ll count some sheep
						</p>
						<div className={styles.littleInfo}>
							<p>February 9th, 2021 -- 11:18 A.M.</p>
						</div>
					</details>
				</div>
			</div>
		</div>
	)
}
