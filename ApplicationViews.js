
import { Route } from "react-router-dom";
import React, { Component } from "react";

import Photos from "./Photos/PhotoList";

export default class ApplicationViews extends Component {
    isAuthenticated = () => localStorage.getItem("credentials") !== null

    render() {
        return (

            <React.Fragment>
                <Route exact path="/" render={props => {
                    if (this.isAuthenticated()) {
                        return <Photos />
                        
                    } else {
                        return <Login{...props}/>
                    }
                }} />
                <Route exact path="/Photos" component={PhotoList} />
        
            
            </React.Fragment>
        )
    }
}