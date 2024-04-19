
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ToolBar from './components/ToolBar/ToolBar';

import Landing from './pages/Landing/Landing';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import Terms from './pages/Terms/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Recipe from './pages/Recipe/Recipe'
import NotFound from './pages/NotFound/NotFound';

import ProtectedRoute from './utils/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

import './App.css';


const LandingLayout = () => {
  return (
    <div className='app'>
      <NavBar />
      <Outlet />
      <Footer />
      <ToolBar />
    </div>
  );
}

const FormLayout = () => {
  return (
    <div className='app'>
      <Outlet />
    </div>
  );
}

const HomeLayout = () => {
  return (
    <AuthProvider isLogedIn={false}>
    {/* <AuthProvider> */}
      <div className='app'>
        <Outlet />
      </div>
    </AuthProvider>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      {
        path: '/',
        element: <Landing />
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
  },
  {
    path: '/',
    element: <FormLayout />,
    children: [
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/reset-password',
        element: <ResetPassword />
      }
    ]
  },
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/home',
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        )
      },
      {
        path: '/profile',
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        )
      },
      {
        path: '/recipe',
        element: (
          <ProtectedRoute>
            <Recipe />
          </ProtectedRoute>
        )
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