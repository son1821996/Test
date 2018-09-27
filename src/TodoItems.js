import React, { Component } from 'react';
import './TodoList.css';

class TodoItems extends Component {
    constructor(props){
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    state = {
        iconName : 'refresh',
    }


    createTasks(item) {
        
        return <li
        key={item.key}>
        <table className="table table-hover">
            <tbody>
                <tr>
                    <div className="d-flex align-items-start" style={{ height: 70 }}>{item.text}</div>
                    <div className="d-flex align-items-end flex-column">
                        <div className="mt-auto p-2">
                            <button className="btn btn-white btn-xs"><ion-icon name="brush"></ion-icon>
                            </button> 
                            <button
                            onClick={this.checkDone}
                             className="btn btn-primary btn-xs"><ion-icon name={this.state.iconName}></ion-icon>
                            </button> 
                            <button className="btn btn-danger btn-xs"
                            onClick={() => this.delete(item.key)}
                            ><ion-icon name="close"></ion-icon></button>
                        </div>
                    </div>
                </tr>
            </tbody>
        </table>
        </li>
        
    }

    delete(key)
    {
        this.props.delete(key);
    }

    checkDone = () => {
        const checkdone = this.state.iconName;
        this.setState( {iconName : 'checkmark'} )
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}

export default TodoItems;