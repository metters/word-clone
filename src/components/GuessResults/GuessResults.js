import React from "react";
import Guess from "../Guess";
import {range} from "../../utils";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function GuessResults({guessedResults}) {
    return (
        <div className='guess-results'>
            {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
                const value = guessedResults[num] ? guessedResults[num].guessInput : undefined;
                return <Guess
                    key={num}
                    value={value}
                    status={"cell"}
                />
            })}
        </div>)
}

export default GuessResults;
