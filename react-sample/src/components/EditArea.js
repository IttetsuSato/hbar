import React from "react";

class EditArea extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      focusId: '',
      content: ''
    };
    this.focusArea = React.createRef();
  }
  
  //textareaへの書き込みをcontentに保存
  handleChange = (event) => {
    const focusId = event.target.id;
    const content = event.target.value;
    this.setState({focusId: focusId, content: content});
  };

  //enterキーで保存して次のtextareaをcreate
  pressEnter = (event) => {
    if(event.keyCode === 13){
      const {focusId, content} = this.state;
      event.preventDefault();
      this.props.updateContent(focusId, content);
      const nextId = this.props.createContent();
      this.setState({focusId: nextId, content: '' });
      const newTextarea = this.focusArea.current;
      newTextarea.focus();
    }
  }
  //deleteキーでline削除？
  pressDelete = (event) => {
    if(event.keyCode === 8){
      const {focusId, content} = this.state;
      if(content === ''){
        console.log("delete");
      }
    }
  }

  //textareaでボタンを押したときの処理
  lineOnKeyDown = (event) => {
    this.pressEnter(event);
    this.pressDelete(event);
  }
  
  //textareaへのフォーカスがはずれたら保存
  lineBlur = (event) => {
    const {focusId, content} = this.state;
    event.preventDefault();
    this.props.updateContent(focusId, content);
    this.setState({content: ""});
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
          ref={this.focusArea}
          id={contentData.id}
          className={contentData.id}
          rows="1" 
          onChange={this.handleChange}
          onKeyDown={this.lineOnKeyDown}
          onBlur={this.lineBlur}
          onFocus={this.lineFocus}
          defaultValue={contentData.content}
          ></textarea>
        </li>
      );
    })
    return (
      <div>
        <h2>{title}</h2>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

export default EditArea;