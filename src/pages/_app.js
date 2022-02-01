// Root App Component

import "../../styles/globals.css";
import "antd/dist/antd.css";
import SiteLayout from "../components/shared/layout/Layout";

// import { configureFakeBackend } from '../services/fakeBackEndService';

// configureFakeBackend();

function MyApp({ Component, pageProps }) {
  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  );
}

export default MyApp;
