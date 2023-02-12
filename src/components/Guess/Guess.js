import React from "react";
import {range} from "../../utils";

function Guess({value, status = "cell"}) {
    return <>
        <p className='guess'>
            {range(5).map((num) =>
                <span key={num} className={status}>
                    {value ? value[num] : undefined}
                </span>
            )}
        </p>
    </>
}

export default Guess;
