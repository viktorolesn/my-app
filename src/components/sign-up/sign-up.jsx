import React from 'react';
import {Link} from "react-router-dom"
import styles from '../../assets/stylesheets/sign-up.module.css';
import { signUp } from '../../services/services';
import { setToken } from '../../services/storage';
import {browserHistory} from 'react-router'

export default class SignUp extends React.Component{
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
        console.log("SIGN-UP-MAIL:",this.state.email)
        console.log("SIGN-UP-PASSWORD:",this.state.password)
        signUp('/sign_up', this.state.email, this.state.password).then(data => {
          if (data){
              setToken(data.jwt)
              console.log("Token created: ", data.jwt)
              this.props.history.push('/personlist')
          }
          else
              alert("Such user already exists")
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

      _logInRedirect(){
        this.props.history.push('/login');
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit} className={styles.formContainer}>
          <div>
            <h1> Sign up</h1>
          </div>
          <h3>new user</h3>
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
            <input type="submit" value="SIGN UP" />
            <h6>OR LOG IN TO YOUR ACCOUNT</h6>
            <button onClick={() => this._logInRedirect()}>LOG IN</button>
            <button onClick={() => this.props.history.push('/')}>BACK</button>
          </form>
        );
      }
}