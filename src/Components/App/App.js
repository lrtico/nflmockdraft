import React, { Component } from 'react';
import './App.scss';
import Choose from '../Choose/Choose';
import Options from '../Options/Options';
import Simulator from '../Simulator/Simulator';

class App extends Component {
  state = {
    "choose": [
      {
        "id": 1,
        "conference": "AFC",
        "divisions": [
          {
            "id": 1,
            "division": "North",
            "teams": [
              {
                "id": 1,
                "name": "Baltimore Ravens",
                "shortName": "ravens"
              },
              {
                "id": 2,
                "name": "Cincinnati Bengals",
                "shortName": "bengals"
              },
              {
                "id": 3,
                "name": "Cleveland Browns",
                "shortName": "browns"
              },
              {
                "id": 4,
                "name": "Pittsburgh Steelers",
                "shortName": "steelers"
              }
            ]
          },
          {
            "id": 2,
            "division": "South",
            "teams": [
              {
                "id": 5,
                "name": "Houston Texans",
                "shortName": "texans"
              },
              {
                "id": 6,
                "name": "Indianapolis Colts",
                "shortName": "colts"
              },
              {
                "id": 7,
                "name": "Jacksonville Jaguars",
                "shortName": "jaguars"
              },
              {
                "id": 8,
                "name": "Tennessee Titans",
                "shortName": "titans"
              }
            ]
          },
          {
            "id": 3,
            "division": "East",
            "teams": [
              {
                "id": 9,
                "name": "Buffalo Bills",
                "shortName": "bills"
              },
              {
                "id": 10,
                "name": "Miami Dolphins",
                "shortName": "dolphins"
              },
              {
                "id": 11,
                "name": "New York Jets",
                "shortName": "jets"
              },
              {
                "id": 12,
                "name": "New England Patriots",
                "shortName": "patriots"
              }
            ]
          },
          {
            "id": 4,
            "division": "West",
            "teams": [
              {
                "id": 13,
                "name": "Denver Broncos",
                "shortName": "broncos"
              },
              {
                "id": 14,
                "name": "Kansas City Chiefs",
                "shortName": "chiefs"
              },
              {
                "id": 15,
                "name": "Las Vegas Raiders",
                "shortName": "raiders"
              },
              {
                "id": 16,
                "name": "Los Angeles Chargers",
                "shortName": "chargers"
              }
            ]
          }
        ]
      },
      {
        "id": 2,
        "conference": "NFC",
        "divisions": [
          {
            "id": 1,
            "division": "North",
            "teams": [
              {
                "id": 17,
                "name": "Chicago Bears",
                "shortName": "bears"
              },
              {
                "id": 18,
                "name": "Detroit Lions",
                "shortName": "lions"
              },
              {
                "id": 19,
                "name": "Green Bay Packers",
                "shortName": "packers"
              },
              {
                "id": 20,
                "name": "Minnesota Vikings",
                "shortName": "vikings"
              }
            ]
          },
          {
            "id": 2,
            "division": "South",
            "teams": [
              {
                "id": 21,
                "name": "Atlanta Falcons",
                "shortName": "falcons"
              },
              {
                "id": 22,
                "name": "Carolina Panthers",
                "shortName": "panthers"
              },
              {
                "id": 23,
                "name": "New Orleans Saints",
                "shortName": "saints"
              },
              {
                "id": 24,
                "name": "Tampa Bay Buccaneers",
                "shortName": "buccaneers"
              }
            ]
          },
          {
            "id": 3,
            "division": "East",
            "teams": [
              {
                "id": 25,
                "name": "Dallas Cowboys",
                "shortName": "cowboys"
              },
              {
                "id": 26,
                "name": "New York Giants",
                "shortName": "giants"
              },
              {
                "id": 27,
                "name": "Philadelphia Eagles",
                "shortName": "eagles"
              },
              {
                "id": 28,
                "name": "Washington Redskins",
                "shortName": "redskins"
              }
            ]
          },
          {
            "id": 4,
            "division": "West",
            "teams": [
              {
                "id": 29,
                "name": "Arizona Cardinals",
                "shortName": "cardinals"
              },
              {
                "id": 30,
                "name": "Los Angeles Rams",
                "shortName": "rams"
              },
              {
                "id": 31,
                "name": "San Francisco 49ers",
                "shortName": "49ers"
              },
              {
                "id": 32,
                "name": "Seattle Seahawks",
                "shortName": "seahawks"
              }
            ]
          }
        ]
      }
    ],
    "boards": [
      {
        "id": 1,
        "name": "Walter Football"
      },
      {
        "id": 2,
        "name": "Gil Brandt"
      },
      {
        "id": 3,
        "name": "Scouts, Inc."
      },
      {
        "id": 4,
        "name": "Mel Kiper, Jr."
      },
      {
        "id": 5,
        "name": "NFL Countdown"
      },
      {
        "id": 6,
        "name": "Daniel Jeramiah"
      }
    ],
    "rounds": [
      {
        "id": 1,
        "round": "1",
      },
      {
        "id": 2,
        "round": "2",
      },
      {
        "id": 3,
        "round": "3",
      },
      {
        "id": 4,
        "round": "4",
      },
      {
        "id": 5,
        "round": "5",
      },
      {
        "id": 6,
        "round": "6",
      },
      {
        "id": 7,
        "round": "7",
      }
    ],
    "userSettings": {
      "id": 1,
      "board": null,
      "rounds": null,
      "selectedTeam": "ravens",
      "selectedPlayers": [],
    }
  };

  render() {
    const { choose, boards, userSettings: { selectedTeam }, rounds } = this.state;
    return (
      <div>
        {/* <Choose teams={choose} /> */}
        <Options boards={boards} team={selectedTeam} rounds={rounds} />
        {/* <Simulator /> */}
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <Choose />
//       {/* <Options /> */}
//       {/* <Simulator /> */}
//     </div>
//   );
// }

export default App;
