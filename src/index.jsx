// This is the entry point for our React application.
import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';

function App() {
  return <div className="test">Hello World!</div>;
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';

// import reducers from './reducers';

// import App from './components/app';

// // this creates the store with the reducers, and does some other stuff to initialize devtools
// // boilerplate to copy, don't have to know
// const store = createStore(reducers, {}, compose(
//   applyMiddleware(),
//   window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
// ));

// // we now wrap App in a Provider
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('main'),
// );
