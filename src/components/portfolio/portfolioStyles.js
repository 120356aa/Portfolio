import styled from 'styled-components';
import { fonts, colors, media } from '../../variables';

export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${colors.white};

    ${media.desktop} {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;
    }

    .section {
        width: 100%;
        // border: 1px solid blue;
        padding: 40px 0;
        display: flex;
        flex-flow: column nowrap
        justify-content: space-between;
        align-items: center;

        ${media.tablet} {
            flex-flow: row nowrap;
            justify-content: space-evenly
        }

        ${media.desktop} {
            max-width: 1100px;
            justify-content: center;
        }

        .card {
            width: 280px;
            // border: 1px solid red;
            margin: 20px 0;
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

            .view {
                width: 100%;
                height: 160px;
                background-color: ${colors.secondary};
                // border: 1px solid blue;

                &:hover {
                    background-color: ${colors.shadow};
                    .view_hover {
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

                .view_hover {
                    display: none;

                    button  {
                        // border: 3px solid ${colors.heading};
                        border: none;
                        background-color: ${colors.heading};
                        padding: 8px 10px;
                        width: 80px;
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
        }
    }
`;