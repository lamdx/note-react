import React from "react";

export default class BindInputValue extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "乱世出英雄"
    };
  }
  render() {
    return (
      <div>
        <button onClick={() => this.show("🐷", "🍕")}>按钮</button>
        <h3>{this.state.msg}</h3>
        {/* 如果 我们只是把 文本框的 value 属性，绑定到了 state 状态，但是，如果不提供 onChagne 处理函数的话，得到的文本框，将会是一个只读的文本框 */}

        {/* 当 为 文本框绑定 value 值以后，要么同时提供一个 readOnly， 要么，提供一个 onChange 处理函数 */}
        {/* <input type="text" style={{ width: '100%' }} value={this.state.msg} readOnly /> */}
        <input
          type="text"
          style={{ width: "100%" }}
          value={this.state.msg}
          onChange={e => this.txtChanged(e)}
          ref="txt"
        />
      </div>
    );
  }
  show = (arg1, arg2) => {
    // 注意：React 中，如果想为 state 中的数据，重新赋值，不要使用 this.state.*** = 值
    // 应该 调用 React 提供的 this.setState({ msg: '123' })
    // this.state.msg = 'oooooo'

    // 在 React 中，推荐使用 this.setState({ }) 修改 状态值
    this.setState(
      {
        // 在 setState ，只会把 对应的 state 状态更新，而不会 覆盖其它的 state 状态
        msg: "this.state.msg被修改了" + arg1 + arg2
      },
      function() {
        console.log(this.state.msg);
      }
    );

    // 注意： this.setState 方法的执行，是异步的；
    // 如果大家在 调用完 this.setState 之后，又想立即拿到 最新的 state 值，需要使用 this.setState({}, callback)
  };

  // 每当文本框的内容变化了，必然会调用 这个 txtChanged
  txtChanged = e => {
    // console.log('变化了');

    // 在 onChange 事件中，获取 文本框的值，有两种方案：
    // 方案1： 通过 事件参数 e 来获取；
    // console.log(e.target.value);
    // 方案2： 使用 ref 获取 DOM 元素引用
    // console.log(this.refs.txt.value)
    // const newVal = e.target.value;
    const newVal = this.refs.txt.value;
    this.setState({
      msg: newVal
    });
  };
}
