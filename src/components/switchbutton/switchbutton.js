import React from 'react';

export class SwitchButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      isOn: props.isOn,
    };
  }

  handleClick(){
    this.setState({
      isOn: !this.state.isOn
    });
    console.log("SwitchButton.handleClick()!!");
  }

  render() {
    return (
        <div
          className={`btn ${this.state.isOn ? "on" : "off"}`}
          onClick={this.handleClick.bind(this)}
        >
          {this.state.name}
        </div>
    );
  }
}
