import React from 'react'
import { render } from 'react-dom'
import App from './components/app'


class CounterGreeter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {count:0}

  }

  clicked() {
    this.setState({count: this.state.count+1})
  }

  render() {
    return (
      <div onClick={this.clicked.bind(this)}>
        <h1>Hello {this.props.name}</h1>
        <h2>Click here {this.state.count}</h2>
      </div>

    )
  }

}

render((
  <div>
    <CounterGreeter name="Rahmona"/>
    <CounterGreeter name="Jim"/>
  </div>
    ),
    document.querySelector('main'))

console.log('welcome to counterGreeter')
