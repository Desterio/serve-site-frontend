import Head from 'next/head'
import React from 'react';
import Layout from '../components/Layout';
import {SectionHeading} from '../components/misc/Headings';
import EventsList from '../components/EventsList';

export async function getServerSideProps() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const response = await fetch(`${baseUrl}/events`);
    const events = await response.json();
    return {
        props: {
            events
        }
    }
}

const Events = ({events}) => {
    console.log(events);
    return (
        <Layout>
            <Head>
                <title>Serve Kakamega | Events</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <EventsList events={events} />
        </Layout>
    )
};

export default Events;