import React from 'react';
import Navbar from './Navbar';
import Head from 'next/head';
import Footer from './FiveColumnDark';
import tw from 'twin.macro';

const MainContainer = tw.div`flex flex-col min-h-screen`;
const MainContentContainer = tw.div`flex-grow p-8 mt-12 md:mt-8`;

const Layout = ({children, title, description}) => {
    return (
        <>
            <Head>
                <meta name={`description`} content={description}/>
                <title>{title}</title>
            </Head>
            <MainContainer>
                <Navbar />
                <MainContentContainer>
                    {children}
                </MainContentContainer>
                <Footer />
            </MainContainer>
        </>
    )
};

export default Layout;