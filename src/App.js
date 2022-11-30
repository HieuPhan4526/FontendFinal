import './App.css';
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router-dom';

import { HomeTemplate } from './templates/HomeTemplate';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { WorkDetailTemplate } from './templates/WorkDetailTemplate';
import { CategoriesTemplate } from './templates/CategoriesTemplate';
import Categories from './pages/Categories/Categories';
import Register from './pages/Register/Register';
import ListWorkDetail from './pages/ListWorkDetail/ListWorkDetail';
import WorkDetail from './pages/WorkDetail/WorkDetail';
import Profile from './pages/Profile/Profile';
import UserDashboardTemplate from './templates/UserDashboardTemplate';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import WorkDashboard from './pages/WorkDashboard/WorkDashboard';
import TypeOfWorkDashboard from './pages/TypeOfWorkDashboard/TypeOfWorkDashboard';

export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <HomeTemplate exact path="/home" Component={Home} />

          <WorkDetailTemplate exact path="/listworkdetail/:tenCongViec" Component={ListWorkDetail} />

          <WorkDetailTemplate exact path="/workdetail/:maChiTietLoaiCongViec" Component={WorkDetail} />

          <HomeTemplate exact path="/" Component={Home} />
          <CategoriesTemplate exact path="/categories/:tenLoaiCongViec" Component={Categories} />
          <CategoriesTemplate exact path="/register" Component={Register} />
          <CategoriesTemplate exact path="/login" Component={Login} />

          <CategoriesTemplate exact path="/profile" Component={Profile} />

          <UserDashboardTemplate exact path="/dashboard/users" Component={UserDashboard} />
          <UserDashboardTemplate exact path="/dashboard/works" Component={WorkDashboard} />
          <UserDashboardTemplate exact path="/dashboard/workstype" Component={TypeOfWorkDashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
