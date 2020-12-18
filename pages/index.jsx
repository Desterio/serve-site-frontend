import Head from 'next/head'
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import {ContentWithPaddingLg} from '../components/misc/Layouts';
import {SectionHeading, Subheading2} from '../components/misc/Headings';
import TestimonialList from '../components/TestimonialList';

export async function getServerSideProps() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/testimonials`);
    const testimonials = await response.json();
    return {
        props: {
            testimonials
        }
    }
}

const Home = ({testimonials}) => {
    console.log(testimonials);

    return (
        <Layout>
            <Head>
                <title>Serve Kakamega</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Hero/>
            <ContentWithPaddingLg className={`bg-gray-400`}>
                <SectionHeading>
                    We can’t wait to worship with you!
                </SectionHeading>
                <Subheading2>
                    We have two services every Sunday. The first service runs from 8.30 AM to 10.30 AM.
                    <br />
                    Our second service runs from 11.00 AM to 1.00 PM.
                    <br />
                    You can also join us online on all our social media platforms.
                </Subheading2>
            </ContentWithPaddingLg>

            <TestimonialList testimonials={testimonials} />
        </Layout>
    )
};

export default Home;
