import './App.css'
import LandingPage from "./pages/LandingPage";
import Scheduling from "./pages/Scheduling";
import PrivacySection from './pages/PrivacySection';
import TermsOfService from './pages/TermsOfService';
import NotFoundPage from './pages/NotFound';
import CreatePost from './pages/CreatePost';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/app", element: <SignIn /> },
  { path: "/dashboard", element: <Scheduling /> },
  { path: "/create-post", element: <CreatePost /> },
  { path: "/privacy", element: <PrivacySection /> },
  { path: "/terms", element: <TermsOfService /> },
  { path: "*", element: <NotFoundPage /> },
])
//Routing 
function App() {
  return (
    <StrictMode>
            <RouterProvider router = {router}/>
    </StrictMode>
    
  );
}

export default App;