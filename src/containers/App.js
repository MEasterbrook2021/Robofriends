import React, { Component } from "react";
import CardList from "../components/CardList";
import { Robots } from '../Robots';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';

class App extends Component {
    constructor () {
        super()
        this.state = {
            Robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({ Robots: users }));
    }
    
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { Robots, searchfield } = this.state;
        const targetRobot = Robots.filter(Robots => {
        return Robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        if(!Robots.length){
            return <h1>Loading...</h1>
        } else{
    return (
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList Robots = { targetRobot }/>
                </ErrorBoundary>
            </Scroll>
        </div>
    );
    }
}
}

export default App