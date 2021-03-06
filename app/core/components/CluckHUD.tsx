import Link from "next/link";
import Image from "next/image";
import styles from "styles/chud.module.sass"
import { useClerk, useUser, UserButton, SignedOut, SignedIn } from "@clerk/nextjs"
// import { logout } from 'app/auth/mutations/logout'
// import { useMutation } from "blitz"

export default function CluckHUD({ theme }: { theme: any }) {
	// const [logoutMutation] = useMutation(logout)

	return (
		<nav className={theme}>
			<ul className={styles.navbarNav}>
				<li className={styles.intro}>
					<div className={styles.tWrap}>
						<Image
							src="/hentieSolid.png"
							alt="chikin"
							className={styles.thumbnail}
							height="32"
							width="32"
							layout="fixed"
						/>
					</div>
					<Link href="/"><a>
					<h2 className={styles.me}>
						Siarune<span className={styles.span}>.dev</span>
					</h2>
					</a></Link>
				</li>

				<SignedIn>
					<SignedInButton />
				</SignedIn>
				<SignedOut>
					<SignedOutButton />
				</SignedOut>

				{/* <li>
					<button onClick={() => logoutMutation()}></button>
				</li> */}
			</ul>
		</nav>
	)
}

const SignedOutButton = () => {
	const { openSignIn, openSignUp } = useClerk()

	return (
		<li className={styles.sign}>
			<button className={styles.btn} onClick={() => openSignIn()}>
				<h3>Sign in</h3>
			</button>
		</li>
	)
}

const SignedInButton = () => {
	return (
		<li className={styles.sign}>
			<UserButton />
		</li>
	)
}
