import { Outlet } from 'react-router-dom';

import { NavBar } from './components/NavBar/NavBar';

import './styles/app.sass';

export function App() {
  return (
    <div id='portfolio'>
      <NavBar />
      <Outlet />
    </div>
  )
}
