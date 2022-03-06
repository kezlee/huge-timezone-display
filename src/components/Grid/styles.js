import styled from 'styled-components';

export const GridSection = styled.section`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    position: relative;
    z-index: 1;
`;

export const GridItem = styled.div`
    padding: 3vw 2vw;
    border-bottom: 1px solid #FFFFFF21;
    height: calc(33.3vh - 20px);
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:last-child {
        border-right: none;
    }
`;

export const OfficeCountry = styled.h3`
    font-weight: 900;
    font-size: 2vw;
`;

export const Separator = styled.div`
    width: 75px;
    margin: 15px 0 30px;
    border-bottom: 4px solid #E4368C;
`;

export const TimeZone = styled.div`
    font-weight: 500;
    font-size: 4vw;
    color: #ffffffCC;
`;