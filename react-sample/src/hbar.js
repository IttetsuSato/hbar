import React from "react";

import Header from "./components/Header";
import EditArea from "./components/EditArea";

class Hbar extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: "無題のドキュメント",
      contents: [],
      nextId: 0
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
        <EditArea title={title} contents={contents} />
      </div>
    );
  }
}

export default Hbar;