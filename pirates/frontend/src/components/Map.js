import React, { Component } from "react"
import {render} from "react-dom"
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex, GridGenerator, HexUtils } from 'react-hexgrid';
import configs from './configurations';


export default class Map extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (<div>
            <h3>Mapname: </h3>
            <h4>Map islands: </h4>
        </div>
        );
    };
};