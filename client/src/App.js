import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Login from './app/pages/Login';
import Register from './app/pages/Register';
import { useSelector } from 'react-redux';
import Account from './app/pages/Account';

import Home from './page/Home/index.js';
import Tambah from './page/Tambah/index.js';
import Detail from './page/Detail';
import Edit from './page/Edit';
import Logout from './app/components/Logout';


function App() {

  const auth = useSelector(state => state.auth);

  return (
    <div className="App">
      <BrowserRouter>
     
        <Switch>
          <Route exact path="/">
              <Login />
          </Route>  
          <Route path="/logout">
              <Logout />
          </Route>   
          <Route path="/home">
          { !auth.user ? <Redirect to="/" /> : <Home /> } 
          </Route>
           <Route path="/tambah">
           { !auth.user ? <Redirect to="/" /> : <Tambah /> }
          </Route>
          <Route path="/detail/:id">
             <Detail /> 
          </Route>
          <Route path="/edit/:id">
             <Edit /> 
          </Route>

          <Route path="/account" component={Account}/>
          {/* <Route path="/home">
              { !auth.user ? <Redirect to="/" /> : <Home /> } 
          </Route>
          <Route path="/tambah">
              { !auth.user ? <Redirect to="/" /> : <Tambah /> } 
          </Route>

          <Route path="/detail/:id" children={() => <Detail />} />
          <Route path="/edit/:id" > <Edit /></Route> */}
        
           <Route path="/account" component={Account}/>
      
         <Route path="/register" component={Register}/>
         <Route path="/login">
          { auth.user ? <Redirect to="/home" /> : <Login /> } 
         </Route>

          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
