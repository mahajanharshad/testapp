import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers'
import ADDBOOK from './components/addbook/addbook';
import DELETEBOOK from './components/deletebook/deletebook';
import ISSUEBOOK from './components/issuebook/issuebook';
import RETURNBOOK from './components/returnbook/returnbook';
import VIEWBOOK from './components/viewbook/viewbook';

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={createBrowserHistory}>
        <Route path="/" component={App} />
        <Route path="/addbook" component={ADDBOOK} />
        <Route path="/deletebook" component={DELETEBOOK} />
        <Route path="/issuebook" component={ISSUEBOOK} />
        <Route path="/returnbook" component={RETURNBOOK} />
        <Route path="/viewbook" component={VIEWBOOK} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
