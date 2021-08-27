import React from 'react';
import { Button } from '@material-ui/core';

import { randomIdGenerator, searchIndex } from "./functions";
import Header from "./components/Header";
import EditArea from "./components/EditArea";



class Hbar extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: "無題のドキュメント",
      nextId: randomIdGenerator(12),
      contents: [{id: randomIdGenerator(12), content: 'please read or create file'}]
    };
  }

  addTitle = (titleText) => {
    if(!titleText){
      titleText = "無題のドキュメント";
    }
    this.setState({
      title: titleText
    });
  };

  // 任意の行をfocus
  focusLine = (id, command) => {
    const {contents} = this.state;
    const contentIndex = searchIndex(id, contents);
    const focusContent = contents[contentIndex + command];
    if(focusContent){
      const focusTextArea = document.getElementById(focusContent.id);
      focusTextArea.focus();
    }
  }
  
  //textareaの生成（新しいtextareaのidを返す）
  createContent = (id) => {
    const {nextId, contents} = this.state;
    //現在入力していたtextareaのindexを取得
    const contentIndex = searchIndex(id, contents);
    this.setState({
      nextId: randomIdGenerator(12),
      contents: [...contents.slice(0,contentIndex+1), {id: nextId, content: ''}, ...contents.slice(contentIndex+1)]
    });
  };

  //contentsの読み込み
  readContent = (textArray) => {
    this.setState({
      contents: []
    });
    for(const text of textArray){
      const {nextId, contents} = this.state;
      this.setState({
        nextId: randomIdGenerator(12),
        contents: [...contents, {id: nextId, content: text}]
      });
    }
  }


  //contentsのupdate
  updateContent = (id,newContent) => {
    const {contents} = this.state;
    const updatedContents = contents.map(contentData => {
      if(contentData.id === id){
        contentData.content = newContent;
      }
      return contentData
    });
    this.setState({
      contents: updatedContents
    });
  };

  //contentsのdelete
  deleteContent = (id) => {
    const {contents} = this.state;
    if(contents.length > 1){
      const deletedContents = contents.filter(contentData => {
        return contentData.id !== id;
      });
      this.setState({contents: deletedContents});
    }
  };

  render(){
    const {title,contents} = this.state;
    return(
      <div>
        <Header
          title={title} 
          readContent={this.readContent}
          />
        <EditArea 
          contents={title, contents}
          addTitle={this.addTitle}
          focusLine={this.focusLine}
          createContent={this.createContent}
          updateContent={this.updateContent}
          deleteContent={this.deleteContent}
          />
      </div>
    );
  }
}

export default Hbar;