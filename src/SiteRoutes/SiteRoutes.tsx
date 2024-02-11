import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import About from '../About/About';
import Oops from '../Oops/Oops';
import Contact from '../Contact/Contact';

import { Route, RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
    { path: "", element: <LandingPage /> },
    { path: "about", element: <About /> },
    { path: "contact", element: <Contact /> },
    { path: "*", element: <Oops /> },
]

// function SiteRoutes(){

//     return (<>
//                 <Route path="" element={<LandingPage />}/>
//                 <Route path="about" element={<About />}/>
//                 <Route path="contact" element={<Contact />}/>
//                 <Route path="*" element={<Oops />}/>
//             </>)
// }

// export default SiteRoutes;