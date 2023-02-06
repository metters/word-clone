import React from 'react';

export function GuessCell({word, index}) {
    return (
        <span className='cell'>{word.charAt(index)}</span>
    )
}