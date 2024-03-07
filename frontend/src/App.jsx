
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ToolBar from './components/ToolBar/ToolBar';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import Terms from './pages/Terms/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import './App.css';


const Layout = () => {
  return (
    <div className='app'>
      <NavBar />
      <Outlet />
      <Footer />
      <ToolBar />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about-us',
        element: <AboutUs />
      },
      {
        path: '/contact-us',
        element: <ContactUs />
      },
      {
        path: '/terms',
        element: <Terms />
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />
      }
    ]
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}


export default App;