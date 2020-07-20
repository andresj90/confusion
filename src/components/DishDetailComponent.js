import React , {Component} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
  } from 'reactstrap';



  function RenderDish({dish}){
    return (
        <div key={dish.id}>
            <Card>
                <CardImg top width="100%" src={dish.image} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    
                    <CardText>{dish.description}</CardText>
            
                </CardBody>
            </Card>
        </div>
      )
 
}



function RenderComments({comments}) {
    if (comments.length > 0 ) {

        let userComments = comments.map((comment) => {
            return (<div key={comment.id}>
               <ul className="list-group list-group-flush">
                 <li className="list-group-item">
                    <p>{comment.comment}</p>
                    <small>-- {comment.author} , {new Intl.DateTimeFormat('en-US',{year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</small>
                  </li>  
                </ul>
            </div>)
        });
       
        return (
            <div>
                <h4>Comments</h4>
                {userComments}
            </div>
        ) 
       
    } else {
        return (
            <div></div>
        )
    }
  }


function DishDetail(props) {

    if (props.dish == null) {
        return (<div></div>)
    } else {
      return (
          <div className="container">
              <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-5 col-xl-5 m-1">
                     <RenderDish dish={props.dish}/>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-5 col-xl-5 m-1">
                      <RenderComments comments={props.comments} />
                  </div>
              </div>
          </div>

        
      )
    }
}



/*
CLASS DEFINITION 
*/


//   class DishDetail extends Component {
//       constructor(props){
//           super(props); 
//       }

//       componentDidMount() {
//           console.log("Dish Detail component componentDidMount invoked");
//       }

//       componentDidUpdate() {
//          console.log("Dish Detail component componentDidUpdate invoked");
//       }

//       renderDish(dish){
//             return (
//                 <div key={dish.id}>
//                     <Card>
//                         <CardImg top width="100%" src={dish.image} alt="Card image cap" />
//                         <CardBody>
//                             <CardTitle>{dish.name}</CardTitle>
                            
//                             <CardText>{dish.description}</CardText>
                    
//                         </CardBody>
//                     </Card>
//                 </div>
//               )
         
//       }

//       renderComments({comments}) {
//         if (comments.length > 0 ) {

//             let userComments = comments.map((comment) => {
//                 return (<div key={comment.id}>
//                    <ul className="list-group list-group-flush">
//                      <li className="list-group-item">
//                         <p>{comment.comment}</p>
//                         <small>-- {comment.author} , {new Intl.DateTimeFormat('en-US',{year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</small>
//                       </li>  
//                     </ul>
//                 </div>)
//             });
           
//             return (
//                 <div>
//                     <h4>Comments</h4>
//                     {userComments}
//                 </div>
//             ) 
           
//         } else {
//             return (
//                 <div></div>
//             )
//         }
//       }
    
//       render(){
//         console.log("Dish Detail component Render invoked");
//           if (this.props.dish == null) {
//               return (<div></div>)
//           } else {
//             return (
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-xs-12 col-sm-12 col-md-5 col-xl-5 m-1">
//                            {this.renderDish(this.props.dish)}
//                         </div>
//                         <div className="col-xs-12 col-sm-12 col-md-5 col-xl-5 m-1">
//                             {this.renderComments(this.props.dish.comments)}
                            
//                         </div>
//                     </div>
//                 </div>
//             )
//           }
//       } 

//   }


  export default DishDetail;