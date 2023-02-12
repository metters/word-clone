import React from "react";
import Guess from "../Guess";
import {range} from "../../utils";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import {checkGuess} from "../../game-helpers";

function GuessResults({guessedResults, answer}) {
    return (
        <div className='guess-results'>
            {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
                const value = guessedResults[num] ? guessedResults[num].guessInput : undefined;
                const checkedGuess = checkGuess(value, answer);
                return <Guess
                    key={num}
                    checkedGuess={checkedGuess}
                />
            })}
        </div>)
}

export default GuessResults;
