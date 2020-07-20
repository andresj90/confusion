import React, {Component} from 'react'; 
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent'; 
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
//this will be require withRouter to connect the react component with redux
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
//this will connect the component with redux
import {connect} from 'react-redux'; 


//this will map the redux store state into props that will be available  to the props, these are the properties define in the reduces and pass to the store
const mapStateToProps = state => {
  return {
    dishes : state.dishes, 
    comments: state.comments, 
    promotions: state.promotions, 
    leaders: state.leaders
  }     
}

class Main extends Component {
    
    
    

    constructor(props) {
        super(props); 
    }

    

    render() {
       
      

       const SelectedDish = ({id}) => {
          

            return <DishDetail dish= {this.props.dishes.filter((dish) => dish.id == id)[0]} 
                                comments={this.props.comments.filter((comment) => comment.dishId == id)}/>
       }

        const HomePage = () => {
          return (
            <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                  promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                  leader={this.props.leaders.filter((leader) => leader.featured)[0]}  

            ></Home>
          )
         }

        return (
          <div>
            <Header/>
            <Switch>
              <Route path='/home' component={HomePage}/>
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}/>}/>
              <Route exact path='/contactus' component={() => <Contact/>}/>
              <Route path='/menu/:id' render={(props) => <SelectedDish id= {props.match.params.id}/>}/>
              <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders}/>}/>
              <Redirect to='/home'/>
            </Switch>
            <Footer/>
          </div>
            //exact path helps us with the menu url, becauuse if both routes have only path, the first path will be the one that will be redirected
        );
        
        
      
      }
}

//this is where the component connects to the store and gets accessed to the state, withRouter is because we are using the react router
export default withRouter(connect(mapStateToProps)(Main));