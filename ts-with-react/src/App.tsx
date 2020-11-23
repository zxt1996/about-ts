import React from 'react';
import { Card } from './components/about-function';
import ShoppingBasket from './components/about-class';
import AboutHook from './components/about-hooks';
import { AppContextInterface, AppCtx } from './components/about-context';
import { useCurrentUserName, CurrentUserProvider } from './utils/createCtx';

const sampleAppContext: AppContextInterface = {
  name: "Using React Context in a Typescript App",
  author: "jo",
  url: "http://www.example.com",
}

const shopProps = [
  'one',
  'two'
]

function EnthusasticGreeting() {
  const currentUser = useCurrentUserName();
  return <div>HELLO {currentUser.toUpperCase()}!</div>;
}

function App() {
  return (
    <AppCtx.Provider value={sampleAppContext}>
      <div className="App">
        <Card title="标题" paragraph="内容"/>
        <ShoppingBasket products={shopProps}/>
        <AboutHook/>
        <CurrentUserProvider value="Anders">
          <EnthusasticGreeting />
        </CurrentUserProvider>
      </div>
    </AppCtx.Provider>
  );
}

export default App;
