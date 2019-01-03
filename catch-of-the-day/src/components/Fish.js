import React from 'react';
import {formatPrice} from '../helpers';


class Fish extends React.Component{
  constructor(props){
    super(props)
  }

  // handleAddToOrder = ()=> {
  //   this.props.addToOrder(this.index)
  // }

  


  render(){
    const {image,name, price, desc, status} = this.props.details;
    const isAvailable = status ==='available';
    return(
      <li className="menu-fish">
        <img src={image} alt={name}></img>
        <h3 className="fish-name">
          {name}
          <span className="fish-price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
    {/* using onClick={this.handleAddToOrder is okay however you can just place the function in line anyways. }*/}
        <button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>{isAvailable ? 'Add to Order' : 'Sold Out'}</button>
      </li>
    )
  }
}

export default Fish;