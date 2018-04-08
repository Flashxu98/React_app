import React, {Component} from "react";

class Todo extends Component {

    render() {
        const {title, completed} = this.props.data;

        return (
            <li className={completed ? "completed" : " "}><span className="span_text" onClick={this.Toggle.bind(this)} >{title}</span> <span onClick ={this._handleRemove.bind(this)} className="x">&#x2715;</span></li>
        );
    }
    Toggle(){
        const {data} = this.props;
        this.props.onToggle(data._id);

    }
    _handleRemove() {
        const {data} = this.props;
        this.props.onRemove(data._id);
    }
}

export default Todo;