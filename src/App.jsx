import { BrowserRouter } from 'react-router-dom'
import { Router } from './router';

import './styles/components/app.sass';

export function App() {
  return (
    <BrowserRouter>
      <Router />      
    </BrowserRouter>
  )
}
