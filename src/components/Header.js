import React from 'react';
import styled from '@emotion/styled';

const ContenedorHeader = styled.header`
    background-color: grey;
    padding: 25px;
    font-weight : bold;
    color: #FFFFFF;
`;

const TextoHeader = styled.h1`
    font-size: 2rem; 
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

const Header = ({titulo}) => {
    return (
        <div>
            <ContenedorHeader>
                <TextoHeader>{titulo}</TextoHeader>
            </ContenedorHeader>
        </div>
    );
};

export default Header;