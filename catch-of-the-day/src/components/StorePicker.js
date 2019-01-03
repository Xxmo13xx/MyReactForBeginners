import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.goToStore = this.goToStore.bind(this)
    // }

    myInput = React.createRef();

    goToStore = (event) => {
        // 1. Stop the form from submitting
        event.preventDefault();
        // 2. Get the text from the input 
        const storeName = this.myInput.current.value;
        
        // 3. Change the page to /store/whatever-they-entered
        this.props.history.push('/store/{this.storeName')
        
    }

    render(){
        return (
        <React.Fragment>
            {/*The React.Fragment takes hte place of random DIV tags. React.Fragment will allow you to place multiple JSX elements in one render method, since they are wrapped in the Fragment.*/}
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2> Please Enter a Store</h2>

                <input 
                    type="text" 
                    ref={this.myInput}
                    required 
                    placeholder="Store Name"
                    defaultValue={getFunName()}    
                />
                <button type="submit"> Visit Store</button>
            </form>
        </React.Fragment>
        )
    }
}


export default StorePicker