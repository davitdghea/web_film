import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Favourites, Home, Public, Trending } from './pages/Index'
import path from './ultils/path';
import ApiFilm from './stores/trending/index.js';

import Login from './pages/Login.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <ApiFilm>
        <div className="App">
          <Routes>
            <Route path={path.PUBLIC} element={<Public />}>
              <Route path={path.HOME} element={<Home />}></Route>
              <Route path={path.Favourites} element={<Favourites />}></Route>
              <Route path={path.Trending} element={<Trending />}></Route>
            </Route>
            <Route path={path.Login} element={<ApiFilm />}></Route>
          </Routes>
        </div>
      </ApiFilm>
    </Router>
  );
}

export default App;
