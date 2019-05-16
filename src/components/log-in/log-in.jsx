import React from 'react';
import {Link} from "react-router-dom"
import styles from '../../assets/stylesheets/sign-up.module.css';
import { logIn } from '../../services/services';
import { setToken, signOut } from '../../services/storage';
import {browserHistory} from 'react-router'

export default class LogIn extends React.Component{
      constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      _sign(){
        console.log("LOG-IN-MAIL:",this.state.email);
        console.log("LOG-IN-PASSWORD:",this.state.password);
        signOut();
        logIn('/user_token', this.state.email, this.state.password).then(data => {
          if (data){
              setToken(data.jwt)
              console.log("Token created: ", data.jwt)
              this.props.history.push('/personlist')
          }
          else
              alert("Wrong name or password")
        }).catch(error => {
            console.log(error)
        })
    }
    
      handleChange(event) {
        const name = event.target.name;
        if (name=="email")
        this.setState({email: event.target.value});
        if (name=="password")
        this.setState({password: event.target.value});
      }

      handleSubmit(event) {
       this._sign();
       event.preventDefault();
      }

      _signUpRedirect(){
        this.props.history.push('/signup');
    }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit} className={styles.formContainer}>
          <div>
            <h1> Log in</h1>
          </div>
          <h3>to your account</h3>
            <label>
              Email:
              <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
            </label>
            <br/>
            <label>
              Password:
              <input name="password" type="text" value={this.state.password} onChange={this.handleChange} />
            </label>
            <br/>
            <input type="submit" value="LOG IN" />
            <h6>OR SIGN UP NEW USER</h6>
            <button onClick={() => this._signUpRedirect()}>SIGN UP</button>
            <button onClick={() => this.props.history.push('/')}>BACK</button>
          </form>
        );
      }
}