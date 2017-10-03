import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { updateNote, fetchNote } from '../actions';

class NoteEdit extends Component {
  componentWillMount(){
    this.props.fetchNote();
  }

  renderNoteField(field){
    const { meta: { touched, error } } = field;
    const className = touched && error ? 'has-error' : '';
    return (
      <div className={className}>
        <textarea className="form-control" {...field.input} />

        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  onSubmit(note) {
    this.props.updateNote(note, () => {
      this.props.history.push('/');
    })
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="NoteEdit container">
        <h1 className="text-center">Add to the note!</h1>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            name="note"
            component={this.renderNoteField}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link className="btn btn-danger" to="/">Cancel</Link>
        </form>
      </div>
    );
  }
}

function validate(value) {
  const errors = {};
  if(!value.note) {
    errors.note = "You can't leave the note empty!"
  }
  return errors;
}

let InitializeFromStateForm = reduxForm({
  validate,
  form: 'initializeFromState',
  enableReinitialize: true
})(NoteEdit);

InitializeFromStateForm = connect(
  state => ({
    initialValues: {
      note: state.note ? state.note.note : ""
    }
  }),
  { fetchNote, updateNote }
)(InitializeFromStateForm);

export default InitializeFromStateForm;
