import React from "react";
import SearchBar from "./SearchBar";

class Nav extends React.Component {
    constructor(props){
        super(props)
    }

    render(){

        return(
            <>
                <SearchBar onSearch={this.props.onSearch}/>

            </>
        )
    }
}

export default Nav