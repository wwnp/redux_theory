import './App.scss';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Component } from 'react';
import { connect } from 'react-redux'
import Counter from './Counter';
import { decrement, increment,add_number,incrementAsync } from './redux/actions/actions';
class App extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className="App" >
        <h1>Counter {this.props.counter1}</h1>
        <Button
          variant="secondary"
          onClick={this.props.onAdd}
        >
          Add
        </Button>
        <Button
          variant="danger"
          onClick={this.props.onDec}
        >
          Dec
        </Button>
        <Button
          variant="warning"
          onClick={this.props.onAddCustom.bind(this, 100000)}
        >
          AddCustom
        </Button>
        <Button
          variant="success"
          onClick={this.props.onAsyncInc.bind(this, 69)}
        >
          ASYNC ADD
        </Button>
        <Counter></Counter>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    counter1: state.counter1.counter
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => { dispatch(increment()) },
    onDec: () => { dispatch(decrement()) },
    onAddCustom: (number) => { dispatch(add_number(number)) },
    onAsyncInc: (number) => { dispatch(incrementAsync(number)) },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)