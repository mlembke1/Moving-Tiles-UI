import React from 'react'
import './tile-list-component.css'
import { connect } from 'react-redux'
import Tile from '../../components/tile/tile-component'
import { bindActionCreators } from 'redux'
import { getAllImages } from '../../actions/getAllImages'


class TileList extends React.Component {

  componentWillMount(){
    this.props.getAllImages()
  }

  render() {
    return (
        <div className="tile-list-container">
          {
            this.props.allImages.map((eachImage, i) => <Tile key={i} eachImage={ eachImage.imagepath } /> )
          }
        </div>
    )
  }
}

const mapStateToProps = state => {
  return state.images
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ getAllImages }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TileList)