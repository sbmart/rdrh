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
        hello
      </div>
    )
  }
}

export default ListComponent;