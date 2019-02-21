import React, { Component } from 'react';
import Header from "./components/Header";
import UpgradesBar from "./components/UpgradesBar";
import Points from "./components/Points";
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      Game: {
        points: 0,
        clickPoints: 1,
        pointsPerSecond: 0,
        upgrades: {
          upgradeOne: {
            name: "upgradeOne",
            pointsPerSecond: 5,
            cost: 25,
            amount: 0
          },
          upgradeTwo: {
            name: "upgradeTwo",
            pointsPerSecond: 15,
            cost: 100,
            amount: 0
          },
          upgradeThree: {
            name: "upgradeThree",
            pointsPerSecond: 25,
            cost: 250,
            amount: 0
          },
        }
      },
    };
    this.handleClickPoints = this.handleClickPoints.bind(this);
  }

  handleClickPoints() {
    let newState = Object.assign({}, this.state.Game);
    newState.points += newState.clickPoints;
    this.setState({Game: newState})
  }

  handleUpdatePoints() {
    let pps = this.state.Game.pointsPerSecond;
    if (pps !=0) {
      let quarterPps = Math.floor(pps/4);
      let newState = Object.assign({}, this.state.Game);
      newState.points += quarterPps;
      this.setState({Game: newState});
    }
  }

  componentDidMount() {
    this.updatePoints = setInterval(() =>
      this.handleUpdatePoints(), 250
    );
  }

  render() {
    return (
      <div>
        <Header />
        <div id="mainGrid">
          <UpgradesBar />
          <Points points={this.state.Game.points}
          clickPoints={this.handleClickPoints}/>
        </div>
      </div>
    );
  }
}

export default App;
