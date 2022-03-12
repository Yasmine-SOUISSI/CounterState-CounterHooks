import React, { Component } from "react";

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            date: 0,
        };
    }
    incrementCounter() {
        //This method will update just the Virtual Dom
        // this.state.counter = this.state.counter + 1;
        // console.log(this.state.counter);

        // we use setState() to change the real DOM
        this.setState({ counter: this.state.counter + 1 });
    }

    decrementCounter = () => {
        this.setState({ counter: this.state.counter - 1 });
    };
    // Life Cycle Component
    componentDidMount() {
        setInterval(() => {
            this.setState({ date: this.state.date + 1 });
        }, 1000);
    }
    componentDidUpdate() {
        console.log(" Counter component Did Update ");
    }
    componentWillUnmount() {
        console.log("Byeeeeeeeeeeeeee");
        clearInterval(this.state.date);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.incrementCounter()}>+</button>
                <h2>{this.state.counter}</h2>
                <button onClick={this.decrementCounter}>-</button>
                <h4>{this.state.date}</h4>
            </div>
        );
    }
}
