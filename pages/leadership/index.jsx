import Head from 'next/head'
import React from 'react';
import Layout from '../../components/Layout';
import {SectionHeading} from '../../components/misc/Headings';
import LeadersList from '../../components/LeadersList';

export async function getServerSideProps() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/leaders`);
    const leaders = await response.json();
    return {
        props: {
            leaders
        }
    }
}

const Index = ({leaders}) => {
    console.log(leaders);

    return (
        <Layout>
            <Head>
                <title>Serve Kakamega | Leadership</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <LeadersList leaders={leaders} />
        </Layout>
    )
};

export default Index;