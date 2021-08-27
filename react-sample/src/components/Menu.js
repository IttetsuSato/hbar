import React from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const readFile = (e) => {
    let fileReader = new FileReader();
    for(const file of e.target.files) {
      //Fileオブジェクト(テキストファイル)のファイル内容を読み込む
      fileReader.readAsText(file, 'UTF-8');
      //ファイルの読み込み完了後に内容をコンソールに出力する
      fileReader.onload = ()=> {
        console.log(fileReader.result);
      };
    }
  }

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <ListIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <form>
              <input id="file" type="file" name="file" multiple onChange={(e) => readFile(e)}/>
          </form>
        </MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
      </Menu>
    </div>
  );
}