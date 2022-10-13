import './App.css';
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router-dom';

import { HomeTemplate } from './templates/HomeTemplate';
import Home from './pages/Home/Home';
import { CategoriesTemplate } from './templates/CategoriesTemplate';
import Categories from './pages/Categories/Categories';

export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <HomeTemplate exact path="/home" Component={Home} />
          <HomeTemplate exact path="/" Component={Home} />

          <CategoriesTemplate exact path = "/categories/graphics-design" Component = {Categories}/>
          <CategoriesTemplate exact path = "/categories/digital-marketing" Component = {Categories}/>
          <CategoriesTemplate exact path = "/categories/writing-translation" Component = {Categories}/>
          <CategoriesTemplate exact path = "/categories/video-animation" Component = {Categories}/>
          <CategoriesTemplate exact path = "/categories/music-audio" Component = {Categories}/>
          <CategoriesTemplate exact path = "/categories/programing-tech" Component = {Categories}/>
          <CategoriesTemplate exact path = "/categories/business" Component = {Categories}/>
          <CategoriesTemplate exact path = "/categories/lifestyle" Component = {Categories}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
