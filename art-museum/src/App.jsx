import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from './components/HomePage.jsx';

// import harvardArt from "./data/harvardArt";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  }
])

function App() {
  // console.log(harvardArt);
  return <RouterProvider router={router}/>;
}

export default App;
