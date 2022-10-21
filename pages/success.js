import Head from 'next/head'
import Link from 'next/link'

import Footer from '@components/Footer'

export default function Success() {
  return (
    <div className="container">
      <Head>
        <title>RVUbot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold mb-10">Submission Received!</h1>
        <p className="mb-5">
          Thank you for your interest! We will reach out shortly.
        </p>
        <p>
          Head back to the <Link href="/"><a className="underline text-blue-600">home page</a></Link>.
        </p>
      </main>

      <Footer />
    </div>
  )
}
