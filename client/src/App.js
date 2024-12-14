
import './App.css';
import Report from './getreport/Report';
import AddReport from './addreport/AddReport';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UpdateReport from './updatereport/updateReport'
import Tracker from './map/tracker.js'
import DashBoard from './dashBoard/DashBoard.jsx'
import Delivery from './delivery/Delivery.jsx';




function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Delivery /> },
    { path: "/add", element: <AddReport /> },
    { path: "/list", element: <Report /> },
    { path: "/update/:id", element: <UpdateReport /> },
    { path: "/map", element: <Tracker /> },
    { path: "/dashboard", element: <DashBoard /> },
    { path: "/report", element: <Report /> },
    

    
  ]);

  return (
    <div className="App">
      
      <RouterProvider router={router} />
      
      
    </div>
  );
}

export default App;
