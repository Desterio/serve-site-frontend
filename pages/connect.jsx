import Head from 'next/head'
import React from 'react';
import Layout from '../components/Layout';
import {SectionHeading} from '../components/misc/Headings';
import GroupList from '../components/GroupList';

export async function getServerSideProps() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/groups`);
    const groups = await response.json();
    return {
        props: {
            groups
        }
    }
}

const Connect = ({groups}) => {
    console.log(groups);
    return (
        <Layout>
            <Head>
                <title>Serve Kakamega | Connect</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <GroupList groups={groups} />
        </Layout>
    )
};

export default Connect;