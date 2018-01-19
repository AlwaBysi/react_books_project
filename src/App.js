import React, { Component } from 'react';
import UpdateBooks from './Components/UpdateBooks'
import BooksList from './Components/BooksList'
import SearchLine from './Components/SearchLine'
import SortFields from './Components/SortFields'
import './App.css';

const booksArray = [
  {
    id: 1,
    name: 'книга 1',
    author: 'макаревич',
    date: 1978,
    pageCount: 32
  },
  {
    id: 2,
    name: 'книга 2',
    author: 'тарасович',
    date: 6668,
    pageCount: 32
  },
  {
    id: 3,
    name: 'книга 3',
    author: 'агарович',
    date: 1228,
    pageCount: 32
  },
  {
    id: 4,
    name: 'книга 4',
    author: 'секарович',
    date: 198,
    pageCount: 32
  },
  {
    id: 5,
    name: 'книга 5',
    author: 'доставауч',
    date: 1999,
    pageCount: 32
  }
]

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      updatedBook: {},
      books: booksArray
    };
  }

  updateBookObj (bookUpdated) {
    const bookIndex = booksArray.findIndex((book) => {
      return book.id === bookUpdated.id
    })

    booksArray.splice(bookIndex, 1, bookUpdated)

    this.setState({
      books: booksArray
    })

    this.setState({updatedBook: {}})
  }

  updateBook (id) {
    const updatedBook = booksArray.find((book) => {
      return book.id === id
    })
    this.setState({updatedBook})
  }

  deleteBook (id) {
    const deletedIndexBook = this.state.books.findIndex((book) => {
      return book.id === id
    })

    this.state.books.splice(deletedIndexBook, 1)
    this.setState({books: this.state.books});
  }

  sortList (val) {
    if (val) {
      const sortedArray = this.state.books.filter(item => {
        return item.name.indexOf(val) > -1
      })

      this.setState({books: sortedArray})
    } else {
      this.setState({books: booksArray})
    }
  }

  sortParentBy (str) {
    const sortedArray = this.state.books.sort((a,b) => {
      if (a[str] < b[str])
        return -1;
      if (a[str] > b[str])
        return 1;
      return 0;
    })

    this.setState({books: sortedArray})
  }

  render() {
    return (
      <div className="wrapper">
        <div>
          <UpdateBooks currentBook={this.state.updatedBook} updateCurrentBook={this.updateBookObj.bind(this)} />
        </div>
        <div>

          <SearchLine sortingList={this.sortList.bind(this)} />
          <SortFields sortBy={this.sortParentBy.bind(this)}/>
          <BooksList updateCurrentBook={this.updateBook.bind(this)} deleteCurrentBook={this.deleteBook.bind(this)} books={this.state.books}/>
        </div>
      </div>
    );
  }
}

export default App;
