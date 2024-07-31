import Body from './pages/Body.jsx';
import Team from './pages/Team.jsx';


import { useRoutes, BrowserRouter as Router } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
    // Sets up routes
    let element = useRoutes([
      {
        path: "/",
        element:<Body/>
      },
      {
        path: "/team",
        element:<Team/>
      }
    ]);

  return (
    <>
    <div className="page-wrapper">
    {element}
    </div>
    </>
  )
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

