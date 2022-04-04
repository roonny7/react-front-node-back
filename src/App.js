import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
//import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
//import authProvider from './authProvider';
import dataProvider from './dataProvider';
import simpleRestProvider from 'ra-data-simple-rest';



//<Admin dashboard={Dashboard} dataProvider={simpleRestProvider('http://localho.st:4000/api/usuarios/buscar')} >
//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
//<Resource name="users2" list={UserList} icon={UserIcon} />
const App = () => (
  
    <Admin dashboard={Dashboard} dataProvider={dataProvider} >
      <Resource name="users" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
      <Resource name="empleados" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
      
      
  </Admin>
);
export default App;

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
