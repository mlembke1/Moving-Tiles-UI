import React from 'react'
import './tile-component.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setIsEnlarged } from '../../actions/setIsEnlarged'

class Tile extends React.Component {

  hoverHandler = (i, imageSet) => { 
    this.props.setIsEnlarged(i, imageSet, this.props.imageSetNuanced)
  }

    render(){
      return(
        <div 
        onMouseOver={this.hoverHandler.bind(null, this.props.id, this.props.imageSet)}
        isenlarged={`${this.props.isEnlarged}`} 
        className="tile-container">
          <img src={this.props.eachImage} alt="Icon for a specific techonology" />
        </div>
      )
    }
}

const mapStateToProps = state => {
  return {
      bottomImages: state.images.bottomImages,
      topImages: state.images.topImages
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({setIsEnlarged}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Tile)