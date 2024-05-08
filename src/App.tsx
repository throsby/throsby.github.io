import './App.css';
import Header from './Header';
import { 
  Routes,
  Route,
  Link
} from "react-router-dom";
import Footer from './Footer';
import { useEffect } from 'react';
import { matchRoutes, useLocation, useRoutes, RouteMatch } from 'react-router-dom';
import  { routes }  from './SiteRoutes/SiteRoutes';
import { datadogRum } from "@datadog/browser-rum";

// import { RumRoute as Route } from '@Datadog/rum-react-integration';

function App() {
  let allRoutes = useRoutes(routes);

  let location = useLocation();

  useEffect(() => {
    const routeMatches = matchRoutes(routes, location.pathname);
    const viewName = routeMatches && computeViewName(routeMatches);
    if (viewName) {
      datadogRum.startView({name: viewName});
    }
  }, [location.pathname]);

  useEffect(() => {
    async function fetchGreenhouses() {
      let req = await fetch(`https://cool-lake-5286.fly.dev/greenhouses`)
      let res = await req.json()
    }
    fetchGreenhouses()

  }, [])

  return (
    <>
      <Header/>


      { allRoutes }
      
      <>      
        <Link to={"/contact"}>Contact</Link>
          <br />
        <Link to={"/about"}>About</Link>
          <br />
        <Link to={"/"}>Root</Link>
      </>
      <Footer />
    </>
  );
}

export default App;

function computeViewName(routeMatches: RouteMatch[]) {
  let viewName = "";
  for (let index = 0; index < routeMatches.length; index++) {
    const routeMatch = routeMatches[index];
    const path = routeMatch.route.path;
    // Skip pathless routes
    if (!path) {
      continue;
    }

    if (path.startsWith("/")) {
     // Handle absolute child route paths
      viewName = path;
    } else {
     // Handle route paths ending with "/"
      viewName += viewName.endsWith("/") ? path : `/${path}`;
    }
  }

  return viewName || '/';
}
