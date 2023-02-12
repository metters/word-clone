import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

const answer = sample(WORDS);
console.info({answer});

function Game() {
    const [guessedResults, setGuessedResults] = React.useState([]);
    const [gameStatus, setGameStatus] = React.useState('running');

    function handleSubmitGuess(input) {
        const nextGuessedResults = [...guessedResults, input];
        setGuessedResults(nextGuessedResults);

        if (input.guessInput.toUpperCase() === answer) {
            setGameStatus('won');
        } else if (nextGuessedResults.length >= NUM_OF_GUESSES_ALLOWED) {
            setGameStatus('lost');
        }
    }

    return (
        <>
            {gameStatus}
            <GuessResults guessedResults={guessedResults} answer={answer} />
            <GuessInput handleSubmitGuess={handleSubmitGuess} />
        </>);
}

export default Game;
