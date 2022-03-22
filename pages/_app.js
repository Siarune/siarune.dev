import { ClerkProvider } from '@clerk/nextjs';
import '../styles/global.sass'
import base from '/styles/base.module.sass';
import MetaBundle from '../components/MetaBundle'
import CluckHUD from '/components/CluckHUD'


function MyApp({ Component, pageProps }) {

	return (
		<ClerkProvider>

			<MetaBundle />

			<main className={base.main}>

				<CluckHUD />

				<Component {...pageProps} />

			</main>

		</ClerkProvider>
	);
}

export default MyApp;