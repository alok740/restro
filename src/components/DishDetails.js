import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Dishdetails extends React.Component{

    renderComment(comments)
    {
     if(comments==null)
       return (<div></div>);
     
        const cmts=comments.map(comment=>
         {
           return (
             <li key={comment.id} class='list-unstyled' align='left'>
            <ol class='list-unstyled'>
                 <p >{comment.comment}</p>
                 <p>-- {comment.author},
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
    <h4 class="font-weight-bold" align='left' >  Comments:- </h4>
    {cmts}
     </div>
    )
    }

      renderDish(dish) {
       if (dish != null)
           return(
               <Card >
                   <CardImg top src={dish.image} alt={dish.name} />
                   <CardBody>
                     <CardTitle align='left'><h5>{dish.name}</h5></CardTitle>
                     <CardText align='left'>{dish.description}</CardText>
                   </CardBody>
               </Card>
           );
       else
           return(
               <div></div>
           );
    }
    
    

render(){
    const dish=this.props.dish;
    const comments=this.props.comments;
    console.log(comments);
    console.log(dish);
    if (dish == null) {
        return (<div></div>);
     }
     console.log(comments);
    const smt=this.renderDish(dish);
    const smpt=this.renderComment(comments);
    

        return (
            <div className='container'>
          
                  <div className="row">
      <Breadcrumb>

          <BreadcrumbItem><Link to="/home"  >Home</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
          <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
   
      </Breadcrumb>
      <div className="col-12">
        <h3>{dish.name}</h3>
          <hr />
      </div>                
     </div>
   
<div className='row'>
                <div  className="col-12 col-md-5 m-1">
                {smt}
               </div>
                {smpt}
        </div>    
    
        </div>
        );
}
}

export default Dishdetails;
