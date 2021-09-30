import React, { Component } from "react"
import {render} from "react-dom"
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex, GridGenerator, HexUtils } from 'react-hexgrid';
import configs from './configurations';


export default class App extends Component {
    constructor(props) {
        super(props);
        
        const config = {
          "width": 1920,
          "height": 1080,
          "layout": { "width": 6, "height": 6, "flat": false, "spacing": 1.02 },
          "origin": { "x": 0, "y": 0 },
          "map": "hexagon",
          "mapProps": [ 4 ]}
        const generator = GridGenerator.getGenerator(config.map);
        const hexagons = generator.apply(this, config.mapProps);
        this.state = { hexagons, config };
    }

    render() {
      const { hexagons, config } = this.state;
      const layout = config.layout;
      const size = { x: layout.width, y: layout.height };
    return (
      <div className="App">
        <HexGrid width={config.width} height={config.height}>
          <Layout size={size} flat={layout.flat} spacing={layout.spacing} origin={config.origin}>
            {
              // note: key must be unique between re-renders.
              // using config.mapProps+i makes a new key when the goal template chnages.
              hexagons.map((hex, i) => (
                <Hexagon key={config.mapProps + i} q={hex.q} r={hex.r} s={hex.s}>
                  {/* <Text>{HexUtils.getID(hex)}</Text> */}
                </Hexagon>
              ))
            }
          </Layout>
        </HexGrid>
      </div>
    );
    }
}

const appDiv = document.getElementById('app');
render(<App />, appDiv);