import { GoogleAnalytics } from "nextjs-google-analytics";
import '@styles/globals.css'

function Application({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  )
}

export default Application
