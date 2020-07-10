import React from 'react';
import AddKeg from './AddKeg';
import KegList from './KegList';
import KegDetail from './KegDetail';
import { connect } from 'react-redux';
import * as a from './../actions/index';

const fullPageStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  backgroundColor: "#ccd8ff"
}

const detailPageStyles = {
  position: "sticky",
  top: "0"
}

const listPageStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  width: "50%"
}

const listStyles = {
  display: "flex",
  flexFlow: "row wrap",
  flexShrink: "2",
}

class TaproomControl extends React.Component {
  constructor(props) {
    super(props);

  }

  handleAddingNewKegToStock = (keg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(keg);
    dispatch(action)
  }

  handleSelectingKeg = (id) => {
    const thisKeg = this.props.masterKegList[id]
    const { dispatch } = this.props;
    const action = a.selectKeg(thisKeg);
    console.log(this.props.selectedKeg)
    dispatch(action);
  }

  handleClickingToEdit = () => {
    console.log(this.props.showEditForm)
    console.table(this.props)
    const { dispatch } = this.props;
    const action = a.toggleEditForm()
    dispatch(action)
  }

  handleClickingEditSubmit = (keg) => {
    const { dispatch } = this.props;
    const { brew, brewer, description, price, volumeHeld, showDelete, id } = keg
    const editedKeg = {
      brew: brew,
      brewer: brewer,
      description: description,
      price: price,
      volumeHeld: volumeHeld,
      showDelete: showDelete,
      id: id
    }
    const action = a.addKeg(editedKeg);
    dispatch(action);
    const action2 = a.selectKeg(editedKeg);
    dispatch(action2);
  }
  handleClickingShowDelete = () => {

  }

  handleClickingDelete = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(e => e.id !== id)
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null
    })
  }

  handleDrawingPint = (id) => {
    const thisKeg = this.props.masterKegList[id]
    if (thisKeg.volumeHeld > 0) {
      const { dispatch } = this.props;
      const dispatchedKeg = {
        ...thisKeg,
        volumeHeld: thisKeg.volumeHeld - 1
      }
      const action = a.addKeg(dispatchedKeg)
      dispatch(action)
    }


  }

  render() {
    let kegSelected = null;
    if (this.props.selectedKeg !== {}) {
      kegSelected = <KegDetail keg={this.props.selectedKeg} onEditSubmit={this.handleClickingEditSubmit} onClickingToEdit={this.handleClickingToEdit} onClickingDelete={this.handleClickingDelete} showEditForm={this.props.showEditForm} />
    }

    return (
      <React.Fragment>
        <div id='full-page' style={fullPageStyles}>
          <div id='add-and-list' style={listPageStyles}>
            <div>
              <AddKeg onNewKegCreation={this.handleAddingNewKegToStock} />
            </div>
            <div id="list" style={listStyles}>
              <KegList kegList={this.props.masterKegList} onKegSelect={this.handleSelectingKeg} onDrawPint={this.handleDrawingPint} />
            </div>
          </div>
          <div id='details-and-edit' style={detailPageStyles}>
            {kegSelected}
          </div>
        </div>
      </React.Fragment >
    )
  }
}

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    selectedKeg: state.selectedKeg,
    showEditForm: state.showEditForm
  }
}
TaproomControl = connect(mapStateToProps)(TaproomControl)
export default TaproomControl;