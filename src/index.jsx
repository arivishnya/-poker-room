import React from 'react';
import ReactDOM from 'react-dom';

import MainContainer from './components/MainContainer';
import './styles/style.scss';

if (module.hot) module.hot.accept();

if (!window.relVersions) window.relVersions = [];
window.relVersions.push([
  process.env.npm_package_name,
  process.env.npm_package_version,
]);

// TODO переделать rootContainer на process.env.rootContainer
const rootContainer = document.getElementById('poker-room');
ReactDOM.render(<MainContainer />, rootContainer);
