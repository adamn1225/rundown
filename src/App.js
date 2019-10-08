import React from 'react';
import Greet from './components/Greet';
import Message from './components/Message';
import Counter from './components/Counter';
import Welcome from './components/Welcome';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import './App.css';

function App() {
  return (
    <div className="App">
      <EventBind />
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Message /> */}
      {/* <Greet name="Adam" heroName="Stupid"><p>This is children props</p> </Greet>
      <Greet name="Sharon" heroName="Pumpkin"><button>action</button> </Greet> */}
      {/* <Greet name="Pudge" heroName="Pooch"/>
      <Counter />
      <Welcome name="adam" heroName="stupid"/> */}
      
    </div>
  );
}

export default App;
