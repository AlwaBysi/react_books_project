import React, { Component } from 'react';
import './Book.css'
import Modal from '../ModalWindow'

class BooksList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      openModal: false
    };
  }

  updateBook (id) {
    this.props.updateCurrentBook(id)
  }

  deleteBook (id) {
    this.props.deleteCurrentBook(id)
  }

  showModal (id) {
    const bookId = id

    this.refs.modal.open()
      .then(() => {
        this.deleteBook(bookId)
      })
  }

  render() {
    return (
      <div>
        <Modal ref="modal" />
        <div className="booksListWrap">
          {
            this.props.books.map((book) => {
              return (
                <div className="BookBlock" key={book.id} >
                  <span>{book.name}</span><br/>
                  <span>автор: {book.author}</span><br/>
                  <span>дата: {book.date}</span>
                  <div className="BookBlock__buttons">
                    <button onClick={this.updateBook.bind(this, book.id)} className="BookBlock__update">
                      Редактировать
                    </button>
                    <button onClick={this.showModal.bind(this, book.id)} className="BookBlock__delete">
                      Удалить
                    </button>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default BooksList;