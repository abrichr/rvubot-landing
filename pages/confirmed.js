import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { VscCalendar, VscGlobe, VscCircleLargeFilled, VscCallOutgoing } from 'react-icons/vsc';

import Footer from '@components/Footer'

/*

Confirmed
You are scheduled with Richard Abrich.
--
RVUbot Consultation
5:30pm - 5:45pm, Friday, October 21, 2022
Eastern Time - US & Canada
+1 833-335-6116
A calendar invitation has been sent to your email address.

https://www.rvubot.com/confirmed?assigned_to=Richard%20Abrich&event_type_uuid=969656eb-e3e0-49cb-b744-552f562ca49a&event_type_name=RVUbot%20consultation&event_start_time=2022-10-21T19%3A00%3A00-04%3A00&event_end_time=2022-10-21T19%3A15%3A00-04%3A00&invitee_uuid=3f26f9ad-baaf-4620-b398-3ee35022aca0&invitee_full_name=Richard%20Abrich&invitee_email=abrichr%40gmail.com
*/


export default function Confirmed() {
  const router = useRouter();
  const {
    assigned_to,
    event_type_uuid,
    event_type_name,
    event_start_time,
    event_end_time,
    invitee_uuid,
    invitee_full_name,
    invitee_email,
  } = router.query;

  let dtStr = '';
  if (event_start_time && event_end_time) {
    const dateTimeFormat = new Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
    dtStr = dateTimeFormat.formatRange(
      Date.parse(event_start_time),
      Date.parse(event_end_time),
    );
  }

  return (
    <div className="container">
      <Head>
        <title>RVUbot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold mb-10">Confirmed</h1>
        <p className="mb-5">
          You are scheduled with {assigned_to}.
        </p>
        <div className="flex flex-col text-xl m-auto">
          <p className="flex flex-row">
            <VscCircleLargeFilled className="mr-3 text-blue-600" />
            {event_type_name}
          </p>
          <p className="flex flex-row text-neutral-500">
            <VscCalendar className="mr-3" />
            {dtStr}
          </p>
          <p className="flex flex-row text-neutral-500">
            <VscGlobe className="mr-3" />
            Eastern Time &mdash; US &amp; Canada
          </p>
          <p className="flex flex-row text-neutral-500">
            <VscCallOutgoing className="mr-3" />
            +1 833-335-6116
          </p>
        </div>
        <p className="mt-5 font-bold">
          A calendar invitation has been sent to your email address.
        </p>
        <p className="mt-10">
          Head back to the <Link href="/"><a className="underline text-blue-600">home page</a></Link>.
        </p>
      </main>

      <Footer />
    </div>
  )
}
