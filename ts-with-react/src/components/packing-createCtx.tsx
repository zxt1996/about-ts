import React, { Dispatch, SetStateAction, createContext, useState } from 'react';

export function createCtx<A>(defaultValue: A) {
    type UpdateType = Dispatch<SetStateAction<typeof defaultValue>>;
    const defaultUpdate: UpdateType = () => defaultValue;

    const ctx = createContext({
        state: defaultValue,
        update: defaultUpdate
    });

    function Provider(props: React.PropsWithChildren<{}>) {
        const [state, update] = useState(defaultValue);
        return <ctx.Provider value={{ state, update }} {...props}/>;
    }
    return [ctx, Provider] as const;
}

const [ctx, TextProvider] = createCtx("someText");
export const TextContext = ctx;
export function App() {
  return (
    <TextProvider>
      <Component />
    </TextProvider>
  );
}
export function Component() {
  const { state, update } = React.useContext(TextContext);
  return (
    <label>
      {state}
      <input type="text" onChange={(e) => update(e.target.value)} />
    </label>
  );
}