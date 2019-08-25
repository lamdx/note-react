// 1. 导入包
import React from "react";
import ReactDOM from "react-dom";

const user = {
  name: "jack",
  age: 18
};

// 第一种创建组件的方式
function Hello(props) {
  // 如果 在一个组件中 return 一个 null。则表示此组件是空的，什么都不会渲染
  // return null
  // 在组件中，必须 返回一个 合法的 JSX 虚拟DOM元素
  // props.name = 'zs'
  console.log(props);
  // 结论：不论是 Vue 还是 React，组件中的 props 永远都是只读的；不能被重新赋值；

  return (
    <div>
      这是hello组件 ---{props.name}---{props.age}
    </div>
  );
}

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

/* var o2 = {
  age: 22,
  address: '中国北京',
  phone: '139999'
}

var o1 = {
  name: 'zs',
  ...o2
}

console.log(o1) */
