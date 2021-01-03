import React from 'react';
import { SwitchButton } from "../switchbutton/switchbutton";

export class App extends React.Component {
  render() {
    return (
      <div>
        <section>
            <h2>Office</h2>
            <div>
                <SwitchButton name="Hauptlicht" isOn={true}/>
            </div>
        </section>
        <section>
            <h2>Suite</h2>
            <div>
              <SwitchButton name="Hauptlicht" isOn={true}/>
              <SwitchButton name="Deckenventilator" isOn={false}/>
            </div>
        </section>
        <section>
            <h2>Living</h2>
            <div>
                <SwitchButton name="Hauptlicht" isOn={true}/>
                <SwitchButton name="dichroitisches Licht" isOn={true}/>
                <SwitchButton name="Ecklicht" isOn={true}/>
                <SwitchButton name="Bücherregal" isOn={true}/>
            </div>
        </section>

      </div>
    );
  }
}
