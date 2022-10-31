import ComponentClass from "./components/componentClass/componentClass";
import PureComponentClass from "./components/pureComponentClass/pureComponentClass";
import ComponentFunc from "./components/ComponentFunc";

import randomWords from 'random-words';
import React from "react";



export default class App extends React.Component {
  state = {
    count: 0,
    str: 'str',
    pure: 'pure',
    func: 'func'
  }
  componentDidMount() {
    setInterval(() => {
 if (this.state.count % 2) {
  this.setState({
    count: this.state.count + 1,
    str: randomWords(),
  })
 } else {
  this.setState({
    count: this.state.count + 1,
    str: randomWords(),
    pure: randomWords(),
    func: randomWords(),
  })
 }
    }, 3000) 
  }
  render() {
    console.clear();
    return (
      <header className="App-header">
      <ComponentClass string={this.state.str}/>
      <PureComponentClass string={this.state.pure}/>
      <ComponentFunc string={this.state.func}/>
      </header>
  );

  }
  
}


//