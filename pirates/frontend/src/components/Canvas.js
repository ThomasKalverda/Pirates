import React, { Component } from "react"
import {render} from "react-dom"
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex, GridGenerator, HexUtils } from 'react-hexgrid';
import configs from './configurations';


export default class Canvas extends Component {
    constructor(props) {
        super(props);
        
        const config = {
          "width": 1800,
          "height": 900,
          "layout": { "width": 6, "height": 6, "flat": false, "spacing": 1.02 },
          "origin": { "x": 0, "y": 0 },
          "map": "hexagon",
          "mapProps": [ 4 ]}
        const generator = GridGenerator.getGenerator(config.map);
        const hexagons = generator.apply(this, config.mapProps);
        this.state = { hexagons, config, path: { start: null, end: null } };
        this.colorIslands()
    }
    componentDidMount() {
      this.colorIslands()
    }
    onClick(event, source) {
      const { hexagons } = this.state;
      const targetHex = source.state.hex;
      const coloredHexes = hexagons.map(hex => {
          hex.props = hex.props || {};
          hex.props.className += (targetHex.q === hex.q && targetHex.r === hex.r) ? ' green ' : '';
          return hex;
      });
      
      this.setState({ hexagons: coloredHexes });
          
      // const { path } = this.state;
      // if (path.start == null) {
      //   path.start = source.state.hex;
      // }
      // else {
      //   path.start = null;
      //   path.end = null;
      // }
      // this.setState({ path });
    }
    onMouseEnter(event, source) {
      // Set the path's end on hover
    //   const { path, hexagons } = this.state;
    //   const targetHex = source.state.hex;
    //   path.end = targetHex;
    //   // Color some hexagons
    // const coloredHexas = hexagons.map(hex => {
    //   hex.props = hex.props || {};
    //   // Highlight tiles that are next to the target (1 distance away)
    //   hex.props.className = (HexUtils.distance(targetHex, hex) < 2) ? 'active' : '';

    //   // If the tile is on same coordinate, add class specific to the coordinate name
    //   hex.props.className += (targetHex.q === hex.q) ? ' q ' : '';
    //   hex.props.className += (targetHex.r === hex.r) ? ' r ' : '';
    //   hex.props.className += (targetHex.s === hex.s) ? ' s ' : '';

    //   return hex;
    // });

    // this.setState({ path, hexagons: coloredHexas });
    
  }

    colorIslands(){
      const {hexagons} = this.state;
      const coloredHexes = hexagons.map(hex => {
        hex.props = hex.props || {};
        if (hex.q == 0){
          hex.props.className += 'green'
        }
        return hex;
        
      });
      this.setState({hexagons: coloredHexes});
    }

    render() {
      const { hexagons, config, path } = this.state;
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
                <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} className={hex.props ? hex.props.className : null}
                onMouseEnter={(e, h) => this.onMouseEnter(e, h)}
                onClick={(e, h) => this.onClick(e, h)}>
                  {(hex.q == 0 ) ? 
                  <Text> Isle </Text>: <Text>{HexUtils.getID(hex)}</Text> }

                </Hexagon>
              ))
            }
            <Path start={path.start} end={path.end} />
          </Layout>
          {/* { <Pattern id="pat-1" link="https://upload.wikimedia.org/wikipedia/commons/f/f3/Green.PNG" size={hexagonSize} /> } */}
        </HexGrid>
      </div>
    );
    }
}
