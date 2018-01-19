import React, { Component } from 'react';

class search extends Component {

  handleChange (e) {
    this.setState({
      inputValue: e.target.value
    })

    this.props.sortingList(e.target.value)
  }

  constructor(props) {
    super(props)

    this.state = {
      inputValue: ''
    }
  }

  render () {
    return (
      <div>
        <input type="text" placeholder="Поиск по названию" value={this.state.inputValue} onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}

export default search;
