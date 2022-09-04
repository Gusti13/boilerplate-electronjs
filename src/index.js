import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, HashRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'

import App from "./App.js";
import Setting from "./setting.js";

const AppRouting = () => (
    <HashRouter>
      <Route exact path="/" component={App} />
      <Route path="/next-page" component={Setting} />
    </HashRouter>
);

const container = document.getElementById("root");
const root = createRoot(container); 

root.render(<AppRouting />)