import React, {Component} from "react";

class Todo extends Component {

    render() {
        const {text, completed} = this.props.data;

        return (
            <li className={completed ? "completed" : ""}><span className="span_text" onClick={this.Toggle.bind(this)} >{text}</span> <span onClick ={this._handleRemove.bind(this)} className="x">&#x2715;</span></li>
        );
    }
    Toggle(){
        const {id} = this.props;
        this.props.onToggle(id);

    }
    _handleRemove() {
        const {id} = this.props;
        this.props.onRemove(id);
    }
}

export default Todo;