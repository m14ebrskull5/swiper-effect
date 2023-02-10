import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ConfigProvider } from 'antd'
import './index.css'
import ErrorPage from "./error-page";
import Nav2 from './nav2'
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";
import Swiper from './Swiper';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ConfigProvider>
    <App />
  </ConfigProvider>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "about",
        element: <Swiper />,
      },
      {
        path: "/nav2",
        element: <Nav2 />,
      },
      {
        path: "/nav3",
        element: <div>nav3</div>,
      },
    ]
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <RouterProvider router={router} />
</>);
