import Head from 'next/head'
import React from 'react';
import Layout from '../components/Layout';
import {SectionHeading} from '../components/misc/Headings';

const Ministries = () => {
    return (
        <Layout>
            <Head>
                <title>Serve Kakamega | Ministries</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <SectionHeading>Ministries</SectionHeading>
        </Layout>
    )
};

export default Ministries;