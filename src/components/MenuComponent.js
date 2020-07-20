import React, {
    Component
} from 'react';

import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import DishDetail from './DishDetailComponent';
import { Link } from 'react-router-dom';

/* 
THIS IS A FUNCTIONAL COMPONENT: 

  WHICH USES A FUNCTION TO BUILD A USER-DEFINED COMPONENT, THIS DOES NOT HAVE COMPONENT LYFECICLE METHODS, NEITHER CONSTRUCTOR OR STATE


*/

// user defined functions start with capital letter
function RenderMenuItem({dish, onClick}) {
    return (
        <div key={dish.id} >
            <Link to={`/menu/${dish.id}`}>
                <Card key={dish.id} onClick={<DishDetail dish={dish}/>}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </Link>
        </div>
    );  
}

const Menu = function(props) {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick}/> 
            </div>
        );  
});
        return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
            <div className="row">
            <div  className="col-12"> 
 
            </div>
            </div>
        </div>
        )
}


/* PRESENTATION COMPONENT THROUGH CLASS DEFINITION, THIS RECEIVES THE VARIABLES FROM A PARENT COMPONENT THROUGH THE PROPS */

// class Menu extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {

//         }
//     }

//     componentDidMount() {
//         console.log("Menu component componentDidMount invoked");
//     }

//     componentDidUpdate() {
//        console.log("Menu component componentDidUpdate invoked");
//     }


//     render() {
//         console.log("Menu component Render invoked");
//         const menu = this.props.dishes.map((dish) => {
//                     return (
//                         <div key={dish.id} className="col-12 col-md-5 m-1">
//                             <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
//                             <CardImg width="100%" src={dish.image} alt={dish.name} />
//                                 <CardImgOverlay>
//                                     <CardTitle>{dish.name}</CardTitle>
//                                 </CardImgOverlay>
//                             </Card>
                            
//                         </div>
//                     );  
//         });
//         return (
//             <div className="container">
//                 <div className="row">
//                     {menu}
//                 </div>
//                 <div className="row">
//                 <div  className="col-12">
            
                    
//                 </div>
//                 </div>
//             </div>
//         )
//     }
// }

export default Menu;