import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './Todo';

var destination = document.querySelector("#container");

ReactDOM.render(
        <div className="container">
    <div className="row">
        <div className="col">
            <h4>ToDo App</h4>
          
            
            <Todo/>
        </div>
  
        <div className="col">
      
        </div>
      </div>
    </div>
    ,
    destination
)
