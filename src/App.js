import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchUsers from './components/SearchUsers';
import ListUsers from './components/ListUsers';
import RepoList from './components/RepoList';

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" Component={() => (<>
        <SearchUsers />
        <ListUsers />
      </>)} />
      <Route path='/profile/:username' Component={() => (<RepoList />)} />
    </Routes>
  </BrowserRouter>);
}

export default App;
