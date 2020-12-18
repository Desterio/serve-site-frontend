import Head from 'next/head'
import React from 'react';
import Layout from '../components/Layout';
import {SectionHeading} from '../components/misc/Headings';

const Sermons = () => {
    return (
        <Layout>
            <Head>
                <title>Serve Kakamega | Sermons</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <SectionHeading>Sermons</SectionHeading>
        </Layout>
    )
};

export default Sermons;