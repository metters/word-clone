import React from "react";

function GuessInput({handleSubmitGuess}) {
    const [guessInput, setGuessInput] = React.useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        handleSubmitGuess({guessInput, id: Math.random()});
        setGuessInput('');
    }

    return (
        <form onSubmit={handleSubmit} className='guess-input-wrapper'>
            <label htmlFor='guess-input'>Enter guess:</label>
            <input
                required
                pattern='[a-zA-Z]{5}'
                title='Word containing exactly 5 characters: [a-zA-Z]{5}'
                value={guessInput}
                placeholder='Your guess'
                onChange={(event) => {
                    const nextGuess = event.target.value.toUpperCase();
                    setGuessInput(nextGuess)
                }}
                id='guess-input'
                type='text'
            />
        </form>);
}

export default GuessInput;
