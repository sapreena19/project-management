import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import Example from './usestate';
//import statecounter from './statecounter';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import"bootstrap-icons/font/bootstrap-icons.css";
import{Provider} from 'react-redux';
import { store } from './components/store';
//import { TasksContextProvider } from './context/TasksContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>

  </React.StrictMode>
);


