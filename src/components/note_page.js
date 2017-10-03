import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNote } from '../actions'
import { Link } from 'react-router-dom';

import Note from './note';

class NotePage extends Component {
  componentDidMount() {
    this.props.fetchNote();
  }

  render() {
    let message = this.props.note ? this.props.note : "";
    return (
      <div className="NotePage container text-center">
        <Link className="btn btn-primary" to="/edit">Add to/Change Note</Link>
        <Note note={message}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { note: state.note }
}

export default connect(mapStateToProps, { fetchNote })(NotePage)
