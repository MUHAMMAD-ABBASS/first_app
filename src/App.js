import React from 'react';
import Dinner from './dinner.js'
import './App.css';

function App() {
  return (
    <div className="App">
     <Dinner dishNAme='Biryani' sweetDish='ice-cream'/>
     <hr/>
     <Dinner dishNAme='Nihari' sweetDish='kheer'/>
     <hr/>
     <Dinner dishNAme='Karahi' sweetDish='cake'/>
    </div>
  );
}

export default App;
