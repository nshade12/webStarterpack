import React from 'react';
// import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import Counter from '../containers/counter';
import Controls from '../containers/controls';
import '../style.scss';

const About = (props) => {
  return <div> All there is to know about me </div>;
};

const Welcome = (props) => {
  return (
    <div>
      <div>Welcome</div>
      <Counter />
      <Controls />
    </div>
  );
};

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
      </ul>
    </nav>
  );
};

const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};

const Fallback = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />
          <Route exact path="/test/:id" component={Test} />
          <Route component={Fallback} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

// ReactDOM.render(<App />, document.getElementById('main'));
