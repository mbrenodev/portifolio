import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { App } from './App';
import { Home } from './pages/Home/Home';
import { Projects } from './pages/Projects/Projects';
import { ErrorPage } from './pages/Error/ErrorPage';
import { About } from './pages/About/About';

import "./styles/main.sass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "project",
        element: <Projects />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
