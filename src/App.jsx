
import { Outlet } from 'react-router-dom';
import './styles/app.sass';

export function App() {
  return (
    <div className='App'>
      <p>oi</p>
      <Outlet />

    </div>
  )
}
