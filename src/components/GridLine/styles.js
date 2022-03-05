import styled from 'styled-components';

export const GridLineContainer = styled.section`
    position: fixed;
    top: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 100vh;
    width: 100%;
`;

export const GridItem = styled.div`
    height: 100vh;
    border-right: 1px solid #FFFFFF21;
`;

