import React from 'react';
import AppHeader from "../app-header";
import Footer from "../footer";
import {Route,Switch} from "react-router-dom";

import './style.css'
import SectionOne from "../section-one";
import SectionTwo from "../section-two";

const App: React.FC = () => {
  return (
    <div className="App">
      <AppHeader/>
      <div className="content">
        <div className="animated fadeIn">
      <Switch>
        <Route path='/' exact component={SectionOne}/>
        <Route path='/two' exact component={SectionTwo}/>
      </Switch>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
