import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/pages/login/login";
import Todos from "./components/pages/todos/todos";
import TodoDetail from "./components/pages/todoDetail/todoDetail";
import './App.css';

const App = () => {

  const renderRouter = () => {
    return (
      <Switch>
        <Route exact path="/" component={Login} exact/>
        <Route exact path="/todos" component={Todos} exact/>
        <Route exact path="/todo_detail" component={TodoDetail} exact/>
        {/* <Route exact path="/todos/add" component={} exact/> */}
        {/* <Route exact path="/todos/edit/:id" component={} exact/> */}
      </Switch>
    )
  }
  return (
  <BrowserRouter>{renderRouter()}</BrowserRouter>
  );
}

export default App;
