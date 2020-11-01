import React from "react";
import ReactDOM from "react-dom";



class App extends React.Component {

  state = {
    availableItems: 6,
    actualNumber: 1,
    purchasedItems: 0
  }

  handleRemove = () => {
    this.setState({
      actualNumber: this.state.actualNumber - 1
    })
  }

  handleAdd = () => {
    this.setState({
      actualNumber: this.state.actualNumber + 1
    })
  }

  handleBuy = () => {
    this.setState({
      availableItems: this.state.availableItems - this.state.actualNumber,
      purchasedItems: this.state.purchasedItems + this.state.actualNumber,
      actualNumber: 0,
    })
  }

  render() {
    const { availableItems, actualNumber, purchasedItems } = this.state
    const numberStyle = actualNumber === 0 ? { opacity: 0.4 } : {}
    return (
      <>
        <button disabled={actualNumber ? false : true} onClick={this.handleRemove}>-</button>

        <span> {actualNumber} </span>

        <button disabled={actualNumber === availableItems ? true : false} onClick={this.handleAdd}>+</button>

        {actualNumber > 0 && <button onClick={this.handleBuy}>Buy now!</button>}
        {purchasedItems > 0 ? <p>You bought {purchasedItems} products.</p> : null}
        {availableItems === 0 && <p>No more available items!<br />Please try again later.</p>}
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))