import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import {WordGuessInput} from "./WordGuessInput";
import {GuessResults} from "./GuessResults";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import {checkGuess} from "../../game-helpers";

const answer = sample(WORDS);
console.info({answer});

function Game() {
    const [guesses, setGuesses] = React.useState([
        {word: "", status: [], id: Math.random()},
        {word: "", status: [], id: Math.random()},
        {word: "", status: [], id: Math.random()},
        {word: "", status: [], id: Math.random()},
        {word: "", status: [], id: Math.random()},
        {word: "", status: [], id: Math.random()},
    ])

    const handleAddWordGuess = (input) => {
        if (guesses.filter(({word}) => word).length >= NUM_OF_GUESSES_ALLOWED) {
            return;
        }

        console.log({guess: input})
        const nextGuesses = [...guesses];
        const notEmpty = ({word}) => word === "";
        const index = nextGuesses.findIndex(notEmpty);
        const status = checkGuess(input, answer)
        const newWord = {word: input, status, id: Math.random()};
        nextGuesses.splice(index, 1, newWord);
        setGuesses(nextGuesses);
    }

    return <>
        <GuessResults guesses={guesses} />
        < WordGuessInput handleAddWordGuess={handleAddWordGuess} />
    </>;
}

export default Game;
