import React, { useState } from 'react';
import { HeaderContainer, Logo } from './styles';

const Header = () => {
    return (
        <HeaderContainer>
            <Logo>
                <img className='logo' src="/images/logo.png" alt='' />
            </Logo>
            {/* <button className='button'>
                Map View
            </button> */}
        </HeaderContainer>
    );
};

export default Header;