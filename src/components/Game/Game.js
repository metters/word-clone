import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

const answer = sample(WORDS);
console.info({ answer });

function Game() {
    const [guessedResults, setGuessedResults] = React.useState([]);

    return (
        <>
            <GuessResults guessedResults={guessedResults}/>
            <GuessInput
                guessedResults={guessedResults}
                setGuessedResults={setGuessedResults}
            />
        </>);
}

export default Game;
