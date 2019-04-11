import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'DemoUser',
      password: 'password'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
    .then ( () => this.props.closeModal());
    this.props.history.push("/")
  }


  renderErrors() {
    return(

        <ul className="error-rendering">

          {this.props.errors.map((error, i) => (
            <div>
              <li key={`error-${i}`}>
                {error}
              </li>
              <li key={`error-tryAgain-${i}`}>
                Please try again.
              </li>
            </div>

          ))}
        </ul>

    );
  }



  render() {



    return (


    <section className="jsx-surround-element">

          <form onSubmit={this.handleSubmit} >
              <div className="modal-form">

              <div className="sign-in-text-title">
                <h3>Your source for quality books!</h3>
              </div>
              <br/>

              <label className="modal-element">
                <h3 className="sign-in-text">Username:</h3>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                />
              </label>

              <label className="modal-element">
                <h3 className="sign-in-text">Password:</h3>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              </label>


              <label className="modal-element">
                <input className="session-submit" type="submit" value={this.props.formType} />
              </label>

            <br/>
            {this.renderErrors()}
            </div>

          </form>



      </section>
    );
    }
}
export default SessionForm;
