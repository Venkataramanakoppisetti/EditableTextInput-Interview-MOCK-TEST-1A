import {Component} from 'react'

import './index.css'

class EditableItemComponent extends Component {
  state = {
    isEditClicked: false,
    eventValue: '',
  }

  onChangeInput = event => {
    this.setState({
      eventValue: event.target.value,
    })
  }

  onClickEdit = () => {
    this.setState(prevState => ({
      isEditClicked: !prevState.isEditClicked,
    }))
  }

  render() {
    const {isEditClicked, eventValue} = this.state
    return (
      <div className="editable-app-container">
        <div className="editable-container">
          <h1 className="main-heading">Editable Text Input</h1>
          <div className="input-container">
            {isEditClicked ? (
              <div className="paragraph-container">
                <p className="paragraph">{eventValue}</p>
                <button
                  className="input-button"
                  type="button"
                  onClick={this.onClickEdit}
                >
                  Edit
                </button>
              </div>
            ) : (
              <>
                <input
                  value={eventValue}
                  onChange={this.onChangeInput}
                  type="text"
                  className="input"
                />
                <button
                  className="input-button"
                  type="button"
                  onClick={this.onClickEdit}
                >
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EditableItemComponent
