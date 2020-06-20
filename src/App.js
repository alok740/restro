import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/MenuComponent'
//import logo from './logo.svg';
import './App.css';
//import ReactDOM from 'react-dom';
import  {DISHES} from './shared/dishes'
import { Navbar, NavbarBrand } from 'reactstrap';
class App extends Component{
 constructor(props)
 {
   super(props);
   this.state={
     dishes:DISHES
   }
 }

  render()
  {
  return (
    <div className="App">
     <Navbar dark color='primary'>
     <div className='container'>
       <NavbarBrand href='/'> Restaurant Can Fusion</NavbarBrand>
     </div>
     </Navbar>
     <Menu dishes={this.state.dishes}/>
    </div>
  );
  }
}

export default App;
