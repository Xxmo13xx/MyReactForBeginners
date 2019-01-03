import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component{
    state = {
        fishes: {},
        order: {}
    }

    addFish = (fish) => {
        // Take a copy of the existing state
        // add our new fish to the new 
        const fishes = {...this.state.fishes };
        fishes['fish${Date.now()}'] = fish;
        // the tyler mcginnis way
        // this.setState((fishes)=>{
        //     fishes: this.state.fishes
        // }) 
        this.setState({
            fishes: fishes
        })
    }

    loadSampleFishes = () =>{
        this.setState({ fishes: sampleFishes})
    }

    addToOrder = (key) =>{
        console.log("In add to order");
        
        //1. Take a copy of the stae.
        const order = {...this.state.order};
        //2. Either add to the order or update the number in the order.
        order[key] = order[key] + 1 || 1;
        //3. Call setState to update the stae. 
        // this.setState({ order }) is the same as this.setState({ order: order})
        this.setState({ order });
        


    }


    render() {
        return (
           <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagLine="Fresh Seafood Market"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish 
                                key={key} 
                                index = {key}
                                details={this.state.fishes[key]} 
                                addToOrder={this.addToOrder} />))}
                    </ul>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
           </div> 
        )
    }
}

export default App