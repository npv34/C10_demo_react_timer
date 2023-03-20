import {Component} from "react";

class CustomerList extends Component {
    // init
    constructor(props) {
        super();
        this.state = {
            name: 'Luan'
        }
    }

    componentDidMount() {
        console.log('Day la ham chay sau render')
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        console.log('da update xong component')
    }

    componentWillUnmount() {
        console.log('Tam biet')
    }

    changeName(value) {
        this.setState({ name: value})
    }

    render() {
        return (
            <>
                <input type="text" onChange={(e) => this.changeName(e.target.value)}/>
                <h2>{this.state.name}</h2>
            </>

        )
    }
}

export default CustomerList
