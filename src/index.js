import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RequireAuth } from './firebase/auth';
import LoginScreen from './screens/logIn';
import reportWebVitals from './reportWebVitals';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Dashboard from './screens/admin/dashboard';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginScreen />
  },
  {
    path: "admin/",
    element: <RequireAuth/>,
    children: [
      {
        path: "dashboard/",
        element: <Dashboard />,
        children: [
          {
            path: "home/"
          },
          {
            path: "bookings/"
          }
        ]
      },
      {
        path: "settings/",
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
