import styled from 'styled-components';
import { breakpoints } from '../../theme/index';

export const GridSection = styled.section`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    position: relative;
    z-index: 1;

    @media ${breakpoints.md} {
        grid-template-columns: repeat(4, 1fr);
    }

    @media ${breakpoints.xs} {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const GridItem = styled.div`
    padding: 3vw 2vw;
    border-bottom: 1px solid #FFFFFF21;
    height: calc(33.3vh - 20px);
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${breakpoints.md} {
        height: calc(25vh - 15px);
    }

    @media ${breakpoints.xs} {
        height: calc(20vh - 12px);
    }
    
    &:last-child {
        border-right: none;
    }
`;

export const OfficeCountry = styled.h3`
    font-weight: 900;
    font-size: 2vw;

    @media ${breakpoints.md} {
        font-size: 2.5vw;
    }

    @media ${breakpoints.xs} {
        font-size: 15px;
    }
`;

export const Separator = styled.div`
    width: 75px;
    margin: 15px 0 30px;
    border-bottom: 4px solid #E4368C;

    @media ${breakpoints.xsmd} {
        margin: 4px 0 8px;
    }
`;

export const TimeZone = styled.div`
    font-weight: 500;
    font-size: 4vw;
    color: #ffffffCC;

    @media ${breakpoints.md} {
        font-size: 5vw;
    }

    @media ${breakpoints.xs} {
        font-size: 30px;
    }
`;