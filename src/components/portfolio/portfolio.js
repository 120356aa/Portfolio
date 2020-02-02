import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

import { Wrap } from './portfolioStyles';


const Portfolio = () => {
    return (
        <Wrap>
            <Header />
            <div className="heading">My Portfolio</div>
            <div className="section">
                <div className="card">
                    <div className="view alpha">
                        {/* <div className="view_hover">
                            <a href="https://alphavisuals.netlify.com/" target="_blank">Github</a>
                            <a href="https://github.com/120356aa/alphavisuals" target="_blank">Demo</a>
                        </div> */}
                    </div>
                    <div className="info">
                        <div className="desc">
                            <h3>Alpha Visuals</h3>
                            <p><span>Status: </span>Under Development</p>
                            <p><span>Type: </span>Client</p>
                            <p><span>Framework: </span>React</p>
                        </div>
                        <div className="mobile_btns">
                            <a href="https://github.com/120356aa/alphavisuals" target="_blank">Github</a>
                            <a href="https://alphavisuals.netlify.com/" target="_blank">Demo</a>
                        </div>
                    </div>
                </div>
                {/* <div className="card">
                    <div className="view pizzatime"> */}
                        {/* <div className="view_hover">
                            <a href="https://github.com/pizza-tim3/pizza-tim3-front/tree/master/pizza-time" target="_blank">Github</a>
                            <a href="https://www.pizzatime.life/login" target="_blank">Demo</a>
                        </div> */}
                    {/* </div>
                    <div className="info">
                        <div className="desc">
                            <h3>Pizza Time</h3>
                            <p><span>Status: </span>Debugging / Testing</p>
                            <p><span>Type: </span>School Project</p>
                            <p><span>Framework: </span>React</p>
                        </div>
                        <div className="mobile_btns">
                            <a href="https://github.com/pizza-tim3/pizza-tim3-front/tree/master/pizza-time" target="_blank">Github</a>
                            <a href="https://www.pizzatime.life/" target="_blank">Demo</a>
                        </div>
                    </div>
                </div> */}
                {/* <div className="card">
                    <div className="view">
                        <div className="view_hover">
                            <button>Github</button>
                            <button>Demo</button>
                        </div>
                    </div>
                    <div className="info">
                        <div className="desc">
                            <h3>Andrey Portfolio</h3>
                            <p><span>Status: </span>Refactoring / Features</p>
                            <p><span>Type: </span>Personal</p>
                            <p><span>Framework: </span>React</p>
                        </div>
                        <div className="mobile_btns">
                            <button>Github</button>
                            <button>Demo</button>
                        </div>
                    </div>
                </div> */}
                <div className="card">
                    <div className="view psite">
                        {/* <div className="view_hover">
                            <a href="https://github.com/120356aa/mepaws/tree/development" target="_blank">Github</a>
                            <a href="https://k9decor-dev.netlify.com/" target="_blank">Demo</a>
                        </div> */}
                    </div>
                    <div className="info">
                        <div className="desc">
                            <h3>Portfolio</h3>
                            <p><span>Status: </span>Refactoring / Features </p>
                            <p><span>Type: </span>Personal</p>
                            <p><span>Framework: </span>React</p>
                        </div>
                        <div className="mobile_btns">
                            <a href="https://github.com/120356aa/portfolio/tree/development" target="_blank">Github</a>
                            <a href="https://andreyyurlov.netlify.com/" target="_blank">Demo</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="section two">

            </div> */}
            <Footer />
        </Wrap>
    )
}

export default Portfolio;