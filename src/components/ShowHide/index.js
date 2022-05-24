import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    isFirstName: false,
    isLastName: false,
  }

  OnFirstName = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  OnLastName = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state
    return (
      <div className="show_container">
        <h1>Show/Hide</h1>
        <div className="show_and_hide">
          <div>
            <button
              type="button"
              className="ShowFirstName"
              onClick={this.OnFirstName}
            >
              Show/Hide FirstName
            </button>
            {isFirstName && <p className="firstName">Joe</p>}
          </div>
          <div>
            <button
              type="button"
              className="ShowLastName"
              onClick={this.OnLastName}
            >
              Show/Hide LastName
            </button>
            {isLastName && <p>Joe</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
