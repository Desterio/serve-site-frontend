import Head from 'next/head'
import React from 'react';
import Layout from '../components/Layout';

import {SectionHeading, Subheading} from '../components/misc/Headings';
import {SectionDescription} from '../components/misc/Typography';
import MainFeature1 from '../components/AboutUsCardTwoColWithButton';
import MainFeature2 from '../components/AboutUsCardThreeColSimple';

import SupportIconImage from '../public/images/icons/support-icon.svg';
import ShieldIconImage from '../public/images/icons/shield-icon.svg';
import CustomerLoveIconImage from '../public/images/icons/simple-icon.svg';

const serveDescription = 'We are a group of people who are, in a word, together. We’re together with God because of his kindness and commitment to humanity; together as a family learning to embody this kindness and commitment one to another and beyond into the wider world. All this is only possible because of Jesus, the one who brings us together and keeps us together.'
const visionDescription = 'We believe a church should be a transforming agent and as a Church our vision is to see a transformed humanity, whole-rounded individuals living for Jesus Christ.'
const missionDescription = "We believe in carrying out the Church's core mandate which is 'The Great Commission.' While at it we make sure that families are laid on the foundation of Christ.";

const About = () => {
    return (
        <Layout>
            <Head>
                <title>Serve Kakamega | About Us</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <SectionHeading>About Us</SectionHeading>
            <MainFeature1
                subheading={<Subheading>About Serve</Subheading>}
                heading="We are family of Christ followers"
                description={serveDescription}
                imageSrc="/images/background-10.jpg"
            />
            <MainFeature1
                subheading={<Subheading>Our Vision</Subheading>}
                heading="We aim to touch and transform humanity (spirit, body and soul) through the word & prayer."
                description={visionDescription}
                imageSrc="/images/background-8.jpg"
                textOnLeft={false}
            />
            <MainFeature1
                subheading={<Subheading>Our Mission</Subheading>}
                heading="To teach, preach, evangelize, disciple and build strong christian families"
                description={missionDescription}
                imageSrc="/images/background-9.jpg"
            />
            <MainFeature2
                subheading={<Subheading>Our Core Values</Subheading>}
                heading="We strongly believe in these values:"
                description=""
                cards={[
                    {
                        imageSrc: SupportIconImage,
                        title: "Love",
                        description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
                    },
                    {
                        imageSrc: ShieldIconImage,
                        title: "Unity",
                        description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
                    },
                    {
                        imageSrc: CustomerLoveIconImage,
                        title: "Integrity",
                        description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
                    },
                    {
                        title: "Excellence",
                        description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
                    }
                ]}
                linkText=""
            />
        </Layout>
    )
};

export default About;