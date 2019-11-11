import styled from 'styled-components';
import { fonts, colors, media } from '../../variables';

export const Wrap = styled.div`
    background-color: ${colors.white};
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    .comingsoon {
        font-family: ${fonts.primary};
        color: ${colors.heading};
        font-size: 50px;
        font-weight: 700;
        margin-top: 200px;
        position:
        // align-self: center;
    }
`;