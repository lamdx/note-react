// 1. 导入包
// import React, {Component} from 'react'
import React from "react";
import ReactDOM from "react-dom";

import CmtList from "@/components/CmtList2";

// 3. 调用 render 函数渲染
ReactDOM.render(
  <div>
    <CmtList />
  </div>,
  document.getElementById("app")
);
