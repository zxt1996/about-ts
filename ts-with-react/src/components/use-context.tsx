import React, { useContext } from 'react';
import { AppCtx } from './about-context';

export const PostInfo = () => {
    const appContext = useContext(AppCtx);

    return (
        <div>
            Name: {appContext?.name}, Author: {appContext?.author}, Url:{" "}
            {appContext?.url}
        </div>
    )
}