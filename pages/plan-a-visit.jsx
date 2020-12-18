import Head from 'next/head'
import React from 'react';
import Layout from '../components/Layout';
import {SectionHeading} from '../components/misc/Headings';

const PlanAVisit = () => {
    return (
        <Layout>
            <Head>
                <title>Serve Kakamega | Visit Us</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <SectionHeading>Plan a Visit</SectionHeading>
        </Layout>
    )
};

export default PlanAVisit;