import styles from '/styles/chud.module.sass'
import Image from 'next/image'
import { useClerk, useUser, UserButton, SignedOut, SignedIn } from "@clerk/nextjs";

export default function CluckHUD() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarNav}>

                <li className={styles.intro}>
                    <div className={styles.tWrap}>
                        <Image src="/hentieSolid.png" alt="chikin" className={styles.thumbnail} height="32" width="32" layout="fixed" />
                    </div>
                    {/* <Link href="/"> */}
                    <h2 className={styles.me}>Siarune<span className={styles.span}>.dev</span></h2>
                    {/* </Link> */}
                </li>
                <SignedIn>
                    <SignedInButton />
                </SignedIn>
                <SignedOut>
                    <SignedOutButton />
                </SignedOut>
            </ul>
        </nav>
    )
}

const SignedOutButton = () => {
    const { openSignIn, openSignUp } = useClerk();

    return (
        <li className={styles.sign}>
            <button className={styles.btn} onClick={() => openSignIn()}>
                <h3>Sign in/up</h3>
            </button>
        </li>
    );
}

const SignedInButton = () => {
    return (
        <li className={styles.sign}>
            <UserButton />
        </li>
    );
}