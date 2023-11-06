import { Routes, Route } from 'react-router-dom';
import { Projetos } from './pages/Projects/Projetos';
import { Home } from './pages/Home/Home';
import { NavBar } from './components/NavBar/NavBar';

export function Router() {
  return (
    <Routes>
      <Route path='/navbar' element={<NavBar />} />
      <Route path='/' element={<Home />}></Route>
      <Route path='/project' element={<Projetos />}></Route>
    </Routes>
  )
} 