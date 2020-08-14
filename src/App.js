import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Content from './components/Content/Content';
import { Container} from 'reactstrap';
import NavBar from './components/Navbar/Navbar';
import FilmList from './components/Films/FilmList';
import './public/app.css';
import UserRegister from './components/User/UserRegister';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route path="/films">
            <FilmList />
          </Route>
          <Route path="/registration">
            <UserRegister />
          </Route>
          <Route path="/">
            <Content />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
