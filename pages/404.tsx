import Link from "next/link";
import styles from "/styles/404.module.sass";

export default function FourOhFour() {
	return (
		<div className={styles.cont}>
			<div className={styles.infoBox}>
				<h1 className={styles.fof}>404</h1>
				<div className={styles.stack}>
					<h2>Well, this is embarassing...</h2>
					<h2>We couldn&apos;t find what you were looking for.</h2>
				</div>
			</div>

			<div className={styles.redirects}>
                <Link href="/" passHref>
				<button className={styles.homeBtn}>
					<h3>Go to Home?</h3>
				</button>
                </Link>
			</div>
		</div>
	);
}
