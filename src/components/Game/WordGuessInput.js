import React from 'react';

export function WordGuessInput({handleAddWordGuess}) {
    const [input, setInput] = React.useState('')

    return <>
        <form
            className='guess-input-wrapper' onSubmit={(event) => {
            event.preventDefault();
            console.log("XX: " + input)
            handleAddWordGuess(input);
            setInput('')
        }}
        >
            <label htmlFor='guess-input'>Enter guess:</label>
            <input
                id='guess-input'
                type='text'
                value={input}
                required
                minLength='5'
                maxLength='5'
                onChange={(event) => {
                    const upperCaseInput =event.target.value.toUpperCase();
                    setInput(upperCaseInput)
                }}
            />
        </form>
    </>
}