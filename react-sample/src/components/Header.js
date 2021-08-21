import React from "react";

class Header extends React.Component{
  constructor(props){
    super(props);
  }

  handleChange = (event) => {
    const titleText = event.target.value;
    this.props.addTitle(titleText);
  };

  render(){
    return (
      <div>
        <input placeholder="無題のドキュメント" value={this.props.title} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Header;