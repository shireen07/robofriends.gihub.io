import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError : false
        }
    }

    //React v16 new life cycle method: its like a try-catch in js
    componentDidCatch(error, info){
        this.setState({ hasError : true })
    }

    render(){
        if(this.state.hasError){
            //if errorBoundry is true then show error else show prop.children
            return <h1>Ooooops.. Thats not Good!</h1>
        }
        return this.props.children //children is anything thats between errorBoundry when its called in App.js. for eg CardList
    }

}

export default ErrorBoundry;