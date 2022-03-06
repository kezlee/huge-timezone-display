import styled from 'styled-components';
import { breakpoints } from '../../theme/index';

export const GridLineContainer = styled.section`
    position: fixed;
    top: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 100vh;
    width: 100%;

    @media ${breakpoints.md} {
        grid-template-columns: repeat(4, 1fr);
    }

    @media ${breakpoints.xs} {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const GridItem = styled.div`
    height: 100vh;
    border-right: 1px solid #FFFFFF21;
`;

