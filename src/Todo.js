import React, { Component } from 'react';
import TodoItems from './TodoItems';
// var firebase = require('firebase');
// var uuid = require('uuid');
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyCrdgKnI4zV8TMtwI00aGfVHCHjkjKUt6c",
//     authDomain: "todo-a0cf0.firebaseapp.com",
//     databaseURL: "https://todo-a0cf0.firebaseio.com",
//     projectId: "todo-a0cf0",
//     storageBucket: "todo-a0cf0.appspot.com",
//     messagingSenderId: "722886691764"
//   };
//   firebase.initializeApp(config);

class Todo extends Component{
    constructor(props){
        super(props);

        this.state = {
            items: [],
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }   

    addItem(e){
        if(this._inputElement !== "")
        {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }

        this._inputElement.value = "";

        console.log(this.state.items);
        
        e.preventDefault();

    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });
        
        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <div>
            <form onSubmit={this.addItem}>
                <div className="input-group mb-3">
                    <input
                    ref = {(a) => this._inputElement = a}
                    type="text" className="form-control" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2"> <ion-icon name="add"></ion-icon>Add Task</button>
                    </div>
                </div>
            </form>
           
                <TodoItems entries={this.state.items}
                           delete={this.deleteItem}
                />
            </div>
        )
    }
}

export default Todo;