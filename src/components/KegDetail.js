import React from 'react';
import PropTypes from 'prop-types';
import KegForm from './KegForm';

class KegDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  handleEditFormSubmission = (event) => {
    event.preventDefault();
    this.props.onEditSubmit({
      brew: event.target.brew.value, brewer: event.target.brewer.value, description: event.target.description.value, price: event.target.price.value, volumeHeld: this.props.keg.volumeHeld, id: this.props.keg.id, showDelete: this.props.showDelete
    })

  }

  render() {
    let deleteKegYouSure;
    let editKegForm;

    if (this.props.showEditForm) {
      editKegForm = <KegForm submitHandler={this.handleEditFormSubmission} buttonText="Submit edits." />
    }
    if (this.props.deleteKegPrompt) {
      deleteKegYouSure = <h2 onClick={() => this.props.onClickingDelete(this.props.keg.id)}>Are you sure? This action cannot be undone. Click here to delete.</h2>
    }

    return (
      <React.Fragment>
        <h2>{this.props.keg.brew}</h2>
        <p>Brewed by: {this.props.keg.brewer}</p>
        <p><em>{this.props.keg.description}</em></p>
        <p>Price per draught: <strong>{this.props.keg.price} gp</strong></p>
        <br /><br /><hr />
        <button onClick={this.props.onClickingToEdit}>Edit this Brew.</button>
        {editKegForm}
        <button onClick={this.props.showDeleteCheck}>Delete this Brew.</button>
        {deleteKegYouSure}

      </React.Fragment>
    )
  }

}
KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingToEdit: PropTypes.func,
  onEditSubmit: PropTypes.func,
  showDeleteCheck: PropTypes.func,
  showEditForm: PropTypes.bool
}

export default KegDetail;