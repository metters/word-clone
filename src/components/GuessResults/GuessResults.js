import React from "react";
import Guess from "../Guess";

function GuessResults({guessedResults}) {
    return (
        <div className='guess-results'>
            {guessedResults.map(({guessInput}, index) => {
                return <Guess key={index} value={guessInput}/>
            })}
        </div>)
}

export default GuessResults;
