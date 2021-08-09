import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import Laster from './component/Laster'
import Todo from './component/Todo'

function App() {
  return (
    <div>
    <Header></Header>
     <Todo></Todo>
     <Laster></Laster>
    </div>
  );
}

export default App;
