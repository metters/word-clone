import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

const answer = sample(WORDS);
console.info({ answer });

function Game() {
    const [guessedResults, setGuessedResults] = React.useState([
        {guessInput: "     "},
        {guessInput: "     "},
        {guessInput: "     "},
        {guessInput: "     "},
        {guessInput: "     "},
        {guessInput: "     "},
    ]);

    function handleSubmitGuess(guessInput) {
        const nextGuessedResults = [...guessedResults];
        const indexOfFirstEmptyGuess = nextGuessedResults.findIndex(it => it.guessInput === "     ");
        nextGuessedResults[indexOfFirstEmptyGuess] = guessInput;
        setGuessedResults(nextGuessedResults);
    }

    return (
        <>
            <GuessResults guessedResults={guessedResults}/>
            <GuessInput handleSubmitGuess={handleSubmitGuess} />
        </>);
}

export default Game;
