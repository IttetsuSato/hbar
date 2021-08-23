import React from "react";

import { randomIdGenerator } from "./functions";
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
  
  //textareaの生成（新しいtextareaのidを返す）
  createContent = (id) => {
    const {nextId, contents} = this.state;
    //現在入力していたtextareaのindexを取得
    const idMatching = (con) => con.id === id
    const contentIndex = contents.findIndex(idMatching);

    this.setState({
      nextId: randomIdGenerator(12),
      contents: [...contents.slice(0,contentIndex+1), {id: nextId, content: nextId}, ...contents.slice(contentIndex+1)]
    });
    return nextId
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
  // deleteMemo = (id) => {
  //   const {memos} = this.state;
  //   const filteredArray = memos.filter(memo => {
  //     return memo.id !== id;
  //   });
  //   this.setState({memos: filteredArray});
  // };

  render(){
    const {title,contents} = this.state;
    return(
      <div>
        <Header addTitle={this.addTitle}/>
        <EditArea 
          title={title} 
          contents={contents} 
          createContent={this.createContent}
          updateContent={this.updateContent}
          />
      </div>
    );
  }
}

export default Hbar;