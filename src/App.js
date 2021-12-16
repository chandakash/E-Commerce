import React,{Component} from 'react';
import './App.css';
import { HomePage } from './pages/homepage/HomePage';
import { Routes, Route} from 'react-router-dom';
import Shop from './pages/shop/Shop';
import { Header } from './components/header/Header';
import { Authentication } from './pages/authentication/Authentication';
import { Contact} from './pages/contact/Contact';
import {auth,createUserProfileDocument} from './firebase/firebase.utils'

export default class App extends Component{
  
  constructor(){
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state)
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth(); 
  }

  render(){
    return (
      <div className="App">
        <Header currentUser = {this.state.currentUser}/>
        <Routes>
          <Route exact path='/' element = {<HomePage/>}/>
          <Route   path = '/shop' element = {<Shop/>}/>
          <Route path= '/signin' element = {<Authentication/>}/>
          <Route path= '/contact' element = {<Contact/>}/>
        </Routes>
      </div>
    );
  }
  
}
