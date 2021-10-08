import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App.js';
import Profile from './Profile.js';
import Test from './Test.js';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home' component={App}>
          {/* <Route component={Profile} /> */}
          <Route path='/test' component={Test} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
