import React from "react";

function GuessResults({guessedResults}) {
    return (
        <div className='guess-results'>
            <p className='guess'>{guessedResults}</p>
        </div>)
}

export default GuessResults;
