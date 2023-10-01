import * as React from 'react';
import "./App.css";

import BoxElement from './Component/BoxElement';
import InputTextArea from './Component/InputTextArea';
import OutputTextArea from './Component/OutputTextArea';
import ButtonForConverting from './Component/ButtonForConverting';

export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        <BoxElement name=<InputTextArea /> />
        <BoxElement name=<ButtonForConverting /> />
        <BoxElement name=<OutputTextArea /> />
      </header>
    </div>
  );
}
