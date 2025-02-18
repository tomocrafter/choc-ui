import type { AppProps } from "next/app";
import Theme from "theme";
import SiteSettings from "components/site-settings";
import PageHead from "components/head/static";

import splitbee from "@splitbee/web";

splitbee.init();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <PageHead />
      <Component {...pageProps} />
      <SiteSettings />
    </Theme>
  );
}

export default MyApp;
