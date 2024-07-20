import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// For Routes
import {
  RouterProvider,
} from "react-router-dom";

import { router } from './routes/routes.routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)