import React from 'react';
import styled from 'styled-components';

const Contenedor = styled.div`
    position: fixed;
    width: 100%;
    height: 75px;
    background: rgba(0,0,0,0.5);
    color: white;
    >h3{
        margin-left: 20px;
    }
`
export default () => (
    <Contenedor>
        <h3>That's My Movie</h3>
    </Contenedor>
)