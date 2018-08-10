import React, { Component } from 'react';
import { connect } from 'react-redux';//using connect from the redux to connect the provider which has the store to containers
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import { robots } from './robots';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField } from '../actions';


//define the params called when connect func is used (React-Redux)
const mapStateToProps = state => {
    return {
        searchField : state.searchField     //state from reducers.js. when we have multiple actions use: state.searchRobots.searchField 
    }
}

const mapDispatchToProps = (dispatch) => {   //dispatch in flux pattern archi is what triggers the action so it can be dispatched into the reducer
    return {
        onSearchChange : (event) => dispatch(setSearchField(event.target.value))         //dispatch action
    }
}



class App extends Component {
    constructor(){
        super();
        this.state = { //our app component has 2 states. state is the elemnt that changes in an app.
            robots: []
            //searchfield: '',
        }
    }

    componentDidMount() {
       // console.log(this.props.store.getState()); //redex store

        /*run the constructr with an empty array and on page load ie on mounting, change the state of robots to have robots prop*/
        //fetch is a method with the window object.a tool to make requests to servers
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users}))
    }
    
    // onSearchChange = (event) => { //rule of thumb: always use arraows while creating functions
    //     /*Function to search robots - Every time the input changes the robots filtered change. It runs the func with the event and 
    //     updates the searchfiled which is blank by default*/
    //     //console.log(event.target.value); /*gives us the value of the event in the console*/
    //     this.setState({searchfield: event.target.value}); //React method when you change state. always use
    // }

    render() {
        //destructuring
        const {robots} = this.state;
        const { searchField , onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            /*if the name of the robot includes the input from the search field then return the robot card*/
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        
        if(!robots.length){ //if its zero which is going to be false then turn it into h1 else display robots
            return <h1>Loading..</h1>
        }else{
            return (
                <div className='tc'>
                    <h1 className='f1'> RoboFriends </h1>
                    <SearchBox searchChange = {onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                        {/* <CardList robots={this.state.robots}/> */}
                        <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); //call upon the connect which is a higher order func to be used