import React from 'react';
import { SwitchButton } from "../button/button";

export class App extends React.Component {
  render() {
    return (
      <section>
          <h2>Room</h2>
          <div>
              <SwitchButton/>
          </div>
      </section>
    );
  }
}
