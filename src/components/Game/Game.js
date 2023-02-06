import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import {WordGuessInput} from "./WordGuessInput";
import {GuessResults} from "./GuessResults";

const answer = sample(WORDS);
console.info({answer});

function Game() {
    const [guesses, setGuesses] = React.useState([
        {word: "", id: Math.random()},
        {word: "", id: Math.random()},
        {word: "", id: Math.random()},
        {word: "", id: Math.random()},
        {word: "", id: Math.random()},
        {word: "", id: Math.random()},
    ])

    const handleAddWordGuess = (input) => {
        if (guesses.filter(({word}) => word).length >= 6) {
            return;
        }

        console.log({guess: input})
        const nextGuesses = [...guesses];
        const notEmpty = ({word}) => word === "";
        const index = nextGuesses.findIndex(notEmpty);
        const newWord = {word: input, id: Math.random()};
        nextGuesses.splice(index, 1, newWord);
        setGuesses(nextGuesses);
    }

    return <>
        <GuessResults guesses={guesses} />
        < WordGuessInput handleAddWordGuess={handleAddWordGuess} />
    </>;
}

export default Game;
