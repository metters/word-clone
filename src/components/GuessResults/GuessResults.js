import React from "react";

function GuessResults({guessedResults}) {
    return (
        <div className='guess-results'>
            {guessedResults.map(({key, guessInput}) => {
                return (<p key={key} className='guess'>{guessInput}</p>);
            })}
        </div>)
}

export default GuessResults;
