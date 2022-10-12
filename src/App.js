import logo from './logo.svg';
import './App.css';
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router-dom';

import { HomeTemplate } from './templates/HomeTemplate';
import Home from './pages/Home/Home';
import { UserTemplate, } from './templates/UserTemplate';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import WorkDetail from './pages/WorkDetail.jsx/WorkDetail';
import { WorkDetailTemplate } from './templates/WorkDetailTemplate';

export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <HomeTemplate exact path="/home" Component={Home} />

          <WorkDetailTemplate exact path="/workdetail" Component={WorkDetail} />


          <UserTemplate exact path="/login" Component={Login} />
          <UserTemplate exact path="/register" Component={Register} />



          <HomeTemplate exact path="/" Component={Home} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
