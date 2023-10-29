import { BrowserRouter } from 'react-router-dom'


import './styles/components/app.sass';
import { Router } from './router';

function App() {
  return (
    <BrowserRouter>
      <Router />      
    </BrowserRouter>

  )
}

export default App
