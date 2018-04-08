import React, {Component} from "react";
import Todo from "./Item";
class TodoList extends Component {
    render() {
        const {todos} = this.props;
        return (
            <div id="main">
                <ul id="list">
                    {
                        todos.map((data,index) =>{
                            return(
                                <Todo onToggle={this.handleToggleTodo.bind(this)} onRemove={this._handleRemoveToto.bind(this)} id ={index} key={index} data={data}/>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
    handleToggleTodo(id) {

        this.props.onToggle(id);
    }

    _handleRemoveToto(id) {
        this.props.onDeleteTodo(id);
    }
}



export default TodoList;