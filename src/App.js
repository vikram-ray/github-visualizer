import React, {Suspense} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';


import Visualizer from './features/visualizer/Visualizer'
import { toast } from 'react-toastify';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
  autoClose: 2500,
  position: toast.POSITION.TOP_RIGHT,
}); 

const NotFound = () => <h1>The page you are looking does not exist</h1>

function Routes() {
  return(
    <Suspense fallback="Loading" >
      <Switch>
        <Route exact path={['/', '/:username']} component={Visualizer} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
