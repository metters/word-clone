import React from "react";
import Guess from "../Guess";
import {range} from "../../utils";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function GuessResults({guessedResults}) {
    return (
        <div className='guess-results'>
            {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
                return <Guess key={num} value={guessedResults[num] ? guessedResults[num].guessInput : "     "} />
            })}
        </div>)
}

export default GuessResults;
