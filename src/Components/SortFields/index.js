import React, { Component } from 'react';

class search extends Component {

  changeSelect (e) {
    this.props.sortBy(e.target.value)
  }

  render () {
    return (
      <div>
        <select onChange={this.changeSelect.bind(this)}>
          <option disabled>Сортировать по</option>
          <option value={'name'}>Названию</option>
          <option value={'date'}>Дате написания</option>
        </select>
      </div>
    );
  }
}

export default search;
