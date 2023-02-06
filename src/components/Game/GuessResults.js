import React from 'react';
import {GuessCell} from "./GuessCell";
import {range} from "../../utils";

export function GuessResults({guesses}) {
    return (
        <div className='guess-results'>
            {guesses
                .map(({word, id}) => {
                    return (<p key={id} className='guess'>
                        {range(0, 5).map(index => {
                            return <GuessCell key={index} word={word} index={index} />
                        })}
                    </p>)
                })}
        </div>
    )
}