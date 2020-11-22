import React from 'react';
import { Card } from './components/about-function';
import ShoppingBasket from './components/about-class';

const shopProps = [
  'one',
  'two'
]

function App() {
  return (
    <div className="App">
      <Card title="标题" paragraph="内容"/>
      <ShoppingBasket products={shopProps}/>
    </div>
  );
}

export default App;
