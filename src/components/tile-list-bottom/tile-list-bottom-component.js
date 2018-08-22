import React from 'react'
import './tile-list-bottom-component.css'
import { connect } from 'react-redux'
import Tile from '../tile/tile-component'
import { bindActionCreators } from 'redux'
import { getAllImages } from '../../actions/getAllImages'


class TileListBottom extends React.Component {

  componentWillMount(){
    this.props.getAllImages()
  }

  render() {
    return (
        <div className="tile-list-container">
          {
            this.props.bottomImages.map((eachImage, i) => (
              <Tile 
                key={i}
                id={eachImage.id}
                imageSetNuanced="SET_IS_ENLARGED_BOTTOM"
                imageSet={this.props.bottomImages}
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
      bottomImages: state.images.bottomImages
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ getAllImages }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TileListBottom)