import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementTwo,decrementTwo } from './redux/actions/actions'
class Counter extends Component {
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Counter {this.props.SEX}</h1>
        <hr />
        <div>
          <button onClick={this.props.onAdd2.bind(this,100)}>Add</button>
          <button onClick={this.props.onDec2.bind(this,6)}>Sub</button>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    SEX: state.counter2.counter
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onAdd2: number => dispatch(incrementTwo(number)),
    onDec2: number => dispatch(decrementTwo(number)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)