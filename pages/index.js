import Head from "next/head";
import { PopupButton } from "react-calendly";

import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";
import styles from './index.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>RVUbot</title>
        <link rel="icon" href="/favicon.svg" />
        <meta property="og:url" content="https://www.rvubot.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RVUbot" />
        <meta property="og:description" content="Medical billing audit. Easy RVU Recovery. Download, run, get paid." />
        <meta property="og:image" content="https://www.rvubot.com/rvubot-screenshot.png" />
        <meta property="og:image:type" content="image/png" />
      </Head>

      <main>
        <Header title="RVUbot" />


        <div className={styles.button_container}>
          {/*<a href="https://t.co/pNoUmSQm9A" className={styles.button}>*/}
              <PopupButton
                className={styles.button}
                url="https://calendly.com/mldsai/rvubot"
                /*
                 * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                 * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                 */
                rootElement={typeof window !== "undefined" ? document.getElementById("__next") : null}
                text="Book a Free Consultation"
              />
          {/*</a>*/}
        </div>
        <p className="description">
          or
        </p>
        <FeedbackForm />
        {/* <JokeBlock /> */}
      </main>
      <Footer />
    </div>
  );
}
