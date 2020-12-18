import {GlobalStyles} from 'twin.macro';
import React from 'react';
// import AnimationRevealPage from '../components/helpers/AnimationRevealPage';

function MyApp({Component, pageProps}) {
    return (
        <>
            <GlobalStyles/>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
