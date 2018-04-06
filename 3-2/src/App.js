import React, {Component} from 'react';
import "./style.css";
import Header from "./Header";
import TodoList from "./TodoList";
import {getTodos, saveTodos} from "./service/StorageServices";

class App extends Component {
    state = {
        todos: []
    };

    componentDidMount() {
        const todos = getTodos();
        this.setState({
            todos : todos
        });
    }
    render() {
        const {todos} = this.state;
        return (
            <div id="wrap">
                <Header onCreate={this.handleOnCreate.bind(this)}/>
                <TodoList onToggle={this._handleToggle.bind(this)} onDeleteTodo={this.handleDelete.bind(this)} todos={todos}/>
            </div>
        );
    }


    _saveToLocalStorage() {
        const {todos} = this.state;
        saveTodos(todos);
    }
    _handleToggle(id) {
        const {todos} = this.state;
        const todo = todos[id];
        todo.completed = !todo.completed;
        this.setState({
            todos:todos
        });
        this._saveToLocalStorage();
    }
    handleDelete(id) {
        const {todos} = this.state;
        todos.splice(id, 1);
        this.setState({
            todos:todos
        });
        this._saveToLocalStorage();
    }

    handleOnCreate(text) {
        const {todos} = this.state;

        todos.push({
            text: text,
            completed: false
        });

        this.setState({
            todos: todos,
        });
    }
}

export default App;
