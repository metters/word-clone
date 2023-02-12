import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

const answer = sample(WORDS);
console.info({answer});


const HappyBanner = ({numOfGuesses}) => {
    return (
        <div className='happy banner'>
            <p>
                <strong>Congratulations!</strong> Got it in <strong>{numOfGuesses} guesses</strong>.
            </p>
        </div>)
}

const SadBanner = ({answer}) => {
    return (
        <div className='sad banner'>
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>)
}


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
            <GuessResults guessedResults={guessedResults} answer={answer} />
            <GuessInput handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus}/>
            {gameStatus === 'won' && <HappyBanner numOfGuesses={guessedResults.length} />}
            {gameStatus === 'lost' && <SadBanner answer={answer} />}
        </>);
}

export default Game;
