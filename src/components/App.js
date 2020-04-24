import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import VolumesPage from "./VolumesPage";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ManageVolumePage from "./ManageVolumePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/volumes" component={VolumesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/volume/:slug" component={ManageVolumePage} />
        <Route path="/volume" component={ManageVolumePage} />
        <Redirect from="/about-page" to="about" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
