import { useState } from "react";


export function Button() {
    const [counter, setCounter] = useState(0);

    //let counter = 0;
    function increment() {
        setCounter(counter + 1);
    }
    return (
        <div>
            <button onClick={increment}>{counter}</button>
        </div>
    )
}
