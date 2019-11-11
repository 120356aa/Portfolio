import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

import { Wrap } from './portfolioStyles';


const Portfolio = () => {
    return (
        <Wrap>
            <Header />
            <div className="section">
                <div className="card">
                    <div className="view">
                        <div className="view_hover">
                            <button>Github</button>
                            <button>Demo</button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="view">
                        <div className="view_hover">
                            <button>Github</button>
                            <button>Demo</button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="view">
                        <div className="view_hover">
                            <button>Github</button>
                            <button>Demo</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Wrap>
    )
}

export default Portfolio;