import React from "react";

import { randomIdGenerator, searchIndex } from "./functions";
import Header from "./components/Header";
import EditArea from "./components/EditArea";



class Hbar extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: "無題のドキュメント",
      nextId: randomIdGenerator(12),
      contents: [{id: randomIdGenerator(12), content: randomIdGenerator(12)}]
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
    console.log(...contents.slice(contentIndex+1));
    this.setState({
      nextId: randomIdGenerator(12),
      contents: [...contents.slice(0,contentIndex+1), {id: nextId, content: nextId}, ...contents.slice(contentIndex+1)]
    });
  };


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
        <Header addTitle={this.addTitle}/>
        <EditArea 
          title={title} 
          contents={contents}
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