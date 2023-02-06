import React from 'react';

export function GuessCell({character, status}) {
    return (

        <span className={"cell" + status}>{character}</span>
    )
}