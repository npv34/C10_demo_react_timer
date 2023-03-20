import {Component} from "react";

class CountDown extends Component {
    constructor(props) {
        super();
        this.state = {
            number: 10,
            miliseconds: 1000
        }
    }

    componentDidMount() {
        let newNumber = this.state.number - 1
        this.setState({number: newNumber})
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        if (this.state.number > 0) {
            let milis = setInterval(() => {
                if (this.state.miliseconds == 0) {
                    this.setState({number: this.state.number - 1, miliseconds: 1000})
                } else {
                    let newMillis = this.state.miliseconds - 1;
                    this.setState({miliseconds: newMillis});
                    clearInterval(milis)
                }
            }, 1)
        }
    }

    render() {
        return (
            <h2>Number: {this.state.number} : {this.state.miliseconds}</h2>
        )
    }
}

export default CountDown;
