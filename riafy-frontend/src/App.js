// import logo from './logo.svg';
import './App.css';
import AllBookmarks from "./pages/AllBookmarks";
import Favourites from './pages/Favourites'
import NewBookmark from './pages/NewBookmark'
import Layout from './components/layouts/Layout'
import {  Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Layout> 
      <Routes>
      <Route exact path="/" element=<AllBookmarks /> />
      <Route exact path="/new" element=<NewBookmark /> />

      <Route path="/favorites" element=<Favourites /> />
   </Routes>
    </Layout>
  );
}

export default App;
