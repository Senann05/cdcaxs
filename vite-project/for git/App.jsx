import React, { Component } from "react";
import Wine from "./Wine";

class App extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Wine
          title="brut rose armand de brignac"
          description="he ambitionesents the excellt ping with vibrant character, with a soft texturech"
          rating={3.6}
        />
      </div>
    );
  }
}

export default App;