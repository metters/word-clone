import React from "react";

function GuessInput({guessedResults, setGuessedResults}) {
    const [guessInput, setGuessInput] = React.useState('')
    const handleGuessSubmit = (event) => {
        event.preventDefault();
        const nextGuessedResults = [...guessedResults];
        nextGuessedResults.push({guessInput, key: Math.random()})
        setGuessedResults(nextGuessedResults);
        console.log({guessInput: nextGuessedResults.at(-1).guessInput});
        setGuessInput('');
    }

    return (
        <form onSubmit={handleGuessSubmit} className='guess-input-wrapper'>
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
