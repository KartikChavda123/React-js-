import React, { Component } from 'react'

export default class Classcom extends Component {
    constructor(props)
    {
        super(props)

        this.state = { count: 0};
    }

    increment = () =>{
        this.setState({count: this.state.count + 1})
    }
  render() {
    return (
      <div className='a1'>
        <h1>Class components</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>click</button>
      </div>
    )
  }
}
