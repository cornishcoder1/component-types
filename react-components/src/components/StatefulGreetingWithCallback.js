import React from "react";

class StatefulGreetingWithCallback extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      introduction: "Hello!",
      buttonText: "Exit",
    };

  }

  handleClick() {
    this.setState({
      introduction: "Goodbye!",
      buttonText: "Enter",
    }, // callback function
    ()=>{
        console.log('new state', this.state.introduction);
        console.log('new state', this.state.buttonText);
    }); 
    console.log(this.state.introduction);
    console.log(this.state.buttonText);
  }

  render() {
    return (
      <div>
        <h1>{this.state.introduction}, {this.props.greeting}</h1>
        <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
      </div>
    ) 
  }
}

export default StatefulGreetingWithCallback


// export default class StatefulGreeting extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   setCount = () => {
//     this.setState(prevState => {
//       return { count: prevState.count + 1 }
//     })
//   }

//   render() {
//     return (
//       <div className="greeting">
//         <h1>
//           Hello, {this.props.name}, I'm a stateful component!
//         </h1>
//         <h2>You've clicked {this.state.count} times</h2>
//         <button onClick={this.setCount}>Increment Count</button>
//       </div>
//     );
//   }
// }