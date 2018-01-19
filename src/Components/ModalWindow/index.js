import React, { Component } from 'react';
import './ModalStyle.css'
import $ from 'jquery'

class Modal extends Component {

  constructor(props) {
    super(props)

    this.state = {
      visible: false
    };
  }

  open () {
    this.setState({
      visible: true
    })

    this.promise = new $.Deferred()
    return this.promise
  }

  modalClose () {
    this.setState({
      visible: false
    }, () => {
      return this.promise.reject()
    })
  }

  modalCloseDeleteBook () {
    this.setState({
      visible: false
    }, () => {
      return this.promise.resolve()
    })
  }

  render() {
    const modalClass = this.state.visible ? 'modalShow' : 'modalHide'

    return (
      <div className={modalClass}>
        <div id="myModal" className="modal">

          <div className="modal-content">
            <span className="close" onClick={this.modalClose.bind(this)}>&times;</span>
            <p>Some text in the Modal..</p>
            <button onClick={this.modalCloseDeleteBook.bind(this)}>Удалить книгу</button>
          </div>

        </div>
      </div>
    );
  }
}

export default Modal;
