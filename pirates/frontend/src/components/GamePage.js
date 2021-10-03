import React, { Component } from "react"
import {render} from "react-dom"
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex, GridGenerator, HexUtils } from 'react-hexgrid';
import configs from './configurations';
import Canvas from './Canvas'
import Map from "./Map";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default class GamePage extends Component {
    constructor(props) {
        super(props);
        this.gameCode = this.props.match.params.gameCode;
    }

    render() {
    return (
      <div >
        {/* <h1>gameCode: {this.gameCode}</h1> */}
        <Map gameCode={this.gameCode}/>
        
      </div>
    );
    }
}
