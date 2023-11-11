import { Outlet } from 'react-router-dom';

import { NavBar } from './components/NavBar/NavBar';

import './styles/app.sass';
import { Footer } from './components/Footer/Footer';

export function App() {
  return (
    <div id='portfolio'>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}
