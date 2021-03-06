import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import Link from 'next/link';
// import { css } from "styled-components/macro"; //eslint-disable-line

// import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import ResponsiveVideoEmbed from '../components/helpers/ResponsiveVideoEmbed';

const Container = styled.div`
  ${tw`relative -mx-8 h-screen -mt-4 bg-center bg-cover`}
  background-image: url("/images/background-5.jpg");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`mt-24 flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left opacity-75 sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0 !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

const Hero = () => {

    return (
        <Container>
            <OpacityOverlay />
            <HeroContainer>
                <TwoColumn>
                    <LeftColumn>
                        <Notification>We are all about Love Unity Excellence & Integrity</Notification>
                        <Heading>
                            <SlantedBackground>Serve Kakamega</SlantedBackground>
                        </Heading>
                        <Link href={`/plan-a-visit`}>
                            <PrimaryAction>Plan a Visit</PrimaryAction>
                        </Link>
                    </LeftColumn>
                    <RightColumn>
                        {/*<StyledResponsiveVideoEmbed*/}
                        {/*    url="//player.vimeo.com/video/374265101?title=0&portrait=0&byline=0&autoplay=0&responsive=1"*/}
                        {/*    background={"transparent"}*/}
                        {/*/>*/}
                        {/*<StyledResponsiveVideoEmbed*/}
                        {/*    url="/serve-video.mp4"*/}
                        {/*    background={"transparent"}*/}
                        {/*/>*/}
                    </RightColumn>
                </TwoColumn>
            </HeroContainer>
        </Container>
    );
};

export default Hero;