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
import { CategoriesTemplate } from './templates/CategoriesTemplate';
import Categories from './pages/GraphicsDesign/Categories';

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


          <CategoriesTemplate exact path="/categories/graphics-design" Component={Categories} />
          <CategoriesTemplate exact path="/categories/digital-marketing" Component={Categories} />
          <CategoriesTemplate exact path="/categories/writing-translation" Component={Categories} />
          <CategoriesTemplate exact path="/categories/video-animation" Component={Categories} />
          <CategoriesTemplate exact path="/categories/music-audio" Component={Categories} />
          <CategoriesTemplate exact path="/categories/programing-tech" Component={Categories} />
          <CategoriesTemplate exact path="/categories/business" Component={Categories} />
          <CategoriesTemplate exact path="/categories/lifestyle" Component={Categories} />


          <HomeTemplate exact path="/" Component={Home} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
