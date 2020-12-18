import Head from 'next/head'
import React from 'react';
import Layout from '../components/Layout';
import {SectionHeading} from '../components/misc/Headings';
import Faqs from '../components/FaqsList';
import ContactUsForm from '../components/ContactUsForm';

export async function getServerSideProps() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/faqs`);
    // const ourFaqs = await fetchQuery('faqs');
    const faqs = await response.json();
    return {
        props: {
            faqs
        }
    }
}

const ContactUs = ({faqs}) => {
    console.log(faqs);
    return (
        <Layout title={`Serve Kakamega | Contact Us`} description={`This is our contact us page.`}>
            <Faqs faqs={faqs} />
            <ContactUsForm />
        </Layout>
    )
};

export default ContactUs;