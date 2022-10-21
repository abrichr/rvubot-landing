import Head from "next/head";
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="RVUbot" />
        <div className={styles.button_container}>
          <a href="https://t.co/pNoUmSQm9A" className={styles.button}>
            Book a Free Consultation
          </a>
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
