import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #FFFFFF21;
    align-items: center;
    padding-right: 40px;
    position: relative;
    z-index: 2;
    background: #1A1A1A;

    .button {
        color: #E4368C;
        font-size: 16px;
        -webkit-text-decoration: underline;
        text-decoration: underline;
        appearance: none;
        border: none;
        background: transparent;
    }
`;

export const Logo = styled.div`
    max-width: 60px;
    display: flex;
    width: 100%;
`;