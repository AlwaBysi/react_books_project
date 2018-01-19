import React, { Component } from 'react';
import './UpdateBooks.css'

class UpdateBooks extends Component {

  resetState () {
    this.setState({
      id: null,
      name: '',
      author: '',
      date:'',
      pageCount: ''
    })
  }

  componentDidMount() {
    this.resetState()
  }

  constructor(props) {
    super(props)

    this.state = {
      id: null,
      name: '',
      author: '',
      date:'',
      pageCount: ''
    }

  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      id: (nextProps.currentBook.id || null),
      name: (nextProps.currentBook.name || ''),
      author: (nextProps.currentBook.author || ''),
      date: (nextProps.currentBook.date || ''),
      pageCount: (nextProps.currentBook.pageCount || '')
    });
  }

  updateLocalBook () {
    this.props.updateCurrentBook(this.state)
  }

  handleChange (name, e) {
    this.setState({
      [name]: e.target.value
    });
  }

  render() {
    return (
      <div className="updateBooks">
        <div className="updateBooks__block">
          <div className="updateBooks__block__title">
            <span>Название</span>
          </div>
          <div className="updateBooks__block__input">
            <input onChange={this.handleChange.bind(this, 'name')} type="text" value={this.state.name} />
          </div>
        </div>

        <div className="updateBooks__block">
          <div className="updateBooks__block__title">
            <span>Автор</span>
          </div>
          <div className="updateBooks__block__input">
            <input onChange={this.handleChange.bind(this, 'author')} type="text" value={this.state.author} />
          </div>
        </div>

        <div className="updateBooks__block">
          <div className="updateBooks__block__title">
            <span>Дата</span>
          </div>
          <div className="updateBooks__block__input">
            <input onChange={this.handleChange.bind(this, 'date')} type="text" value={this.state.date} />
          </div>
        </div>

        <div className="updateBooks__block">
          <div className="updateBooks__block__title">
            <span>Кол-во страниц</span>
          </div>
          <div className="updateBooks__block__input">
            <input onChange={this.handleChange.bind(this, 'pageCount')} type="text" value={this.state.pageCount} />
          </div>
        </div>

        <button onClick={this.updateLocalBook.bind(this)} className="updateBooks__button">Сохранить</button>
      </div>
    );
  }
}

export default UpdateBooks;