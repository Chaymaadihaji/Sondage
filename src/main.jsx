import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/HomePage.jsx';
import CreateSurvey from "./components/CreateSurvey.jsx"
import Survey from './components/Survey.jsx';
import Contact from './components/layouts/contact.jsx';

const router = createBrowserRouter([
  {
    path: "",
    element: <Home/>,
  },
  {
    path:"/createSondage",
    element:<CreateSurvey/>,
  },
  {
    path:"/sondages",
    element:<Survey/>
  },
  {
    path:"/contact",
    element:<Contact/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
