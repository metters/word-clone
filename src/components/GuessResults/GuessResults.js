import React from "react";

function GuessResults({guessedResults}) {
    return (
        <div className='guess-results'>
            {guessedResults.map(({guessInput}) => {
                return (<p className='guess'>{guessInput}</p>);
            })}
        </div>)
}

export default GuessResults;
