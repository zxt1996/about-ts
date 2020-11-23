import React, { useState } from 'react';

interface Props<T> {
    items: T[],
    renderItem: (item: T) => React.ReactNode
}

export function List<T>(props: Props<T>) {
    const { items, renderItem } = props;
    const [state, setState] = useState<T[]>([]);

    return (
        <div>
            {items.map(renderItem)}
            <button onClick={() => setState(items)}>clone</button>
            {state.length > 0 && JSON.stringify(state, null, 2)}
        </div>
    )
}