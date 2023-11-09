
import { Outlet } from 'react-router-dom';
import './styles/app.sass';
import { NavBar } from './components/NavBar/NavBar';

export function App() {
  return (
    <div id='portfolio'>
      <NavBar />
      <Outlet />
    </div>
  )
}
