import React from "react";

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {content: ""};
  }

  handleChange = (event) => {
    const content = event.target.value;
    this.setState({content: content});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addMemo(this.state.content);
    this.setState({content: ""});
  };

  render(){
    return (
      <div>
        <h2>Form</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.content} onChange={this.handleChange} />
          <input type="submit" value="Add Memo" />
        </form>
      </div>
    );
  }
}

export default Form;