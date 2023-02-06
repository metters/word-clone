import React from 'react';
import {GuessCell} from "./GuessCell";
import {range} from "../../utils";

export function GuessResults({guesses}) {
    return (
        <div className='guess-results'>
            {guesses.map(({word, status, id}) => {
                return (<p key={id} className='guess'>
                    {range(0, 5).map(index => {
                        const character = word.charAt(index);
                        let characterStatus = ''
                        if (status !== "") {
                            characterStatus += " " + status[index].status
                        }
                        return <GuessCell
                            key={index} character={character} status={characterStatus}
                        />
                    })}
                </p>)
            })}
        </div>
    )
}