import React from 'react'

class ListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lastClickedButton: ''
    };
  }

  render() {
    return (
      <div>
        <h1>The last clicked button is {this.state.lastClickedButton}</h1>
        <ul>
          <li>
            <button
              onClick={() => {
                this.setState({ lastClickedButton: 'Create '});
                this.props.createSomething();
              }}
            className="my-button">
            Create
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                this.setState({ lastClickedButton: 'Read' });
                this.props.readSomething();
              }}
            className="my-button">
            Read
            </button>
          </li>
          <li>
            <button 
            onClick={() => {
              this.setState({ lastClickedButton: 'Update'});
              this.props.updateSomething();
            }}
            className="my-button">
              Updata
            </button>
          </li>
          <li>
            <button 
              onClick={() => {
                this.setState({ lastClickedButton: 'Destroy'});
                this.props.destroySomething();
              }}
            className="my-button">
              Destroy
            </button>
          </li>
        </ul>
      </div>
    )
  }
}

export default ListComponent;