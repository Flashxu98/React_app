import React, {Component} from "react";
import Todo from "./Item";
import PropTypes from "prop-types";

class TodoList extends Component {
    render() {
        const {todos} = this.props;

         const TodoComponents = [];

        return (
            <div id="main">
                <ul id="list">
                    {
                        todos.map((data,index) =>{
                            return(
                                <Todo onToggle={this.handleToggleTodo.bind(this)} onRemove={this._handleRomoveToto.bind(this)} id ={index} key={index} data={data}/>
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

    _handleRomoveToto(id) {
        this.props.onDeleteTodo(id);
    }
}

TodoList.propTypes = {
    todos: PropTypes.array
};

export default TodoList;