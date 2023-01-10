import React, { useState } from 'react'
import {Tag} from './styled'

export const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
        <h1>{count}</h1>
        <Tag.CountButton primary onClick={() => setCount(count + 1)}>
            Increment
        </Tag.CountButton>

        <Tag.CountButton onClick={() => setCount(count - 1)}>
            Decrement
        </Tag.CountButton>
        <br/><br/>
        </>
    );
}