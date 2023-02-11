import React from "react";
import {range} from "../../utils";

function Guess({value}) {
    return <>
        <p className='guess'>
            {range(0, value.length)
                .map((index) =>
                    <span key={index} className='cell'>
                        {value.charAt(index)}
                    </span>
                )}
        </p>
    </>
}

export default Guess;
