import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'

import VideoList from './componentes/Videos/VideosList'
import VideoForm from './componentes/Videos/VideoForm'

import './index.css'
import 'bootswatch/dist/united/bootstrap.min.css'
import Navbar from './componentes/Navbar/Navbar';
import'react-toastify/dist/ReactToastify.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
    <div className="container p-4">
        <Switch>
          <Route exact path="/" component={VideoList} />
          <Route path="/nuevo-video" component={VideoForm} />
      </Switch>
    <ToastContainer/>


    </div>
    </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
