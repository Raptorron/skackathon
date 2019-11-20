import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import App from "./App";
import Image from "./Image";
import Settings from "./Settings";
import CloseWindow from "./CloseWindow";
import Copy from "./Copy";
import Email from "./Email";
import Help from "./Help";
import Info from "./Info";
import NewWidow from "./NewWindow";
import OpenFile from "./OpenFile";
import Paste from "./Paste";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/image" component={Image} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/closeWindow" component={CloseWindow} />
      <Route exact path="/copy" component={Copy} />
      <Route exact path="/email" component={Email} />
      <Route exact path="/help" component={Help} />
      <Route exact path="/info" component={Info} />
      <Route exact path="/newWindow" component={NewWidow} />
      <Route exact path="/openFile" component={OpenFile} />
      <Route exact path="/paste" component={Paste} />
      <Route exact path="/settings" component={Settings} />
    </Switch>
  </BrowserRouter>
);

export default Router;
