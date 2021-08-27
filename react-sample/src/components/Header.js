import React from "react";
import SimpleMenu from "./Menu";
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';

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
          <SimpleMenu/>

          <Typography variant="h6">
            {this.props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;