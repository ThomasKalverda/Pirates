import React, { Component } from "react"
import {render} from "react-dom"
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex, GridGenerator, HexUtils } from 'react-hexgrid';
import configs from './configurations';
import Canvas from './Canvas'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    return (
      <div className="App" >
        
        
        <TransformWrapper>
        <TransformComponent>
          <Canvas/>
        </TransformComponent>
      </TransformWrapper>
      </div>
    );
    }
}

const appDiv = document.getElementById('app');
render(<App />, appDiv);