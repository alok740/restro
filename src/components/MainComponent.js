import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetails from './DishDetails';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch , Route , Redirect } from 'react-router-dom';
import Home from './HomeComponent';
import About from './AboutComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Contact from './ContactComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    const HomePage=()=>
    {
      return (
        <Home 
        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
    />
      );
    }
    const DishWithId = ({match}) => {
      return(
          <DishDetails dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
             />
      );
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes} />} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path='/about' component={()=><About leaders={this.state.leaders} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;