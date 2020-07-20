import React , {Component} from 'react'; 

function Daco(props) {
   <div>
       <h1 className="props.name"></h1>
   </div> 
}

let daco = {
   name: "Daco Jara", 
   breed: "pug", 
   age: 9, 
   favoriteFood: "hamburguer"
}

ReactDOM.render(daco, document.getElementById('app'));