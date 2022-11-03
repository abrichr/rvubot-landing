import React from "react";
import Head from "next/head";
import { PopupButton } from "react-calendly";
import dynamic from "next/dynamic";
// https://github.com/cookpete/react-player/issues/1474#issuecomment-1184645105
//const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });
const VideoPlayer = dynamic(() => import("../components/VideoPlayer"), {ssr: false});


import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";
import styles from './index.module.css'

export default function Home() {
  const playerRef = React.useRef();
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
          <PopupButton
            className={styles.button}
            url="https://calendly.com/mldsai/rvubot"
            rootElement={typeof window !== "undefined" ? document.getElementById("__next") : null}
            text="Book a Free Consultation"
          />
        </div>
        <VideoPlayer
          playerRef={playerRef}
        />
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
}
