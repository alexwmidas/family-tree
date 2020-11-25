import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

import EditProfile from './pages/EditProfile'
import PersonView from './pages/PersonView'
import HomeView from './pages/Home'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Route exact path="/person/:id" component={PersonView} />
        <Route exact path="/profile" component={EditProfile} />
        <Route exact path="/" component={HomeView} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
