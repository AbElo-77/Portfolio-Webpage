import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router'
import './index.css'
import HomePage from './router-pages/HomePage'
import ProjectsPage from './router-pages/ProjectsPage'
import ProjectDocs from './router-pages/ProjectDocs'
import GamesPage from './router-pages/GamesPage'
import AboutPage from './router-pages/AboutPage'

const pageRouter = createBrowserRouter([
  {
    path: '/', 
    element: <HomePage />
  },
  {
    path: '/projects',
    element: <ProjectsPage />
  },
  {
    path: '/projects/:projectName',
    element: <ProjectDocs />
  },
  {
    path: '/games',
    element: <GamesPage />
  },
  {
    path: '/about',
    element: <AboutPage />
  }

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={pageRouter} />
  </StrictMode>
)
