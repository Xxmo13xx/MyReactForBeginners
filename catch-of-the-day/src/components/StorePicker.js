import React from 'react';

class StorePicker extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
        <React.Fragment>
            {/*The React.Fragment takes hte place of random DIV tags. React.Fragment will allow you to place multiple JSX elements in one render method, since they are wrapped in the Fragment.*/}
            <p>Fish</p>
            <form className="store-selector">
                <h2> Please Enter a Store</h2>
                <input tyep="text" requred placeholder="Store Name" />
                <button type="submit"> Visit Store</button>
            </form>
        </React.Fragment>

        )
    }
}


export default StorePicker