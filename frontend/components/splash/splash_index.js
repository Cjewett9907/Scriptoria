import React from 'react';
import SplashContainer from './splash_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


  class SplashIndex extends React.Component{
    constructor(props) {
      super(props);

      this.handleClick = this.handleClick.bind(this);
    }

  // componentDidMount(){
  //   this.props.indexBook()
  // }

  handleClick(){

    this.props.history.push('/')


  }




  render(){


    return(


    <div className='splash-wrapper' onClick={this.handleClick}>
        <div className="splash-title">Scriptoria</div>
        <div className='splash-content'>
          <h1> Your Classical Literature Source </h1>
          <h1>Click to Enter</h1>
          <br/>
          <img className="splash-image" src="https://cdn2.oceansbridge.com/2017/10/20020855/A-Greek-Philosopher-and-His-Disciples-Antonio-Zucchi-oil-painting.jpg"></img>

        </div>
    </div>


    )
  }
};

export default SplashIndex;
