import React from 'react';
import ReactDOM from 'react-dom/client';

import "./styles/main.sass";

//1- conf router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { App } from './App';
import { Home } from './pages/Home/Home';
import { Projetos } from './pages/Projects/Projetos';

// import Home from './pages/Home/Home.jsx';
// import Project from './pages/Projects/Projetos.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "/project",
//     element: <Project />
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "project",
        element: <Projetos />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
