import React from 'react'
import './tile-component.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Tile extends React.Component {
    render(){
      return(
        <div className="tile-container">
          <img src={this.props.eachImage} alt="Icon for a specific techonology" />
        </div>
      )
    }
}

// const mapStateToProps = state => state.allImages

// const mapDispatchToProps = dispatch => bindActionCreators({logout}, dispatch)

export default connect()(Tile)