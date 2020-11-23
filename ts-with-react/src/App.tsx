import React from 'react';
import { Card } from './components/about-function';
import ShoppingBasket from './components/about-class';
import AboutHook from './components/about-hooks';

const shopProps = [
  'one',
  'two'
]

function App() {
  return (
    <div className="App">
      <Card title="标题" paragraph="内容"/>
      <ShoppingBasket products={shopProps}/>
      <AboutHook/>
    </div>
  );
}

export default App;
