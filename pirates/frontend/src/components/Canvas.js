import React, { Component } from "react"
import {render} from "react-dom"
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex, GridGenerator, HexUtils } from 'react-hexgrid';
import configs from './configurations';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";


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
        
        this.state = { 
          hexagons, 
          config, 
          path: { start: null, end: null },
          islands: [],
          island_objects: props.islands,
          selectedHex: new Hex(0,0,0)}; 
          
        this.setIslandHexes = this.setIslandHexes.bind(this)
        
        this.colorIslands();
      
    };
    componentDidMount() {
      

    
  
    };

    componentWillReceiveProps(props) {
      this.setState({island_objects: props.islands});
      this.setIslandHexes();
  }
    setIslandHexes(){
      console.log(this.props)
      const {islands} = this.state;
      //const island_objects = JSON.parse(this.props.islands)
      //var islands_json = {}
      //islands_json = this.props.islands;
      //const obj = JSON.parse(islands_json)
      //console.log(obj[1])
      //const island_objects = JSON.parse(this.props.islands)
      // Object.entries(this.props.islands).forEach((key, value)=> {
      //   island_objects.push(value)
      // })
      const island_objects = [{name: "isle", q:2, r:0, s:-2}, {name: "isle2", q:0, r:0, s:0}, {name: "isle3", q:0, r:-3, s:3}];
      console.log(this.props.islands)
      for(var i=0; i < island_objects.length; i++){
        islands.push(new Hex(island_objects[i].q,island_objects[i].r,island_objects[i].s));
      this.setState({islands: islands});
      }
    }

    colorSelectedHex(source){
      const { hexagons, selectedHex } = this.state;
      const targetHex = source.state.hex;
      const coloredHexes = hexagons.map(hex => {
      hex.props = hex.props || {};
      //alert("target hex: (" + targetHex.q + ", " + targetHex.r + ", " + targetHex.s + ")")
      hex.props.className += (targetHex.q === hex.q && targetHex.r === hex.r) ? ' red-border ' : '';
      return hex;
      });
      this.setState({ hexagons: coloredHexes });
    }

    colorIslands() {
      const { hexagons, islands } = this.state;
      const coloredHexes = hexagons.map(hex => {
        hex.props = hex.props || {};
        islands.forEach((item) => {
          var targetHex = item;
          hex.props.className += (targetHex.q === hex.q && targetHex.r === hex.r) ? ' green ' : '';
          // hex.props.className += (targetHex.q === hex.q && targetHex.r === hex.r) ? ' red-border ' : '';
        });
        
        
        //hex.props.className += (targetHex.q === hex.q && targetHex.r === hex.r) ? ' green ' : '';
        return hex;
    });
    
    this.setState({ hexagons: coloredHexes });
    };
    
    // onClick(event, source) {
    //   const { hexagons, islands } = this.state;
    //   const coloredHexes = hexagons.map(hex=> {
    //     hex.props = hex.props || {};
    //     if (hex.q === islands.first.q && hex.r === islands.first.r && hex.s === islands.first.s) {
    //       hex.props.className += 'green';
          
    //     };
    //     return hex;
    //   });
    //   this.setState({hexagons: coloredHexes})
    // }
    colorUnselectedHex(){
      const { hexagons, selectedHex } = this.state;
      const coloredHexes = hexagons.map(hex => {
        hex.props = hex.props || {};
        //alert("target hex: (" + targetHex.q + ", " + targetHex.r + ", " + targetHex.s + ")")
        hex.props.className -= (selectedHex.q === hex.q && selectedHex.r === hex.r) ? ' red-border ' : '';
        return hex;
        });
        this.setState({ hexagons: coloredHexes });
    }
    
    onClick(event, source) {
      const { selectedHex } = this.state;
      const nextSelectedHex = source.state.hex;
      this.colorUnselectedHex();
      this.setState({selectedHex: nextSelectedHex})
      this.colorSelectedHex(source);
      this.colorIslands();
      // if (this.state.hexagons.filter(h => h.selected)>0){
      //   const currentSelectedHex = this.state.hexagons.filter(h => h.selected);
      //   currentSelectedHex.props.className -= ' red-border ';
      // }
      
      // const { selectedHex } = this.state;
      // const nextSelectedHex = source.state.hex;
      // nextSelectedHex.selected = true;
      // // nextSelectedHex.props.className += ' red-border ';
      // this.setState({selectedHex: nextSelectedHex});
      // alert(HexUtils.getID(nextSelectedHex));
      // const currentSelectedHex = this.state.hexagons.filter(h => h.selected);
      // currentSelectedHex.props.className -= ' red-border ';
      // currentSelectedHex.selected = false;
      // nextSelectedHex = source.state.hex;
      // nextSelectedHex.selected = true;
      // nextSelectedHex.props.className += ' red-border ';
      
      // const coloredHexes = hexagons.map(hex => {
      //     hex.props = hex.props || {};
      //     islands.forEach((item) => {
      //       var targetHex = item;
      //       hex.props.className += (targetHex.q === hex.q && targetHex.r === hex.r) ? ' green ' : '';
      //     });
          
          
      //     //hex.props.className += (targetHex.q === hex.q && targetHex.r === hex.r) ? ' green ' : '';
      //     return hex;
      // });
      
      // this.setState({ hexagons: coloredHexes });
          
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

    // colorIslands(){
    //   const {hexagons} = this.state;
    //   const coloredHexes = hexagons.map(hex => {
    //     hex.props = hex.props || {};
    //     if (hex.q == 0){
    //       hex.props.className += 'green'
    //     }
    //     return hex;
        
    //   });
    //   this.setState({hexagons: coloredHexes});
    // }

    render() {
      const { hexagons, config, path } = this.state;
      const layout = config.layout;
      const size = { x: layout.width, y: layout.height };
      
    return (
      <div>
        <h4>Canvas islands: {this.props.islands} </h4>
        <HexGrid width={config.width} height={config.height}>
          <Layout size={size} flat={layout.flat} spacing={layout.spacing} origin={config.origin}>
            {
              // note: key must be unique between re-renders.
              // using config.mapProps+i makes a new key when the goal template chnages.
              hexagons.map((hex, i) => (
                <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} className={hex.props ? hex.props.className : null}
                onMouseEnter={(e, h) => this.onMouseEnter(e, h)}
                onClick={(e, h) => this.onClick(e, h)}>
                  {/* {(hex.q == 0 ) ? 
                  <Text> Isle </Text>: <Text>{HexUtils.getID(hex)}</Text> } */}

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
