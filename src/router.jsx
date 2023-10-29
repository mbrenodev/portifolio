import { Routes, Route } from 'react-router-dom';
import { Projetos } from './pages/Projetos';
import { Home } from './pages/Home';


export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='project' element={<Projetos />}></Route>

    </Routes>
  )
} 