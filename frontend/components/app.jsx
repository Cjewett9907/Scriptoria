import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import Modal from './modal/modal';
import LogInFormContainer from './session/log_in_form_container';
import SignUpFormContainer from './session/signup_form_container';
import WelcomeContainer from './welcome/welcome_container';
import HeaderContainer from './header/header_container';
import BookIndexContainer from "./books/book_index_container";
import BookShowContainer from "./books/book_show_container";
import SplashContainer from "./splash/splash_container";




const App = () => (


  <div >



      <Modal />

      {/* {if (!this.props.seenSplash)} */}
          {/* <SplashContainer /> */}


         <Switch>

            <Route path="/books/:bookId" component={BookShowContainer} />
            <Route exact path="/" component={BookIndexContainer} />
            <Route exact path="/splash" component={SplashContainer} />
            <Redirect to="/"  />
         </Switch>
{/*
         <BookIndexContainer /> */}

  </div>


);

export default App;
