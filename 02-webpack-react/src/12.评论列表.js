// 1. 导入包
// import React, {Component} from 'react'
import React from "react";
import ReactDOM from "react-dom";

class CmtList extends React.Component {
  constructor() {
    super();
    this.state = {
      CommentList: [
        { id: 1, user: "张三", content: "哈哈，沙发" },
        { id: 2, user: "李四", content: "哈哈，板凳" },
        { id: 3, user: "王五", content: "哈哈，凉席" },
        { id: 4, user: "赵六", content: "哈哈，砖头" },
        { id: 5, user: "田七", content: "哈哈，楼下山炮" }
      ]
    };
  }
  render() {
    return (
      <div>
        <h1>这是评论列表组件</h1>
        {this.state.CommentList.map(item => {
          return (
            <div key={item.id}>
              <h2>评论人：{item.user}</h2>
              <p>评论内容：{item.content}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

// 3. 调用 render 函数渲染
ReactDOM.render(
  <div>
    <CmtList />
  </div>,
  document.getElementById("app")
);
