import React, { Component } from "react"
import {render} from "react-dom"
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex, GridGenerator, HexUtils } from 'react-hexgrid';
import configs from './configurations';
import GamePage from './GamePage'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    return (
      <div className="App" >
        {/* <Router>
            <Switch>
            <Route 
                path="/game/:gameCode"
                render={(props) => {
                    return <GamePage />;
                }}  
                />
            </Switch>
        </Router> */}
        <Router>
          <Switch>
            <Route path="/game/:gameCode"
            component={GamePage}/>
          </Switch>
          </Router>
        {/* <GamePage /> */}
      </div>
    );
    }
}

const appDiv = document.getElementById('app');
render(<App />, appDiv);