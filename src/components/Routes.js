import React from 'react';
import { Route, Switch } from "react-router-dom";

import HomeComponent from './Pages/Home';
import AboutUsComponent from './Pages/AboutUs';
import TeamComponent from './Pages/Team';
import ApproachComponent from './Pages/Approach';
import CareersComponent from './Pages/Careers';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/about-us" component={AboutUsComponent} />
        <Route path="/team" component={TeamComponent} />
        <Route path="/approach" component={ApproachComponent} />
        <Route path="/careers" component={CareersComponent} />
      </Switch>
    </div>
  );
}

export default Routes;
