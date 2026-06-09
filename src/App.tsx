import './App.css'
import Navbar from "./components/Navbar";
import Scheduling from "./pages/Scheduling";
import PrivacySection from './pages/PrivacySection';
import NotFoundPage from './pages/NotFound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
const router = createBrowserRouter([
  {path:"/", element:<Scheduling></Scheduling>},
  {path:"/privacy", element:<PrivacySection/>},
  {path:"*", element:<NotFoundPage/>}
])
//Routing 
function App() {
  return (
    <StrictMode>
      <div>
      <Navbar />
        <main className="main-content">
            <RouterProvider router = {router}/>
          </main>
        </div>  
    
      
    </StrictMode>
    
  );
}

export default App;

