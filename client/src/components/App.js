import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar"
import Footer from "./views/Footer/Footer"
import UploadVideoPage from "./views/UploadVideoPage/UploadVideoPage"
import DetailVideoPage from "./views/DetailVideoPage/DetailVideoPage"
import HomePage from "./views/HomePage/HomePage"
import BlackboxPage from "./views/BlackboxPage/BlackboxPage"
import CaloriePage from "./views/CaloriePage/CaloriePage"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '75px' }}>
        <Switch>
          <Route exact path="/" component={Auth(HomePage, null)} />
          <Route exact path="/Landing" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/blackbox" component={Auth(BlackboxPage, true)} />
          <Route exact path="/calorie" component={Auth(CaloriePage, false)} />
          <Route exact path="/video/upload" component={Auth(UploadVideoPage, null)} />
          <Route exact path="/video/:videoId" component={Auth(DetailVideoPage, null)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
