import React from 'react';
import Visualizer from './features/visualizer/Visualizer'
import { toast } from 'react-toastify';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
  autoClose: 2500,
  position: toast.POSITION.TOP_RIGHT,
});

function App() {
  return (
    <div className="App">
       <Visualizer />
    </div>
  );
}

export default App;
