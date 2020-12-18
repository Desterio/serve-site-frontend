import React, {useState} from 'react';
import {motion} from 'framer-motion';
import tw from 'twin.macro';
import styled from 'styled-components';
import {SectionHeading, Subheading as SubheadingBase} from './misc/Headings';
import PlusIcon from '../public/images/icons/plus.svg';
import MinusIcon from '../public/images/icons/minus.svg';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const TwoColumn = tw.div`flex`;
const Column = tw.div``;

const Image = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    props.imageContain ? tw`bg-contain bg-no-repeat` : tw`bg-cover`,
    props.imageShadow ? tw`shadow` : tw`shadow-none`,
    tw`hidden lg:block rounded h-144 bg-center`
]);

const FAQContent = tw.div`lg:ml-12`;
const Subheading = tw(SubheadingBase)`mb-4 text-center lg:text-left`;
const Heading = tw(SectionHeading)`lg:text-left`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;

const FAQSContainer = tw.dl`mt-12`;
const FAQ = tw.div`cursor-pointer mt-8 select-none border lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = styled.span`
  ${tw`ml-2 bg-primary-500 text-gray-100 p-1 rounded-full group-hover:bg-primary-700 group-hover:text-gray-200 transition duration-300`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const Answer = motion.custom(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

export default function FaqsList({
                                     subheading = '',
                                     heading = 'Got Questions?',
                                     description = 'In-case you still have questions kindly reach us through the form at the end of the page.',
                                     imageSrc = '/images/background-7.jpg',
                                     imageContain = false,
                                     imageShadow = true,
                                     faqs = null
                                 }) {
    /*
     * You can modify FAQs either by modifying the below defaultFaqs array or by passing a custom array of FAQs using
     * the faqs prop
     */

    const defaultFaqs = [
        {
            question: 'How big is the church?',
            answer:
                'Our church, started in 2011, has grown into a healthy and vibrant congregation. We currently have more than 600 active members and regular attendees. Our 8:30 a.m. service averages around 100 people; our 11: 00 a.m. Service usually has about 300 in attendance.',
        },
        {
            question: 'What do you offer for children on Sunday morning?',
            answer:
                'Children are a special part of our congregation and we value them as full participants in the life of our church. Sunday School classes for children (preschool through the 12th grade) begin at 9:30 a.m. Following the Children’s Time in the 10:45 worship service, children ages 3 years old through second grade are dismissed to participate in their own time of singing, prayer and Bible learning known as Worship and Wonder (see below for more information on this program).',
        },
        {
            question: 'Who goes to your church ?',
            answer:
                'We have quite a mixture of people at Serve. Our congregation truly spans the ages, from newborns to folks in their 70s. You’ll find just about every type of person here – married, single, divorced, widowed – professionals, workers, retired – life-long Kakamega residents and those who have just recently moved to Kakamega. But even more important than the kind of people who go here is the kind of people who are welcome here – everyone!',
        },
        {
            question: 'Do I have to belong to your denomination to attend ?',
            answer:
                'Not at all! In fact, many in our congregation come from a church background other than the Christian Church (Disciples of Christ). We have many former Catholics, Lutherans, Presbyterians and Methodists. We are a “patchwork” church – people with different church backgrounds “woven together” by God’s grace.',
        },
        {
            question: 'Do you have to dress up to attend your worship service ? ',
            answer:
                'No! Dressing up is not a requirement to worship with us at Crestwood. Some do wear their “Sunday best” but you’re also likely to see someone in slacks and a casual shirt, or even jeans. We believe the most important part about Sunday morning is showing up, ready to worship God.',
        },
        {
            question: 'What kind of things do you do in your worship service ?',
            answer:
                'We strive to create a warm and welcoming atmosphere at Serve. We greet each other so everyone feels welcomed; we share announcements and church news; we sing and listen to our choir perform beautiful music; we share the congregation’s joys and concerns and lift them to God in prayer; we read the Bible and talk about it through the sermon; we collect an offering to further God’s work; and we take communion weekly.',
        },
    ];

    // const [faqs2, setFaqs2] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(false);

    if (!faqs || faqs.length === 0) faqs = defaultFaqs;

    const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

    const toggleQuestion = questionIndex => {
        if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
        else setActiveQuestionIndex(questionIndex);
    };

    return (
            <Content>
                <TwoColumn>
                    <Column tw="hidden lg:block w-5/12 flex-shrink-0">
                        <Image imageContain={imageContain} imageShadow={imageShadow} imageSrc={imageSrc}/>
                    </Column>
                    <Column>
                        <FAQContent>
                            {subheading ? <Subheading>{subheading}</Subheading> : null}
                            <Heading>{heading}</Heading>
                            <Description>{description}</Description>
                            <FAQSContainer>
                                {faqs.map((faq, index) => (
                                    <FAQ
                                        key={index}
                                        onClick={() => {
                                            toggleQuestion(index);
                                        }}
                                        className="group"
                                    >
                                        <Question>
                                            <QuestionText>{faq.question}</QuestionText>
                                            <QuestionToggleIcon>
                                                {activeQuestionIndex === index ? <MinusIcon/> : <PlusIcon/>}
                                            </QuestionToggleIcon>
                                        </Question>
                                        <Answer
                                            variants={{
                                                open: {opacity: 1, height: 'auto', marginTop: '16px'},
                                                collapsed: {opacity: 0, height: 0, marginTop: '0px'}
                                            }}
                                            initial="collapsed"
                                            animate={activeQuestionIndex === index ? 'open' : 'collapsed'}
                                            transition={{duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98]}}
                                        >
                                            {faq.answer}
                                        </Answer>
                                    </FAQ>
                                ))}
                            </FAQSContainer>
                        </FAQContent>
                    </Column>
                </TwoColumn>
            </Content>
    );
}

export async function getServerSideProps() {
    const ourFaqs = await fetchQuery('faqs');

    return {
        props: {
            ourFaqs
        }
    };
}
