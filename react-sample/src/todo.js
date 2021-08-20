import React, {Component} from 'react';

export default class Todo extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      todoArray: [],
      name: ''
    };
  }

  onInput = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  addTodo = () => {
    const {todoArray, name} = this.state;
    this.setState({
      todoArray: [...todoArray, name]
    });
  }

  removeTodo = (index) => {
    const {todoArray, name} = this.state;
    this.setState({
      todoArray: [...todoArray.slice(0,index), ...todoArray.slice(index+1)]
    });
  }

  render(){
    const {todoArray} = this.state;


    return(<div>
      <input type="text" onInput={this.onInput} />
      <button onClick={this.addTodo}>登録</button>
      <ul>
        {todoArray.map((todo, index) => 
          <li key={index}>
            {todo}
            <button onClick={() => {this.removeTodo(index)}}>削除</button>
          </li>
        )}
      </ul>
    </div>);
  }
}