import React from "react";

import Form from "./components/Form";
import List from "./components/List";

class MemoApp extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      memos: [],
      nextId: 0
    };
  }

  addMemo = (content) => {
    const {memos, nextId} = this.state;
    this.setState({
      memos: [...memos, {id: nextId, content: content}],
      nextId: nextId + 1
    });
  };

  deleteMemo = (id) => {
    const {memos} = this.state;
    const filteredArray = memos.filter(memo => {
      return memo.id !== id;
    });
    this.setState({memos: filteredArray});
  };

  render(){
    const {memos} = this.state;
    return(
      <div>
        <h2>MemoApp</h2>
        <Form addMemo={this.addMemo}/>
        <List memos={memos} deleteMemo={this.deleteMemo} />
      </div>
    );
  }
}

export default MemoApp;