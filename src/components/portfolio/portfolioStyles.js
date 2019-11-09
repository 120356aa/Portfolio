import styled from 'styled-components';
import { fonts, colors, media } from '../../variables';

export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${colors.white};

    .section {
        width: 100%;
        border: 1px solid blue;
        padding: 40px 0;
        display: flex;
        flex-flow: column nowrap
        justify-content: space-between;
        align-items: center;

        .card {
            width: 300px;
            // border: 1px solid red;

            .view {
                width: 100%;
                height: 160px;
                background-color: ${colors.secondary};
                // border: 1px solid blue;
            }

            .info {
                width: 100%;
                height: 48px;
                // border: 1px solid green;
                background-color: ${colors.egg};
            }
        }
    }
`;