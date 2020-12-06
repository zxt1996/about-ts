import { createContext } from 'react';

export interface AppContextInterface {
    name: string,
    author: string,
    url: string
}

export const AppCtx = createContext<AppContextInterface | null>(null);

// 设置空对象时的做法
// const Context = createContext({} as AppContextInterface);