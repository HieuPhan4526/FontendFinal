import './App.css';
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router-dom';

import { HomeTemplate } from './templates/HomeTemplate';
import Home from './pages/Home/Home';
import { CategoriesTemplate } from './templates/CategoriesTemplate';
import GraphicsDesign from './pages/GraphicsDesign/GraphicsDesign';

export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <HomeTemplate exact path="/home" Component={Home} />
          <HomeTemplate exact path="/" Component={Home} />

          <CategoriesTemplate exact path = "/categories/graphics-design" Component = {GraphicsDesign}/>
          <CategoriesTemplate exact path = "/categories/digital-marketing" Component = {GraphicsDesign}/>
          <CategoriesTemplate exact path = "/categories/writing-translation" Component = {GraphicsDesign}/>
          <CategoriesTemplate exact path = "/categories/video-animation" Component = {GraphicsDesign}/>
          <CategoriesTemplate exact path = "/categories/music-audio" Component = {GraphicsDesign}/>
          <CategoriesTemplate exact path = "/categories/programing-tech" Component = {GraphicsDesign}/>
          <CategoriesTemplate exact path = "/categories/business" Component = {GraphicsDesign}/>
          <CategoriesTemplate exact path = "/categories/lifestyle" Component = {GraphicsDesign}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
