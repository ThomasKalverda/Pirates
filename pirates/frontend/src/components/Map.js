import React, { Component } from "react"
import {render} from "react-dom"
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex, GridGenerator, HexUtils } from 'react-hexgrid';
import configs from './configurations';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Canvas from './Canvas'


export default class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null,
            name: null,
            code: null,
            numberOfPlayers: null,
            users: [],
            finished: false,
            createdAt: null,
            currentTick: null,
            islands: null
        }
        this.getGameDetails();
        
    };

    getGameDetails() {
        return fetch("/api/get-game" + "?code=" + this.props.gameCode)
          .then((response) => {
            if (!response.ok) {
              this.props.history.push("/");
            }
            return response.json();
          })
          .then((data) => {
            this.setState({
                id: data.id,
                code: data.code,
                name: data.name,
                numberOfPlayers: data.number_of_players,
                users: data.users,
                finished: data.finished,
                createdAt: data.created_at,
                currentTick: data.current_tick,
                islands: data.islands
            });
          });
      }
    
    

    render() {
        return (<div>
            <h3>Game name: {this.state.name} </h3>
            <h4>Gamecode: {this.props.gameCode}</h4>
            <h4>Map JSON: {this.state.islands}</h4>
            numberOfPlayers: {this.state.numberOfPlayers}
            users: {this.state.users}
            finished: {this.state.finished}
            createdAt: {this.state.createdAt}
            currentTick: {this.state.currentTick}
            <TransformWrapper>
        <TransformComponent>
          <Canvas islands={this.state.islands}/>
        </TransformComponent>
      </TransformWrapper>
        </div>
        );
    };
};