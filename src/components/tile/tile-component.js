import React from 'react'
import './tile-component.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Tile extends React.Component {
  onLogoutClick = event => {
    event.preventDefault()
    this.props.logout()
  }
    render(){
      return(
        <div className="tile-container">
        
        </div>
      )
    }
}

const mapStateToProps = state => state.auth

const mapDispatchToProps = dispatch => bindActionCreators({logout}, dispatch)

export default connect()(Tile)