// 1. 导入包
import React from "react";
import ReactDOM from "react-dom";

// 导入 Hello 组件
// 默认，如果不做单独的配置的话，不能省略 .jsx 后缀名
// import Hello from './components/Hello.jsx'

// 注意： 这里的 @ 符号，表示 项目根目录中的 src 这一层目录
import Hello from "@/components/Hello";

const user = {
  name: "jack",
  age: 18
};

// 3. 调用 render 函数渲染
ReactDOM.render(
  <div>
    123
    {/* 直接把 组件的名称，以标签形式，丢到页面上即可 */}
    {/* <Hello name={user.name} age={user.age} /> */}
    <Hello {...user} />
  </div>,
  document.getElementById("app")
);
