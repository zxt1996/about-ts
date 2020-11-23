import React, { useState, useRef, useReducer } from 'react';

interface IUser {
    id: string,
    name: string,
    age: number
}

const initialState = {
    count: 0
};

type ACTIONTYPE = 
    | { type: "increment"; payload: number }
    | { type: "decrement"; payload: string };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
    switch (action.type) {
        case "increment":
          return { count: state.count + action.payload };
        case "decrement":
          return { count: state.count - Number(action.payload) };
        default:
          throw new Error();
      }
}

const AboutHook = () => {
    // 设置复杂类型的数据时才有必要为useState设置类型
    const [user, setUser] = useState<IUser | null>(null);
    // 在创建没有初始值时的两种写法
    // 感叹号是非null和非undefined的类型断言
    const ref1 = useRef<HTMLElement>(null!);
    const ref2 = useRef<HTMLElement | null>(null);

    const inputEl = useRef<HTMLInputElement>(null);

    const [state, dispatch] = useReducer(reducer, initialState);

    const onButtonClick = () => {
        if (inputEl && inputEl.current) {
            inputEl.current.focus();
        }
    }

    const handleUser = () => {
        setUser({
            id: 'ddd',
            name: 'jo',
            age: 12
        })
    }

    return (
        <>
            <input type="text" ref={inputEl}/>
            <button onClick={onButtonClick}>Focus the input</button>

            Count: {state.count}
            <button onClick={() => dispatch({ type: "decrement", payload: "5" })}>
                -
            </button>
            <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
                +
            </button>
        </>
    )
}

export default AboutHook;