var React = require('react');

var About = React.createClass({
  getInitialState: function () {
    return {modal: false};
  },

  _userChange: function () {
    this.setState({user: UserStore.all()});
  },

  changeModal: function () {
    var modal = this.state.modal ? false : true;
    this.setState({modal: modal});
  },

  render: function () {
    var modal = this.state.modal ? true : false

    if (!modal) {
      return (
        <button type='button' id='about-btn' className='btn btn-primary' onClick={this.changeModal}>
          About
        </button>
      );

    } else {

      return(
        <div className='modal-screen' onClick={this.changeModal}>
          <div id='about-modal' className='modal-content'>
            <p id='about-paragraph'>
                 Seek is a community platform for asking/answering questions.
              Seeking knowledge? Come to Seek and ask! Just remember to pay
              it forward by providing answers of your own!
            </p>

            <a className='about-link' href='https://github.com/aschak/Seek' target='_blank'>Github</a>
            <a className='about-link' href='http://kareemascha.com' target='_blank'>Kareem Ascha</a>
          </div>
        </div>
      );

    }

  }
});

module.exports = About;
