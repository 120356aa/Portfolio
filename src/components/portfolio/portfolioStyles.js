import styled from 'styled-components';

import { fonts, colors, media } from '../../variables';
import Alpha from '../../assets/alphavisuals.jpg';
import PizzaTime from '../../assets/pizzatime.jpg';
import K9 from '../../assets/k9pawdecor.jpg';
import PSite from '../../assets/andreyyurlov.jpg';

export const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${colors.white};
    position: absolute;
    // display: flex;
    // flex-flow: column nowrap;
    // justify-content: center;
    // align-items: center;

    ${media.desktop} {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;
    }

    .heading {
        width: 100%;
        font-family: ${fonts.primary};
        color: ${colors.heading};
        box-shadow: 0 0 8px ${colors.shadow};
        font-size: 26px;
        font-weight: 600;
        text-align: center;
        padding: 15px 0 15px 0;
        z-index: 2;
        position: relative;
          ${media.tablet} {
            font-size: 28px;
            padding: 18px 0 18px 0;
          }
          ${media.desktop} {
            font-size: 30px;
            padding: 20px 0 20px 0;
          }
      }

    .section {
        width: 100%;
        // border: 1px solid blue;
        padding: 40px 0 60px 0;
        display: flex;
        flex-flow: column;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

        &:nth-of-type(2) {
            margin: 0 0 100px 0;
        }

        ${media.tablet} {
            flex-flow: row nowrap;
            justify-content: space-evenly
            padding: 40px 0 100px 0;
        }

        ${media.desktop} {
            max-width: 1100px;
            justify-content: center;
        }

        .card {
            width: 280px;
            // border: 1px solid red;
            margin: 26px 0;
            box-shadow: 0 2px 5px ${colors.shadow};

            
            ${media.desktop} {
                &:nth-of-type(2) {
                    margin: 30px;
                }
            }

            &:nth-of-type(3) {
                margin: 20px 0 80px 0;

                ${media.tablet} {
                    margin: 20px 0;
                }

            }

            .view.alpha {
                background: url('${Alpha}');
                background-size: cover;
            }

            .view.pizzatime {
                background: url('${PizzaTime}');
                background-size: cover;
            }

            .view.psite {
                background: url('${PSite}');
                background-size: cover;
            }

            .view {
                width: 100%;
                height: 140px;

                &:hover {
                    ${media.desktop} {
                        background-color: ${colors.shadow};
                    }
                    
                    .view_hover {
                        display: none;

                        ${media.desktop} {
                            width: 100%;
                            height: 100%;
                            // border: 1px solid red;
                            display: flex;
                            flex-flow: row nowrap;
                            justify-content: center;
                            align-items: center;
                            outline: 2px solid ${colors.shadow};
                        }
                    }
                }

                .view_hover {
                    display: none;

                    a {
                        text-decoration: none;
                        text-align: center;
                        // border: 3px solid ${colors.heading};
                        border: none;
                        background-color: ${colors.heading};
                        padding: 10px 10px;
                        width: 60px;
                        font-family: ${fonts.primary};
                        font-weight: 600;
                        font-size: 16px;
                        color: ${colors.white};

                        &:hover { background-color: ${colors.primary}; }
                        &:nth-of-type(1) { margin-right: 5px; }
                        &:nth-of-type(2) { margin-left: 5px; }
                    }
                }
            }

            .info {
                .desc {
                    padding: 28px 28px;

                    h3 {
                        font-family: ${fonts.primary};
                        color: ${colors.heading};
                        font-size: 26px;
                        font-weight: 700;

                        ${media.desktop} {
                            font-size: 30px;
                        }
                    }

                    p {
                        margin-top: 8px;
                        font-family: ${fonts.primary};
                        font-size: 16px;
                        color: ${colors.black};

                        span { font-weight: 600; }

                        &:nth-of-type(1) {
                            margin-top: 28px;
                        }
                    }
                }

                .mobile_btns {
                    width: 100%;
                    // border: 1px solid red;
                    padding: 15px 0;
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: center;
                    aling-items: center;
    
                    a {
                        // border: 3px solid ${colors.heading};
                        border: none;
                        background-color: ${colors.heading};
                        padding: 10px 10px;
                        width: 34%;
                        text-decoration: none;
                        text-align: center;
                        font-family: ${fonts.primary};
                        font-weight: 600;
                        font-size: 16px;
                        color: ${colors.white};
                        // margin: 0 0 0 10px;
    
                        &:hover { background-color: ${colors.primary}; }
                        &:nth-of-type(1) { margin-right: 8px; }
                        &:nth-of-type(2) { margin-left: 8px; }
                    }
                }
            }
        }
    }
`;