import { useState } from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from "./Login/Login.jsx"
import Trial from "./Trial.jsx"
import Landing from './Landing/Landing.jsx'
import MyInformation from './MyInformation/MyInformation.jsx'
import './App.css'
import TopBar from './TopBar/TopBar.jsx'

function App() {
  const queryClient = new QueryClient()

  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <TopBar />
          <Outlet/>
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/myinformation",
          element: <MyInformation />,
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );

}

export default App
