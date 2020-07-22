import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LazyLoader from './components/LazyLoader/LazyLoader';
import './App.scss';
import Header from './components/Header/Header';

const Grid = React.lazy(() => import('./components/Grid/Grid'));

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={LazyLoader(Grid)} />
      </Switch>
    </Router>
  );
}

export default App;
