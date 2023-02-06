import React from 'react';

export function GuessedWordList({guesses}) {
    return (
        <div className='guess-results'>
            {guesses
                .filter(({word}) => word)
                .map(({word, id}) => {
                    return (<p key={id} className='guess'>{word}</p>)
                })}
        </div>
    )
}