import React from 'react';
import tw from 'twin.macro';
import Link from 'next/link';
import styled from 'styled-components';
import { css } from 'styled-components/macro';
import { Container, ContentWithPaddingXl } from './misc/Layouts';
import { SectionHeading, Subheading as SubheadingBase } from './misc/Headings';
import {SectionDescription} from './misc/Typography';
import TwitterIcon from '../public/images/icons/twitter.svg';
import { ReactComponent as LinkedinIcon} from '../public/images/icons/instagram.svg';
import { ReactComponent as GithubIcon } from "../public/images/icons/youtube.svg";
import {PrimaryLink} from './misc/Links';

const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3`
const Description = tw(SectionDescription)`mx-auto text-center`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-cover bg-center rounded`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`

const LeadersList = ({
                    heading = "Meet These Fine Folks.",
                    subheading = "Our Leadership Team",
                    description = "Hear from the people who work hard to make sure you have a nice experience",
                    leaders
                }) => {
    return (
        <Container>
            <ContentWithPaddingXl>
                <HeadingContainer>
                    {subheading && <Subheading>{subheading}</Subheading>}
                    {heading && <Heading>{heading}</Heading> }
                    {description && <Description>{description}</Description> }
                </HeadingContainer>
                <Cards>
                    {leaders.map((leader) => (
                        <Card key={leader.id}>
                            <CardImage imageSrc={leader.image.url} />
                            <CardContent>
                                <span className="position">{leader.role}</span>
                                <span className="name">{leader.name}</span>
                                <Link href={`/leadership/${leader.id}`}>
                                   <PrimaryLink>
                                       View Bio
                                   </PrimaryLink>
                                </Link>
                                {/*<CardLinks>*/}
                                {/*    /!*{card.links.map((link, linkIndex) => (*!/*/}
                                {/*    /!*    <a key={linkIndex} className="link" href={link.url}>*!/*/}
                                {/*    /!*        <link.icon className="icon" />*!/*/}
                                {/*    /!*    </a>*!/*/}
                                {/*    /!*))}*!/*/}
                                {/*</CardLinks>*/}
                            </CardContent>
                        </Card>
                    ))}
                </Cards>
            </ContentWithPaddingXl>
        </Container>
    );
};

export default LeadersList;
