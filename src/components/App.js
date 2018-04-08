import React, {Component} from 'react';
import "../styles/style.css";
import Header from "./Header";
import TodoList from "./TodoList";
import {createTodo, deleteTodo, toggleTodo,fetchTodos} from "../service/APIServices";
import {Redirect} from "react-router-dom";

class App extends Component {
    state = {
        todos: []
    };
    componentDidMount() {
        const {auth} = this.props;
        if(!auth) {
            return;
        }
        this.fetchListTodos();
    }
    fetchListTodos() {

        fetchTodos().then(object => {
            const {data, success} = object;

            if (success) {
                this.setState({
                    todos: data
                });
            }
        }).catch(error => {
            console.log(error);
        });
    }
    render() {
        const {todos} = this.state;
        const {auth} = this.props;
        if(!auth){
            return <Redirect to ="/login"/>;
        }
        return (
            <div id="wrap">
                <Header onCreate={this.handleOnCreate.bind(this)}/>
                <TodoList onToggle={this._handleToggle.bind(this)} onDeleteTodo={this.handleDelete.bind(this)} todos={todos}/>
            </div>
        );
    }

    _handleToggle(id) {
       toggleTodo(id)
           .then(() => {
               this.fetchListTodos();
           });
    }
    handleDelete(id) {
       deleteTodo(id)
           .then(() => {
               this.fetchListTodos();
           });
    }
    handleOnCreate(text) {
      createTodo(text)
          .then(() => {
              this.fetchListTodos();
          });
    }
}

export default App;
