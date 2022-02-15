// Root App Component

import "../../styles/globals.css";
import SiteLayout from "../components/shared/layout/Layout";
import { SessionProvider } from "next-auth/react"


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </SessionProvider>

  );
}

export default MyApp;
