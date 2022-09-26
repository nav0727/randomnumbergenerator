import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  getRandom = () => Math.ceil(Math.random() * 100)

  onGenerate = () => {
    const randomNumber = this.getRandom()
    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state

    return (
      <div className="bg">
        <div className="container">
          <h1>Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>

          <button type="button" onClick={this.onGenerate}>
            Generate
          </button>

          <p className="digit">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
