import './App.css';
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router-dom';

import { HomeTemplate } from './templates/HomeTemplate';
import Home from './pages/Home/Home';
import { UserTemplate, } from './templates/UserTemplate';
import Login from './pages/Login/Login';
import { WorkDetailTemplate } from './templates/WorkDetailTemplate';
import { CategoriesTemplate } from './templates/CategoriesTemplate';
import Categories from './pages/Categories/Categories';
import Register from './pages/Register/Register';
import ListWorkDetail from './pages/ListWorkDetail/ListWorkDetail';
import WorkDetail from './pages/WorkDetail/WorkDetail';
import Profile from './pages/Profile/Profile';

export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <HomeTemplate exact path="/home" Component={Home} />

          <CategoriesTemplate exact path="/listworkdetail/:maChiTietLoaiCongViec/:tenCongViec" Component={ListWorkDetail} />

          <WorkDetailTemplate exact path="/workdetail/:maChiTietLoaiCongViec" Component={WorkDetail} />

          <HomeTemplate exact path="/" Component={Home} />

          <CategoriesTemplate exact path="/categories/:tenLoaiCongViec" Component={Categories} />
          {/* <CategoriesTemplate exact path="/categories/digital-marketing" Component={Categories} />
          <CategoriesTemplate exact path="/categories/writing-translation" Component={Categories} />
          <CategoriesTemplate exact path="/categories/video-animation" Component={Categories} />
          <CategoriesTemplate exact path="/categories/music-audio" Component={Categories} />
          <CategoriesTemplate exact path="/categories/programing-tech" Component={Categories} />
          <CategoriesTemplate exact path="/categories/business" Component={Categories} />
          <CategoriesTemplate exact path="/categories/lifestyle" Component={Categories} /> */}

          <CategoriesTemplate exact path="/register" Component={Register} />
          <CategoriesTemplate exact path="/login" Component={Login} />

          <CategoriesTemplate exact path="/profile" Component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
