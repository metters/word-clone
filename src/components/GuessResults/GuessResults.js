import React from "react";

function GuessResults({guessedResults}) {
    return (
        <div className='guess-results'>
            {guessedResults.map(({guessInput}, index) => {
                return (<p key={index} className='guess'>{guessInput}</p>);
            })}
        </div>)
}

export default GuessResults;
