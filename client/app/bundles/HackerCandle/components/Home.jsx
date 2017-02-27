import React, { Component } from 'react';

class Home extends Component {

constructor(props, _railsContext) {
  super(props, _railsContext);
this.renderInventory = this.renderInventory.bind(this);
};

renderInventory() {
const candles = {...this.props.inventoryObject};
const candleElements = [];
const {addToCart} = this.props;

  for(let key in candles) {
    let candle = candles[key]

    candleElements.push(
      <div className="candle-item" key={key}>
      <h3>{candle.name}</h3>
      <img className="candle-image" src="http://placehold.it/250x250"></img>
      <h4>${candle.price}</h4>
      <p>scent: {candle.scent}</p>
      <button className="add-button" onClick={ () => addToCart(key) } >Add to Cart</button>
      </div>
    )
    candleElements.reverse();
  };
  return (
    <div className="candle-container">
      {candleElements}
    </div>
  )
};

  render() {
    return(
      <div>
        <div id="candle-home">
          <h1 id="header-home">Set the mood for code.</h1>
        </div>
        {this.renderInventory()}
      </div>
    );
  };
};

export default Home;
