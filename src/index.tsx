import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter as Router
} from "react-router-dom";
import { datadogRum } from '@datadog/browser-rum'
import '@datadog/browser-rum/bundle/datadog-rum'

// import ReactGA from "react-ga4";

// ReactGA.initialize( "G-9CKWN2Z0ZD" );

datadogRum.init({
  applicationId: '7afe80a1-4d05-4de1-a760-528adecee07c',
  clientToken: 'pub7158f44b40394e6c02065d6f14bbdde8',
  site: 'us5.datadoghq.com',
  service: 'throsbyspersonalsite',
  env: process.env.NODE_ENV,
  // Specify a version number to identify the deployed version of your application in Datadog 
  // version: '1.0.0', 
  sessionSampleRate: 100,
  sessionReplaySampleRate: 100,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: 'mask-user-input',
  trackViewsManually: true,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
