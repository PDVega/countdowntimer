import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <div>
        <div>React countdowntimer</div>
        <div>
          <div>150 Days</div>
          <div>17 Hours</div>
          <div>3 Minutes</div>
          <div>55 Seconds</div>
        </div>
        <input placeholder='new date' />
        <button>Submit</button>
      </div>      
    )
  }
}

export default App