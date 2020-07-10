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

  handleClickingEditSubmit = (keg) => {
    const newMasterKegList = this.state.masterKegList.map((obj, index) => (obj.id === keg.id ? Object.assign({}, this.state.masterKegList[index], keg) : obj))
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: keg
    })
  }

  handleClickingDelete = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(e => e.id !== id)
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null
    })
  }

  handleDrawingPint = (id) => {
    const thisKeg = this.state.masterKegList.filter(e => e.id === id)[0]
    const volumeValue = thisKeg.volumeHeld
    const newVolume = { volumeHeld: volumeValue - 1 }
    let newMasterKegList = this.state.masterKegList;
    if (thisKeg.volumeHeld > 0) {
      newMasterKegList = this.state.masterKegList.map((obj, index) => (obj.id === thisKeg.id ? Object.assign(this.state.masterKegList[index], newVolume) : obj))
    }
    this.setState({
      masterKegList: newMasterKegList
    })
  }

  render() {
    let kegSelected = null;

    if (this.props.selectedKeg !== {}) {
      kegSelected = <KegDetail keg={this.props.selectedKeg} onEditSubmit={this.handleClickingEditSubmit} onClickingDelete={this.handleClickingDelete} />
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
  }
}
TaproomControl = connect(mapStateToProps)(TaproomControl)
export default TaproomControl;