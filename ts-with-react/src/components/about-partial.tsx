import React, { useState } from 'react';

export const AboutPartial = () => {
    const [state, setState] = useState({
        foo: 1,
        bar: 2
    });

    const partialStateUpdate = (obj: Partial<typeof state>) => {
        setState({
            ...state,
            ...obj
        })
    }

    return (
        <div>
            <button onClick={() => partialStateUpdate({foo: 2})}>partial</button>
        </div>
    )
}