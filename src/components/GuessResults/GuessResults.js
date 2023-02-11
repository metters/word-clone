import React from "react";

function GuessResults({guessedResults}) {
    return (
        <div className='guess-results'>
            {guessedResults.map(({id, guessInput}) => {
                return (<p key={id} className='guess'>{guessInput}</p>);
            })}
        </div>)
}

export default GuessResults;
