import React from "react";
import {range} from "../../utils";

function Guess({checkedGuess}) {
    return <>
        <p className='guess'>
            {range(5).map((num) => {
                    let letter = "";
                    let className = "cell";
                    if (checkedGuess) {
                        letter = checkedGuess[num].letter
                        className += ` ${checkedGuess[num].status}`;
                    }
                    return <span key={num} className={className}>{letter}</span>
                }
            )}
        </p>
    </>
}

export default Guess;
