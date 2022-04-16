import { AnimatePresence } from 'framer-motion'
import Chakra from "../components/chakra";
import Fonts from "../components/Fonts";
import Layout from "../components/layouts/main";
import "../lib/style.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  );
}

export default MyApp;
