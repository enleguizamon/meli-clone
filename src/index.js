import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import Product from "./pages/Product";

import { BrowserRouter as Router, Route } from "react-router-dom";


ReactDOM.render(
  <Router>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/products" component={ProductsPage} />
    <Route exact path="/product/:id" component={Product} />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
