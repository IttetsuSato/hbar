import React from "react";
import { Container, Paper } from '@material-ui/core';

class EditArea extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      focusId: '',
      content: ''
    };
  }

  titleChange = (event) => {
    const titleText = event.target.value;
    this.props.addTitle(titleText);
  };
  
  //textareaへの書き込みをcontentに保存
  handleChange = (event) => {
    const focusId = event.target.id;
    const content = event.target.value;
    this.setState({focusId: focusId, content: content});
  };
  
  //enterキーで保存して次のtextareaをcreate
  pressEnter = (event) => {
      event.preventDefault();
      const {focusId, content} = this.state;
      this.props.updateContent(focusId, content);
      this.props.createContent(focusId);
  }
  //deleteキーでline削除
  pressDelete = (event) => {
      const {focusId, content} = this.state;
      if(content === ''){
        this.props.focusLine(focusId, -1);
        this.props.deleteContent(focusId);
      }
  }
  //上下移動
  pressArrowUp = () => {
    this.props.focusLine(this.state.focusId, -1);
  }
  pressArrowDown = () => {this.props.focusLine(this.state.focusId, 1);}

  //textareaでボタンを押したときの処理
  lineOnKeyDown = (event) => {
    const keyCode = event.keyCode;
    if(keyCode === 13) {this.pressEnter(event);}
    if(keyCode === 8 ) {this.pressDelete(event);}
    if(keyCode === 38) {this.pressArrowUp();}
    if(keyCode === 40) {this.pressArrowDown();}
  }
  
  //textareaへのフォーカスがはずれたら保存
  lineBlur = (event) => {
    event.preventDefault();
    const {focusId, content} = this.state;
    this.props.updateContent(focusId, content);
    this.setState({content: ''});
  }

  //focus時、stateを更新
  lineFocus = (event) => {
    const focusId = event.target.id;
    const content = event.target.value;
    this.setState({focusId: focusId, content: content});
  }

  render(){
    const{title, contents} = this.props;
    const list = contents.map(contentData => {
      return(
        <li key={contentData.id}>
          <textarea
          id={contentData.id}
          defaultValue={contentData.content}
          rows="1" 
          onChange  ={this.handleChange}
          onKeyDown ={this.lineOnKeyDown}
          onBlur    ={this.lineBlur}
          onFocus   ={this.lineFocus}
          ></textarea>
        </li>
      );
    })
    return (
      <div>
        <Container maxWidth="sm">
          <Paper elevation={1}>
            <input placeholder="無題のドキュメント" value={this.props.title} onChange={this.titleChange} />
            <ul>
              {list}
            </ul>
          </Paper>
        </Container>

      </div>
    );
  }
}

export default EditArea;