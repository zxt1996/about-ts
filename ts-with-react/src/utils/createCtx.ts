import { createContext, useContext } from 'react';

function createCtx<A extends {} | null>() {
    const ctx = createContext<A | undefined>(undefined);
    function useCtx() {
        const c = useContext(ctx);
        if (c === undefined) {
            throw new Error("useCtx must be inside a Provider with a value");
        }
        return c;
    }

    // as const'是ts中将数组设置为元组的方法
    return [useCtx, ctx.Provider] as const;
}

export const [useCurrentUserName, CurrentUserProvider] = createCtx<string>();