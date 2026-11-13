import { createBrowserRouter } from 'react-router'
import DashboardPage from '../pages/dashboard'
import LabsPage from '../pages/labs'
import NotFoundPage from '../pages/not-found'
import { DashboardLayout } from '../shared/components/DashboardLayout'
import { paths } from './routes'

export const router = createBrowserRouter([
  {
    path: paths.dashboard,
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: paths.labs, element: <LabsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
