import React from 'react';

export default class MainContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log('Main', this.state);

    // if (view == constants.viewState.error) return null;
    return <div className="poker-room-container">1111</div>;
  }
}
