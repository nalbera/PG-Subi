import React from "react";
import Sidebar from "./Components/Sidebar";
import Users from "./pages/Users";
import Update from "./pages/Update";
import Dashboard from "../admin/pages/Dashboard";
import NewUser from "../admin/pages/NewUser";
import UserList from "../admin/pages/UserList";
import Feedback from "../admin/pages/Feedback";
import AllRoutesData from "../admin/pages/AllRoutesData";
import "../Sass/Styles/App.scss";
import "../styles/Admin.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Transactions from "./pages/Transactions";

export default function Admin() {
  return (
    <Router>
      <div className="containAll">
        <Sidebar />
        <Switch>
          <Route exact path="/admin">
            <Dashboard />
          </Route>
          <Route path="/admin/users/:id">
            <Users />
          </Route>
          <Route path="/admin/update">
            <Update />
          </Route>
          <Route exact path="/admin/newUser">
            <NewUser />
          </Route>
          <Route exact path="/admin/users">
            <UserList />
          </Route>

          <Route exact path="/admin/routes">
            <AllRoutesData />
          </Route>
          <Route exact path="/admin/feedback">
            <Feedback />
          </Route>
          <Route exact path="/admin/transactions">
            <Transactions />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
