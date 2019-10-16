import React, { useState } from 'react'

const ListComponent = props => {
  const [lastClickedButton, setLastClickedButton] = useState('');

    return (
      <div>
        <h3>The last clicked CRUD button is {lastClickedButton}</h3>
        <ul>
          <li>
            <button
              onClick={() => {
                setLastClickedButton('Create');
                //this.props.createSomething();
              }}
            className="my-button">
            Create
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setLastClickedButton('Read');
                // this.props.readSomething();
              }}
            className="my-button">
            Read
            </button>
          </li>
          <li>
            <button 
            onClick={() => {
              setLastClickedButton('Update');
              // this.props.updateSomething();
            }}
            className="my-button">
              Updata
            </button>
          </li>
          <li>
            <button 
              onClick={() => {
                setLastClickedButton('Destroy');
                // this.props.destroySomething();
              }}
            className="my-button">
              Destroy
            </button>
          </li>
        </ul>
      </div>
    )
  }


export default ListComponent;