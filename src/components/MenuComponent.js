import React, { Component } from 'react';

import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectedDish:null
          
        }

 
    }
    onDishSelect(dish)
    {
      this.setState({selectedDish:dish});
 
  
    }
   renderComment(dish)
   {
     
    if(dish==null)
      return (<div></div>);
    
       const cmts=dish.comments.map(comment=>
        {

          return (
            <li key={comment.id} class='list-unstyled' >
           <ol class='list-unstyled'>
                <p align='left'>{comment.comment}</p>
                <p align='left'>-- {comment.author},
                &nbsp;
                {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                </p>
            </ol>
               
                </li>
            
        )
    });
     
  return (

    <div  className="col-12 col-md-5 m-1">
   <h4 class="font-weight-bold" align='left'>  Comments:- </h4>{cmts}
    </div>
  
  )
     
   
   }
    renderDish(dish) {
      if (dish != null)
          return(
           
            <div  className="col-12 col-md-5 m-1">
              <Card >
                  <CardImg top src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle class="font-weight-bold" color='dark' align='left'>{dish.name}</CardTitle>
                    <CardText align='left'>{dish.description}</CardText>
                  </CardBody>
              </Card>
              </div>
            
       
          
          );
      else
          return(
              <div></div>
          );
  }

    render() {
        const menu = this.props.dishes.map((dish) => {
          return (
            <div  className="col-12 col-md-5 m-1">
              <Card key={dish.id} onClick={() => this.onDishSelect(dish)} align='left' color=''>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle align='left' color='dark' class="font-weight-bold">{dish.name} </CardTitle>
                </CardImgOverlay>
              </Card>
            </div>
          );
        }); 

        return (
          <div className="container">
            <div className="row">
      
                  {menu}
     
            </div>
          <div className='row'>
            {this.renderDish(this.state.selectedDish)}
      
            {this.renderComment(this.state.selectedDish)}
          
    
        </div>
          </div>
        );
    }
}

export default Menu;