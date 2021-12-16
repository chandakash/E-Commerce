import React, { Component } from "react";
import { CustomButton } from "../custom-button/CustomButton";
import { FormInput } from "../form-input/FormInput";
import './SignIn.scss'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'
export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async event => {
    event.preventDefault();

    const {email, password} = this.state;
    try{  
      await auth.signInWithEmailAndPassword(email, password);
      this.state({email:'',password:''})
    }catch(err){
      console.log('error occured while signing with mail',err);
    }
  };
  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I Already Have An Account!</h2>
        <span>Sign in with your email & Password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className="buttons">
          <CustomButton type="submit">Sign in </CustomButton>
          <CustomButton onClick = {signInWithGoogle}>Sign in With Google</CustomButton>
          </div>
          
        </form>
      </div>
    );
  }
}
