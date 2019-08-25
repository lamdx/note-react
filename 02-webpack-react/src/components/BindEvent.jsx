import React from "react";

export default class BindEvent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <button onClick={() => this.show("🐷", "🍕")}>按钮</button>
      </div>
    );
  }

  show = (arg1, arg2) => {
    console.log("show方法被调用了" + arg1 + arg2);
  };
}
