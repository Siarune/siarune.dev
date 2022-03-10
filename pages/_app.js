import { useRouter } from "next/router";
import { ClerkProvider } from '@clerk/nextjs';
import '../styles/globals.sass'

function MyApp({ Component, pageProps }) {
  const { push } = useRouter();
  return (
    <ClerkProvider
      frontendApi="clerk.patient.shrimp-78.lcl.dev"
      navigate={(to) => push(to)}
    >
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp
