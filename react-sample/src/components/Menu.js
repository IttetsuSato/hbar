import React from 'react';
import { IconButton, Button, Menu, MenuItem } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import FolderOpenTwoToneIcon from '@material-ui/icons/FolderOpenTwoTone';

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // ファイル読み込み、stateの変更も行う
  const readFile = (e) => {
    let reader = new FileReader();
    for(const file of e.target.files) {
      //Fileオブジェクト(テキストファイル)のファイル内容を読み込む
      reader.readAsText(file, 'UTF-8');
      //ファイルの読み込み完了後にreadContent実行
      reader.onload = () => {
        const standardizedTexts = reader.result.replace(/\r\n|\r/g, "\n");
        const textArray = standardizedTexts.split('\n');
        props.readContent(textArray);
      };
    }
  }

  return (
    <div>
      <IconButton
        aria-controls="simple-menu" aria-haspopup="true" 
        color="inherit"
        onClick={handleClick}>
        <ListIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Button
            variant="contained"
            color="default"
            startIcon={<FolderOpenTwoToneIcon />}
          >
            <form>
                <input id="file" type="file" name="file" display="none" multiple onChange={(e) => readFile(e)}/>
            </form>
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
      </Menu>
    </div>
  );
}