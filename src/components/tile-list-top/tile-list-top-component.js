import React from 'react'
import './tile-list-top-component.css'
import { connect } from 'react-redux'
import Tile from '../tile/tile-component'
import { bindActionCreators } from 'redux'
import { getAllImages } from '../../actions/getAllImages'


class TileListTop extends React.Component {

  componentWillMount(){
    this.props.getAllImages()
  }

  render() {
    return (
        <div className="tile-list-container">
          {
            this.props.topImages.map((eachImage, i) => (
              <Tile 
                imageSetNuanced="SET_IS_ENLARGED_TOP"
                imageSet={this.props.topImages}
                key={i}
                id={eachImage.id} 
                isEnlarged={eachImage.isEnlarged} 
                eachImage={ eachImage.imagepath } 
              />
            ))
          }
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      topImages: state.images.topImages
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ getAllImages }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TileListTop)