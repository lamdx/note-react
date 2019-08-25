import React from "react";

import cssObj from "@/css/cmtitem.scss";
console.log(cssObj);

export default function CmtItem(props) {
  return (
    <div className={cssObj.cmtbox}>
      <h3 className={cssObj.title}>评论人：{props.user}</h3>
      <p className={cssObj.content}>评论内容：{props.content}</p>
    </div>
  );
}
