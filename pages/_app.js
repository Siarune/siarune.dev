import { ClerkProvider } from '@clerk/nextjs';
import styles from '../styles/global.sass'
import MetaBundle from '../components/MetaBundle'


function MyApp({ Component, pageProps }) {

	return (
		<ClerkProvider>

			<MetaBundle />

			<Component {...pageProps} />

		</ClerkProvider>
	);
}

export default MyApp;