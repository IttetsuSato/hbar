import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

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
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu/>
          </IconButton>
          <Typography variant="h6">
            {this.props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;