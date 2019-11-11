import React from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';
import { Wrap } from './resumeStyles';

const Resume = () => {
    return (
        <Wrap>
            <Header/>
            <h1 className="comingsoon">Coming Soon!</h1>
            <Footer />
        </Wrap>
    )
}

export default Resume;