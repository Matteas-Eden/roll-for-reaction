import React from 'react';
import styled, { keyframes } from 'styled-components';

const Div = styled.div`
    top: ${props => props.startPosition[1]}px;
    left: ${props => props.startPosition[0]}px;
    width: ${props => props.spell.size.width};
    height: ${props => props.spell.size.height};
    z-index: 1000;
    animation: ${props => props.animation} .35s steps(5);
    background-image: url('${props => props.spell.image}');
    background-position-x: 0px;
`;

export const CastSpell = ({ spell, startPosition, endPosition, direction }) => {
    let rotation;
    switch (direction) {
        case 'NORTH':
            rotation = '270';
            break;

        case 'SOUTH':
            rotation = '90';
            break;

        case 'EAST':
            rotation = '0';
            break;

        case 'WEST':
            rotation = '180';
            break;
    }

    console.log(startPosition, endPosition);

    const animation = keyframes`
    0% {
        transform: rotate(${rotation}deg);
    }

    100% {
        transform: translate(${endPosition[0] -
            startPosition[0]}px, ${endPosition[1] -
        startPosition[1]}px) rotate(${rotation}deg);
        background-position-x: ${spell.size.total};
    }
`;

    console.log(animation);

    return (
        <Div
            spell={spell}
            animation={animation}
            startPosition={startPosition}
        />
    );
};
