import React from "react";

class List extends React.Component{
  render(){
    const{memos, deleteMemo} = this.props;
    const list = memos.map(memo => {
      return(
        <li key={memo.id}>
          #{memo.id} - {memo.content}
          <button onClick={()=> deleteMemo(memo.id)}>delete</button>
        </li>
      );
    });
    return (
      <div>
        <h2>List</h2>
        {list}
      </div>
    );
  }
}

export default List;