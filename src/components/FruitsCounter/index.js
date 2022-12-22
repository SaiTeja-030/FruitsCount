// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {Mancount: 0, Bancount: 0}

  onMango = () => {
    this.setState(prevState => ({Mancount: prevState.Mancount + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({Bancount: prevState.Bancount + 1}))
  }

  render() {
    const {Mancount, Bancount} = this.state
    return (
      <div className="bg">
        <div className="container">
          <h1 className="heading">
            Bob ate {Mancount} mangoes {Bancount} bananas
          </h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
            className="img-1"
            alt="mango"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
            className="img-2"
            alt="banana"
          />
          <div className="btn">
            <button className="mango" type="button" onClick={this.onMango}>
              Eat Mango
            </button>
            <button className="banana" type="button" onClick={this.onBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
