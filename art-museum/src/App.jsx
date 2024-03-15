import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from './components/HomePage.jsx';
import GalleryNavigation from './components/GalleryNavigation.jsx'
import harvardArt from "./data/harvardArt";
import './App.css';
import Layout from "./components/Layout.jsx";
import './components/GalleryNavigation.css';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/", 
        element: 
          <>
            <h2>Harvard Art Museum</h2>
            <p>
              Look, but Don&apos;t Touch. Please select a Gallery in the
              navigation bar.
            </p>
          </>
      },
      { 
        path: "*",
        element: <h2>Page Not Found</h2>
      }
    ]
  }
]);

function App() {
  // console.log(harvardArt);
  return(
    <div className='app'>
      <RouterProvider router={router}/>
    </div>
  ) ;
}

export default App;
