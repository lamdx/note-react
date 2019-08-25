// 1. 导入包
import React from "react";
import ReactDOM from "react-dom";

let a = 10;
let str = "this is string";
let boo = false;
let arr = ["王者荣耀", "英雄联盟", "绝地求生"];

const nameArr = [];
// 注意：React中，需要把key添加给 被 forEach 或 map 或 for 循环直接控制的元素
arr.forEach(item => {
  const temp = <h3 key={item}>{item}</h3>;
  nameArr.push(temp);
});

// 3. 调用 render 函数渲染   jsx  XML 比 HTML 严格多了
// 什么情况下需要使用 {} 呢？ 当我们需要在 JSX 控制的区域内，写 JS 表达式了，则需要把 JS 代码写到 {} 中
ReactDOM.render(
  <div>
    {a}
    <hr />
    {str}
    <hr />
    {boo ? "条件为真" : "条件为假"}
    <hr />
    {nameArr}
    <hr />
    {arr.map(item => (
      <div key={item}>
        <h5>{item}</h5>
      </div>
    ))}
    <hr />
    <p className="myele">！！！！！！！！！！</p>
    <label htmlFor="ooo">11111</label>
  </div>,
  document.getElementById("app")
);
