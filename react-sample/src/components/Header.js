import React from "react";
import SimpleMenu from "./Menu";
import { AppBar, Toolbar, Typography } from '@material-ui/core';

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
      <AppBar position="static">
        <Toolbar>
          <SimpleMenu readContent={this.props.readContent} />

          <Typography variant="h6">
            {this.props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;