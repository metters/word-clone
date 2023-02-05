import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import {WordGuessInput} from "./WordGuessInput";

const answer = sample(WORDS);
console.info({answer});

function Game() {
    const [guesses, setGuesses] = React.useState([])
    const handleAddWordGuess = (input) => {
        console.log({guess: input})
    }

    return <>
        < WordGuessInput handleAddWordGuess={handleAddWordGuess}/>
    </>;
}

export default Game;
