import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
display: grid;
grid-gap: 10px;
margin-top: 1em;
margin-left: 6em;
margin-right: 6em;
grid-template-columns: repeat(12, 1fr);
grid-auto-rows: minmax(25px, auto);
`;

export const About = () => (
    <GridWrapper>
        <h2>About page</h2>
        <p>Stare at ceiling lay on arms 
            while you`re using the keyboard so this human feeds me. </p>
            <p>I am a kitty cat, sup, feed me, no cares in the world</p>
            <p> Meow,meow, i tell me human purr for no reason but to chase after</p>
    </GridWrapper>
)