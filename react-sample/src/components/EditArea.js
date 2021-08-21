import React from "react";

class EditArea extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const{title, contents} = this.props;
    return (
      <div>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default EditArea;