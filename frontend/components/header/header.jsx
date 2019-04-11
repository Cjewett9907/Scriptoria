import React from 'react'
import WelcomeContainer from '../welcome/welcome_container'
import {Link} from 'react-router-dom';
//  ????
class Header extends React.Component{

componentDidMount(){
this.loginButtons(this.props)
}

componentDidUpdate(){
  this.loginButtons(this.props)
}

loginButtons(){

    if (!(this.props.currentUser.id)){
    return(
      <div className="header-button-signin">
        <input className="submit-button" type="submit" onClick={() => this.props.openModal('Log In')}  value="Log In"/>
        <input className="submit-button" type="submit" onClick={() => this.props.openModal('Sign Up')}  value="Sign Up"/>
      </div>
      )
    }
    else {
      return(
        <div className="header-button-signin">
          <WelcomeContainer />
        </div>
      )
    }
  }
render() {


return(
<header className="header-majoris">
  <div className="header-advert">
    <div className="cover-advert">
      <h1 className="cover-advert-logo">Scriptoria Choice Awards</h1>
    </div>
  </div>

    <div className="header-button-majoris">
        <section className="header-logo-container">
          <h1 className="header-logo">Scriptoria</h1>
          <h3 className="header-logo-sub">your classical resource</h3>
        </section>

        <section className="header-searchbar-container">
          <input className="header-searchbar" type="text" size="25" />
          <button className="submit-button-a" value="Search" >Search</button>
        </section>
          {this.loginButtons()}

    </div>

</header>
)
}
}

export default Header;
