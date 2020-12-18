import React, {useState} from 'react';
import Slider from 'react-slick';
import tw from 'twin.macro';
import styled from 'styled-components/macro'; //eslint-disable-line
import { Container, ContentWithPaddingXl } from './misc/Layouts';
import { SectionHeading, Subheading as SubheadingBase } from './misc/Headings';
import { SectionDescription } from './misc/Typography';
import { ReactComponent as QuoteIconBase } from '../public/images/icons/quotes-l.svg'
import { ReactComponent as ArrowLeftIcon } from '../public/images/icons/arrow-left-3-icon.svg'
import { ReactComponent as ArrowRightIcon } from '../public/images/icons/arrow-right-3-icon.svg'

import "slick-carousel/slick/slick.css";

const PrimaryBackgroundContainer = tw(Container)`-mx-8 px-8 bg-primary-900 text-gray-100`;

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;

const TestimonialsSlider = styled(Slider)`
  ${tw`flex mt-16 mx-auto max-w-xs sm:max-w-xl lg:max-w-4xl text-left bg-gray-100 rounded-lg text-gray-900`}
  .slick-track {
    ${tw`flex!`}
  }
  .slick-slide {
    ${tw`h-auto`}
  }
  .slick-slide > div {
    ${tw`h-full`}
  }
`;
const Testimonial = tw.div`px-6 py-8 sm:px-20 sm:py-12 focus:outline-none flex! flex-col justify-between h-full`
const QuoteContainer = tw.div`relative`
const QuoteIcon = tw(QuoteIconBase)`absolute opacity-20 top-0 left-0 transform -translate-y-2 -translate-x-1/2 sm:-translate-x-full w-10 fill-current text-primary-500`
const Quote = tw.blockquote`font-medium sm:font-normal relative text-sm sm:text-xl text-center sm:text-left`
const CustomerInfoAndControlsContainer = tw.div`mt-8 flex items-center flex-col sm:flex-row justify-center text-center sm:text-left`
const CustomerImage = tw.img`w-24 h-24 rounded-full`
const CustomerNameAndProfileContainer = tw.div`mt-4 sm:mt-0 sm:ml-4 flex flex-col`
const CustomerName = tw.span`text-lg font-semibold`
const CustomerProfile = tw.span`text-sm font-normal text-gray-700`
const ControlsContainer = tw.div`sm:ml-auto flex`
const ControlButton = styled.button`
  ${tw`text-gray-600 hover:text-primary-700 focus:outline-none transition-colors duration-300 ml-4 first:ml-0 sm:first:ml-4 mt-4 sm:mt-0`}
  .icon {
    ${tw`fill-current w-6`}
  }
`;

const TestimonialList = ({
                    subheading = "",
                    heading = "What our Members are Saying",
                    description = "As a church we value most what our members have to say about our culture, what we do and how we go about our pursuit of God",
                    testimonials
                }) => {
    const [sliderRef, setSliderRef] = useState(null)

    return (
        <PrimaryBackgroundContainer>
            <ContentWithPaddingXl>
                <HeadingContainer>
                    {subheading && <Subheading>{subheading}</Subheading>}
                    <Heading>{heading}</Heading>
                    <Description>{description}</Description>
                </HeadingContainer>
                <TestimonialsSlider arrows={false} ref={setSliderRef}>
                    {testimonials.map((testimonial) => (
                        <Testimonial key={testimonial.id}>
                            <QuoteContainer>
                                <QuoteIcon />
                                <Quote>
                                    {testimonial.text}
                                </Quote>
                            </QuoteContainer>
                            <CustomerInfoAndControlsContainer>
                                <CustomerImage src={testimonial.image.url} />
                                <CustomerNameAndProfileContainer>
                                    <CustomerName>
                                        {testimonial.name}
                                    </CustomerName>
                                    {/*<CustomerProfile>*/}
                                    {/*    {testimonial.customerProfile}*/}
                                    {/*</CustomerProfile>*/}
                                </CustomerNameAndProfileContainer>
                                <ControlsContainer>
                                    <ControlButton onClick={sliderRef?.slickPrev}>
                                        <ArrowLeftIcon className="icon" />
                                    </ControlButton>
                                    <ControlButton>
                                        <ArrowRightIcon className="icon" onClick={sliderRef?.slickNext}/>
                                    </ControlButton>
                                </ControlsContainer>
                            </CustomerInfoAndControlsContainer>
                        </Testimonial>
                    ))}
                </TestimonialsSlider>
            </ContentWithPaddingXl>
        </PrimaryBackgroundContainer>
    );
};

export default TestimonialList;
